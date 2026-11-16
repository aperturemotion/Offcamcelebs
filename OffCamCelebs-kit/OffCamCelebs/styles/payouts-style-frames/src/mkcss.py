fams = {
    "Archivo": ("archivo", [400, 500, 600, 700, 800, 900], True),
    "Archivo Black": ("archivo-black", [400], False),
    "Caveat": ("caveat", [400, 700], False),
    "Permanent Marker": ("permanent-marker", [400], False),
    "DM Serif Display": ("dm-serif-display", [400], True),
    "Fraunces": ("fraunces", [400, 600, 700, 900], True),
    "JetBrains Mono": ("jetbrains-mono", [400, 500, 700], False),
    "Patrick Hand": ("patrick-hand", [400], False),
}
css = ""
for name, (pkg, ws, it) in fams.items():
    for w in ws:
        for st in (["normal", "italic"] if it else ["normal"]):
            css += "@font-face{font-family:'%s';font-weight:%d;font-style:%s;src:url('node_modules/@fontsource/%s/files/%s-latin-%d-%s.woff2') format('woff2');}\n" % (name, w, st, pkg, pkg, w, st)
css += """
*{box-sizing:border-box;margin:0;padding:0}
body{background:#222;display:flex;gap:40px;padding:40px;width:max-content}
.frame{width:1080px;height:1920px;position:relative;overflow:hidden;flex:none}
.abs{position:absolute}
"""
open("base.css", "w").write(css)
