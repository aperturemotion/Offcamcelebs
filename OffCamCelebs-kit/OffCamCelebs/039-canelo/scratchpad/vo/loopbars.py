import sys, subprocess, numpy as np
FF=__import__("os").path.join(__import__("os").environ["FFMPEG_DIR"], "ffmpeg.exe")
SR=22050
x=np.frombuffer(subprocess.run([FF,"-v","error","-i",sys.argv[1],"-ac","1","-ar",str(SR),"-f","f32le","-"],capture_output=True).stdout,np.float32).astype(np.float64)
bar=60/70*4; d0=1.52
for k in range(10,15):
  A=d0+k*bar
  for lag in (bar*6,bar*4,bar*8):
    a=x[int(A*SR):int((A+4)*SR)]; b=x[int((A-lag)*SR):int((A-lag+4)*SR)]
    print(round(A,3),round(lag,3),round(float(np.dot(a,b)/np.sqrt(np.dot(a,a)*np.dot(b,b))),3))
