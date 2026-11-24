import subprocess, re, sys, os, glob
FF=__import__("os").environ["FFMPEG_DIR"]
# ★ NEW faster-paced VO (44.1 kHz mono pcm). We keep the NATIVE sample rate on the trimmed file so
# playback quality is untouched — the old script resampled to 16 kHz, which is what sounded bad in
# Remotion. faster-whisper resamples internally, so transcription off the 44.1 kHz file is fine.
# Auto-pick the newest VO in assets/audio/, whatever it is called — everything that is NOT the VO
# (music beds, click/SFX assets, our own output) is excluded, so a re-drop just works.
# ⚠ .mpeg IS IN THE LIST ON PURPOSE — ElevenLabs exports land as "….mp3.mpeg" and the WhatsApp
# beds arrive as ".mpeg" too. A glob that only knows wav/mp3/m4a silently finds nothing.
# ⚠ "trump"/"potus"/"hook" ARE IN THE SKIP LIST: the hook footage is an .mp4 sitting in
# assets/audio/, and it is usually the NEWEST file there — without this, a re-run of the pipeline
# picks the stock clip as the voiceover and transcribes Trump instead of the narrator.
SKIP=("vo_trimmed","vo_leveled","music","click","sfx","trump","potus","hook")
cands=[q for q in glob.glob("assets/audio/*.wav")+glob.glob("assets/audio/*.mp3")+glob.glob("assets/audio/*.m4a")
       +glob.glob("assets/audio/*.mpeg")+glob.glob("assets/audio/*.mp4")
       if not any(k in os.path.basename(q).lower() for k in SKIP)]
if not cands: sys.exit("no VO found in assets/audio/")
src=sorted(cands, key=os.path.getmtime)[-1]
print("source:", src)
# 1. detect silences
out=subprocess.run([FF+r"\ffmpeg.exe","-i",src,"-af","silencedetect=noise=-33dB:d=0.3","-f","null","-"],
    capture_output=True,text=True).stderr
starts=[float(m) for m in re.findall(r"silence_start: ([\d.]+)",out)]
ends=[float(m) for m in re.findall(r"silence_end: ([\d.]+)",out)]
dur=float(subprocess.run([FF+r"\ffprobe.exe","-v","error","-show_entries","format=duration","-of","csv=p=0",src],capture_output=True,text=True).stdout.strip())
# ★ 023 (2026-09-30): the take ran 66.3 s trimmed at d=0.45 against the brief's 65-s HARD CAP (with the end hold).
#   Pauses of 0.3 s+ now get the pad too (seven ~0.4-s phrase pauses: −1.7 s), and the voice is time-stretched by
#   TEMPO (atempo, pitch unchanged; 3.5% is below what a listener hears). TEMPO = 1.0 restores the plain trim.
# ★ 024: TEMPO back to 1.0 (a plain trim) unless THIS take runs over the cap — reviewed per take, never inherited.
# ★ 033 (2026-10-20): the take was GENERATED in-session (ElevenLabs "Russ", eleven_v4). The connector sets no speed, and the
#   channel's own takes (030–032) were read at speed 1.05; this one ran 64.2 s trimmed against the brief's ~60 s. So the
#   voice is brought to the channel's pace with TEMPO 1.04 (pitch unchanged), every word kept.
TEMPO=1.04
# 2. build keep-segments: audio between silences, plus a 0.16s pad of each gap
gaps=list(zip(starts,ends))
PAD=0.16
segs=[]; cur=0.0
for s,e in gaps:
    segs.append((cur, s+PAD/2)); cur=e-PAD/2
segs.append((cur,dur))
segs=[(max(0,a),min(dur,b)) for a,b in segs if b-a>0.02]
# 3. build filter to concat — NATIVE 44.1 kHz, mono, 16-bit PCM (no resample, no re-encode loss)
parts="".join(f"[0:a]atrim={a:.3f}:{b:.3f},asetpts=N/SR/TB[a{i}];" for i,(a,b) in enumerate(segs))
conc="".join(f"[a{i}]" for i in range(len(segs)))+f"concat=n={len(segs)}:v=0:a=1[c];[c]atempo={TEMPO}[out]"
subprocess.run([FF+r"\ffmpeg.exe","-y","-i",src,"-filter_complex",parts+conc,"-map","[out]",
    "-ar","44100","-ac","1","-c:a","pcm_s16le","assets/audio/vo_trimmed.wav"],check=True,capture_output=True)
info=subprocess.run([FF+r"\ffprobe.exe","-v","error","-show_entries","stream=sample_rate,channels","-show_entries","format=duration","-of","default=noprint_wrappers=1","assets/audio/vo_trimmed.wav"],capture_output=True,text=True).stdout
print(f"raw {dur:.1f}s -> trimmed ({len(gaps)} gaps, {len(segs)} segments)")
print(info.strip())
