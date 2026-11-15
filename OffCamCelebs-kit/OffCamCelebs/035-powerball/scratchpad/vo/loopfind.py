import sys, subprocess, numpy as np
FF=__import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR=22050
x=np.frombuffer(subprocess.run([FF,"-v","error","-i",sys.argv[1],"-ac","1","-ar",str(SR),"-f","f32le","-"],capture_output=True).stdout,np.float32).astype(np.float64)
D=4.0; n=int(D*SR)
cs=np.concatenate([[0],np.cumsum(x*x)])
for A in [38.0,42.0,44.0,46.0,48.0]:
  i0=int(A*SR); ref=x[i0:i0+n]
  lo=int(2*SR); hi=i0-int(3*SR)
  seg=x[lo:hi+n]
  L=len(seg)+n; N=1<<int(np.ceil(np.log2(L)))
  c=np.fft.irfft(np.fft.rfft(seg,N)*np.conj(np.fft.rfft(ref,N)),N)[:len(seg)-n+1]
  e=cs[lo+n:lo+n+len(c)]-cs[lo:lo+len(c)]
  r=c/np.sqrt(e*np.dot(ref,ref)+1e-12)
  out=[]
  for k in np.argsort(-r):
    t=(lo+k)/SR
    if all(abs(t-u)>0.5 for _,u in out): out.append((round(float(r[k]),3),round(A-t,4)))
    if len(out)>=5: break
  print(A,out)
