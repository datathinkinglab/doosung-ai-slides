# -*- coding: utf-8 -*-
"""슬라이드 조각들을 단일 HTML로 합칩니다 (로고 base64 주입 포함).

산출물
  - 두성종이_AI심화교육_강의슬라이드.html : 배포·다운로드용 (한글 파일명)
  - index.html                          : GitHub Pages 진입점 (같은 내용)
"""
from pathlib import Path

D = Path(__file__).parent
SRC = D if (D / "head.html").exists() else D / "src"
OUT = D

dark = (SRC / "logo_dark.b64").read_text().strip()
light = (SRC / "logo_light.b64").read_text().strip()

prelude = (SRC / "prelude.js.tpl").read_text(encoding="utf-8")
prelude = prelude.replace("__DARK__", dark).replace("__LIGHT__", light)

parts = [
    (SRC / "head.html").read_text(encoding="utf-8"),
    prelude,
    (SRC / "c1_open_00.js").read_text(encoding="utf-8"),
    (SRC / "c2_m1.js").read_text(encoding="utf-8"),
    (SRC / "c3_m2_m3.js").read_text(encoding="utf-8"),
    (SRC / "c4_m4_end.js").read_text(encoding="utf-8"),
    (SRC / "tail.html").read_text(encoding="utf-8"),
]
html = "\n".join(parts)

for name in ("두성종이_AI심화교육_강의슬라이드.html", "index.html"):
    p = OUT / name
    p.write_text(html, encoding="utf-8")
    print(f"{p.name}  {p.stat().st_size:,} bytes")
