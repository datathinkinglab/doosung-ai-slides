/* ============ 브랜딩 ============ */
const LOGO_DARK='data:image/png;base64,__DARK__';
const LOGO_LIGHT='data:image/png;base64,__LIGHT__';
const COPY='© 2026 Data Thinking Lab. All rights reserved.';
const COURSE='두성종이 AI 업무활용 심화교육(2차)';

/* ============ 공통 헬퍼 ============ */
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function promptHTML(txt,cls){
  const lines=esc(txt).split('\n').map(l=>{
    if(/^(역할|상황|목표|조건|출력|첨부|포함|사용자|필요한 행동|입력과 출력|통과 기준)\s*:/.test(l))
      return '<span class="k">'+l+'</span>';
    if(/^#\s/.test(l))            return '<span class="h">'+l+'</span>';
    if(/^\[[^\]]+\]\s*$/.test(l)) return '<span class="v">'+l+'</span>';
    return l;
  }).join('\n');
  return '<div class="pw"><button class="cp">복사</button><pre class="prompt'+(cls?' '+cls:'')+'">'+lines+'</pre></div>';
}

const DECK=[];
