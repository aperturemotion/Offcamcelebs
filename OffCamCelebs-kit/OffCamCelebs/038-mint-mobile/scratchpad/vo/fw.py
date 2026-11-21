from faster_whisper import WhisperModel
import json
import os, subprocess, numpy as np
m = WhisperModel("small.en", device="cpu", compute_type="int8")
# ★ (035, Linux) decode through ffmpeg ourselves: faster-whisper's own decoder breaks on some PyAV versions
FFB = os.environ.get("FFMPEG_DIR")
ff = os.path.join(FFB, "ffmpeg.exe") if FFB and os.path.exists(os.path.join(FFB, "ffmpeg.exe")) else "ffmpeg"
raw = subprocess.run([ff, "-v", "error", "-i", "assets/audio/vo_trimmed.wav", "-f", "f32le", "-ac", "1", "-ar", "16000", "-"], capture_output=True, check=True).stdout
segs, info = m.transcribe(np.frombuffer(raw, np.float32), word_timestamps=True, beam_size=5)
words = []
for s in segs:
    for w in s.words:
        words.append({"t": w.word.strip(), "a": round(w.start, 3), "b": round(w.end, 3)})
words = [w for w in words if w["t"]]
json.dump({"words": words}, open("scratchpad/fw_words.json", "w"))
print(f"{len(words)} words, last ends {words[-1]['b']:.1f}s (file 208.12s)")
print("first 6:", " ".join(f"{w['t']}@{w['a']:.1f}" for w in words[:6]))
