import sys, glob
from PIL import Image, ImageDraw
d=sys.argv[1]; fs=sorted(glob.glob(d+'/p*.jpg')); ims=[Image.open(f) for f in fs]
w,h=ims[0].size; cols=min(8,len(ims)); rows=(len(ims)+cols-1)//cols
s=Image.new('RGB',(cols*w,rows*h+0))
for i,(f,im) in enumerate(zip(fs,ims)):
    x,y=(i%cols)*w,(i//cols)*h; s.paste(im,(x,y)); ImageDraw.Draw(s).text((x+6,y+h-16),f.split('/')[-1][1:5],fill=(0,255,0))
s.save(d+'/sheet.jpg',quality=85)
