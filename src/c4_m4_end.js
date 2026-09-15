/* ===================== M4 ===================== */
DECK.push({type:'section',no:'M4',h:'직무별 개선 — 같은 도구를 팀 업무에 맞추기',
  sub:'새 앱을 처음부터 만들지 않습니다. 오늘 만든 납기 확인 도구에 <b>직무별 기능 하나</b>를 추가합니다.',
  tags:['16:00–16:25','결과물 — index_final.html','기능은 하나만']
});

DECK.push({k:'M4 · 강의', tm:'16:00–16:25', h:'직무별로 하나만 고릅니다',
  c:`<table class="tb"><tr><th style="width:110px">직무</th><th>추가할 기능</th><th style="width:330px">검증할 점</th></tr>
   <tr><td><b>영업</b></td><td>품목별 고객 안내 초안과 <b>미확정 정보 표시</b></td><td>납기 확정 표현을 만들지 않는가</td></tr>
   <tr><td><b>물류</b></td><td>기한 경과 주문 <b>우선 확인 목록</b></td><td>주문번호와 미완료수량을 추적할 수 있는가</td></tr>
   <tr><td><b>수입</b></td><td>선택 품목의 <b>입고 예정 확인 영역</b></td><td>예정 수량을 <b>현재고에 합산하지 않는가</b></td></tr>
   <tr><td><b>관리</b></td><td><b>요약 보고 복사</b>와 조치 상태</td><td>사실과 사용자가 입력한 조치 상태가 구분되는가</td></tr></table>
   <div class="cal warn sm"><span class="ch">수입 기능은 01 파일을 추가로 씁니다</span>
     시간이 부족하면 <b>화면 설계와 시험 조건까지만</b> 작성하고 핵심 3파일 기능을 유지합니다.</div>`
});

DECK.push({k:'M4 · 활동', h:'요구사항을 한 문장으로 쓰고 요청합니다',
  c:`<div class="q sm">“〔누가〕 담당자가 〔무엇〕을 확인하기 위해,<br>기존 화면에 〔어떤〕 기능을 추가한다.”</div>`
   + promptHTML(`기존 index_v2.html에 아래 기능 하나만 추가하세요.
사용자: [직무]
필요한 행동: [확인하거나 복사할 것]
입력과 출력: [구체적으로]
통과 기준: [어떤 입력에서 어떤 결과가 나와야 하는지]
오전 계산 규칙과 M3 테스트를 유지하세요.
추가 데이터가 없으면 값을 만들어내지 말고 확인 필요로 표시하세요.
수정된 전체 파일과 변경 요약을 제공하세요.`),
  done:'기능 <b>하나</b>가 추가되었고, <b>M3 기본 사례가 그대로 통과</b>한다.'
});

DECK.push({k:'M4 · 마무리', h:'동료가 2분 동안 직접 써 봅니다',
  c:`<div class="chips"><span class="chip team">옆 팀</span><span class="chip">2분</span></div>
   <p class="lead">옆 팀에 <b>사용 목적만</b> 말하고 파일을 건넵니다.
     2분 동안 <b>직접 찾고 클릭</b>하게 합니다. <b>막힌 지점 하나</b>를 고칩니다.</p>
   <ul class="chk" style="font-size:16.5px">
     <li>추가 기능의 <b>사용자와 필요성</b>을 설명할 수 있다.</li>
     <li>원래 계산과 <b>M3 기본 사례가 유지</b>된다.</li>
     <li>새 기능에 필요한 <b>자료와 한계</b>를 표시했다.</li></ul>
   <div class="cal ok sm"><span class="ch">강의포인트</span>
     <b>기능 개수보다 담당자가 다음 행동을 할 수 있는지가 중요합니다.</b></div>`
});

/* ===================== Work · Skill ===================== */
DECK.push({type:'section',no:'Work·Skill',h:'오늘의 납기 점검 절차 재사용',
  sub:'오전에 <b>검증한 절차</b>를 저장하고, <b>새 작업에서 다시 실행</b>합니다. 오늘 만든 기준이 다음 자료에도 적용되게 하는 단계입니다.',
  tags:['16:25–16:50','당일 적용 활동','제작과 등록을 한 번에','등록 ≠ 정확성']
});

DECK.push({k:'Work·Skill · 강의', tm:'16:25–16:50', h:'무엇을 고정하고 무엇을 매번 받을까',
  c:`<div class="g3">
     <div class="card yes"><h4>고정 — 유지할 것</h4>
       <ul class="b"><li>연결 키 점검</li><li>미완료수량 계산</li><li>품목별 집계</li>
       <li>오류 처리</li><li>사실과 가설 구분</li><li>보고 형식</li></ul></div>
     <div class="card"><h4>매번 입력</h4>
       <ul class="b"><li>CSV 파일</li><li>재고 기준일</li><li>분석 기준일</li>
       <li>확인 기간</li><li>팀의 추가 질문</li></ul></div>
     <div class="card no"><h4>사람이 판단</h4>
       <ul class="b"><li>납기 약속</li><li>재고 배정</li><li>고객 연락</li><li>실제 발주</li></ul></div></div>
   <div class="cal info sm"><span class="ch">Work와 Skill의 역할이 다릅니다</span>
     <b>Work</b>는 오늘의 <b>자료 읽기 · 분석 · 파일 작성</b>에 활용합니다.
     <b>Skill</b>은 <b>검증한 절차를 보관</b>하는 역할입니다. 환경에 따라 사용 가능한 도구를 먼저 확인합니다.</div>`
});

DECK.push({k:'Work·Skill · 활동', h:'제작과 등록을 한 번에 진행합니다',
  sub:'오전의 규칙 v1 · 보고 형식 · M3 테스트 기록을 준비하고, ChatGPT Work에서는 @skill-creator, Codex에서는 $skill-creator 를 선택합니다',
  c:promptHTML(`오늘 검증한 납기 점검 절차를 training-delivery-review Skill로 만들어 등록하세요.
첨부: 규칙 v1, 보고 형식, 테스트 기록.
고정 절차와 매번 입력할 파일·기준일·기간을 구분하세요.
필수 입력이 없거나 자료 기준일이 다르면 먼저 확인하세요.
오류 행을 분리하고 원본 주문번호와 계산 근거를 남기세요.
입고예정 물량을 현재고에 합산하거나 납기를 확정하지 마세요.
현재 환경에서 인식하는 개인용 저장 위치를 확인해 저장하세요.
동일 이름이 있으면 중복 생성하지 말고 내용을 비교하세요.
완료 후 저장 위치, 적용 범위, 새 작업에서 선택하는 방법을 알려주세요.
저장이 불가능하면 초안 작성과 등록 완료를 구분하세요.`,'sm')
});

DECK.push({k:'Work·Skill · 활동', h:'등록 확인과 업무 정확성을 따로 봅니다',
  c:`<div class="g2">
     <div class="card"><h4>① 등록 확인</h4>
       <ol class="b" style="font-size:14.5px"><li>생성된 <span class="mono">SKILL.md</span>의 기준을 <b>오전 규칙과 비교</b>합니다.</li>
       <li>Skill 목록에서 이름을 찾습니다. ChatGPT는 <b>@</b>, Codex CLI·IDE는 <b>/skills</b> 또는 <b>$</b>.</li></ol></div>
     <div class="card yes"><h4>② 업무 정확성 검증</h4>
       <ol class="b" style="font-size:14.5px" start="3"><li><b>새 작업</b>에서 Skill을 선택하고 M3 합성 자료와 기준일·종료일을 제공합니다.</li>
       <li>P-A의 <b>대상 합계 150 · 현재고 120 · 참고 부족수량 30</b>과 기한 경과 표지를 확인합니다.</li>
       <li>P-A 현재고를 <b>200</b>으로 바꾸면 <b>부족수량 0</b>, 기한 경과 표지는 유지되는지 확인합니다.</li></ol></div></div>
   <div class="cal warn sm"><span class="ch">목록에 보이는 것과 맞게 도는 것은 다릅니다</span>
     목록 표시와 저장 위치는 <b>등록 확인</b>, 기대값과의 대조는 <b>업무 정확성 검증</b>입니다.</div>`,
  done:'새 작업에서 Skill을 선택해 <b>기존 대화 없이</b> 합성 테스트를 통과했다.'
});

DECK.push({k:'Work·Skill · 마무리', h:'완료 기준과 대안',
  c:`<ul class="chk" style="font-size:17px">
     <li><b>날짜와 이번 수량</b>을 고정 절차에 묶어두지 않았다.</li>
     <li>새 작업에서 <b>Skill을 선택</b>할 수 있다.</li>
     <li>기존 대화 없이 <b>합성 테스트를 통과</b>했다.</li></ul>
   <div class="cal info"><span class="ch">등록 기능이 없는 환경이라면</span>
     절차를 <b>파일로 보관</b>하고 새 작업에 직접 제공합니다.
     결과에 <b>‘수동 지시문 적용’</b>이라고 기록합니다. 그래도 목표는 똑같이 달성됩니다.</div>
   <div class="cal gray sm"><span class="ch">HTML 도구와 Skill은 역할이 다릅니다</span>
     HTML은 <b>정해진 계산과 화면</b>을 제공하고, Skill은 <b>AI에게 적용할 절차</b>를 제공합니다.
     같은 기준으로 관리하되 <b>서로 자동 연결된 것으로 설명하지 않습니다.</b></div>
   <div class="cal ok sm"><span class="ch">강의포인트</span>
     <b>“Skill을 하나 만들었다”보다 “다음 자료에도 같은 기준이 적용된다”가 목표입니다.</b></div>`
});

/* ===================== 마무리 ===================== */
DECK.push({type:'section',no:'마무리',h:'인수인계 — 다음 자료로 다시 쓰는 방법',
  sub:'오늘 완성한 하나의 업무를 묶어서 넘깁니다. <b>다른 사람이 다시 실행할 수 있어야</b> 인수인계가 끝납니다.',
  tags:['17:00–17:15','결과물 — 최종 묶음','다음 실행 계획']
});

DECK.push({k:'마무리 · 활동', tm:'17:00–17:15', h:'제출할 묶음을 모읍니다',
  c:`<table class="tb"><tr><th style="width:150px">구분</th><th>제출물</th></tr>
   <tr><td><b>분석 근거</b></td><td>품목별 확인표 · 품질 점검표 · 납기 점검 보고서</td></tr>
   <tr><td><b>업무도구</b></td><td><span class="mono">index_final.html</span> 과 규칙 v1</td></tr>
   <tr><td><b>검증 · 재사용</b></td><td>M3 테스트 기록 · Skill 또는 수동 절차 파일 · 실행 안내</td></tr></table>
   <div class="cal info"><span class="ch">파일 이름과 기준일을 적습니다</span>
     <b>두 개의 별도 앱을 제출하는 과제가 아닙니다.</b>
     하나의 업무를 끝까지 끌고 간 흔적이 남아 있으면 됩니다.</div>`
});

DECK.push({k:'마무리 · 활동', h:'동료가 다시 실행하도록 설명합니다',
  c:promptHTML(`사용 목적:
필요한 파일과 필수 열:
자료 기준일·분석 기준일·확인 기간:
실행 순서:
정상 결과 확인 방법:
오류가 날 때 확인할 것:
사람이 결정해야 하는 것:
등록한 Skill 이름·저장 범위 또는 수동 절차 위치:`)
   + `<div class="cal ok sm"><span class="ch">팀별 1분 공유 — 세 문장만</span>
     “우리 도구는 〔누구〕 담당자의 〔무엇〕 확인을 돕습니다.”<br>
     “새 자료에서는 〔무엇〕을 바꾸고, 〔무엇〕을 검증합니다.”<br>
     “현재 남은 한계는 〔무엇〕입니다.”</div>`
});

DECK.push({k:'마무리 · 활동', h:'교육 후 작은 적용 계획',
  c:`<div class="flow">
     <div class="fs"><div class="t1">첫 주</div><div class="t2">일반화한 자료로<br><b>동료 1명이 재실행</b></div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">기록</div><div class="t2">수정할 <b>오류 1개</b>를<br>적어 둔다</div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">그 다음</div><div class="t2">회사가 승인한 <b>자료·환경</b>과<br>담당자 검토 범위를 정한 뒤 적용</div></div></div>
   <div class="cal warn"><span class="ch">평가는 기능 수로 하지 않습니다</span>
     <b>근거 추적</b> · <b>새 데이터 재실행</b> · <b>예외 처리</b> · <b>동료 사용 가능 여부</b> — 이 네 가지로 봅니다.</div>
   <div class="cal gray sm"><span class="ch">강의포인트</span>
     <b>다른 사람이 다음번에 다시 실행할 수 있어야 인수인계가 끝납니다.</b></div>`
});

/* ===================== 부록 ===================== */
DECK.push({type:'section',no:'부록',h:'재실행 체크리스트와 문제 해결',
  sub:'수업 중 막힐 때 펼쳐 보는 자료입니다. 1차의 검토 기준을 그대로 이어 씁니다.',
  tags:['결과 검토 7항목','증상별 대처','용어 정리']
});

DECK.push({k:'부록 · 결과 검토', h:'AI 결과를 넘기기 전 일곱 가지',
  c:`<table class="tb sm"><tr><th style="width:150px">항목</th><th>확인 질문</th></tr>
   <tr><td><b>사실성</b></td><td>원본 주문과 숫자가 일치하는가?</td></tr>
   <tr><td><b>근거</b></td><td>원본 주문번호와 계산식으로 <b>돌아갈 수 있는가?</b></td></tr>
   <tr><td><b>표현</b></td><td>가능성을 <b>확정처럼</b> 쓰지 않았는가?</td></tr>
   <tr><td><b>목적</b></td><td>담당자가 <b>무엇을 확인할지</b> 알 수 있는가?</td></tr>
   <tr><td><b>실행 가능성</b></td><td>추가 데이터 없이 <b>불가능한 행동</b>을 요구하지 않는가?</td></tr>
   <tr><td><b>보안</b></td><td>교육용 가상 자료만 사용했는가?</td></tr>
   <tr><td><b>책임</b></td><td>납기 약속 · 재고 배정은 <b>사람이 결정</b>하는가?</td></tr></table>`
});

DECK.push({k:'부록 · 문제 해결', h:'막힐 때 — 증상별로 확인합니다',
  c:`<table class="tb xs"><tr><th style="width:220px">증상</th><th style="width:250px">먼저 확인</th><th>수정 요청</th></tr>
   <tr><td>재고가 과하게 커짐</td><td>주문 행마다 현재고를 합산했는지</td><td>주문을 품목별로 집계한 후 재고를 연결하세요.</td></tr>
   <tr><td>미완료수량이 음수</td><td>출고 중복 · 과다수량 · 연결 키</td><td>해당 행을 오류로 분리하고 원본을 보여주세요.</td></tr>
   <tr><td>예정 출고가 완료로 계산됨</td><td>실제일 · 상태 · 기준일 조건</td><td>기준일에 완료된 출고만 반영하세요.</td></tr>
   <tr><td>종료일 주문이 빠짐</td><td>기간 끝 포함 여부</td><td>D 이상 D+7 이하를 포함하세요.</td></tr>
   <tr><td>입고 예정만으로 납기 가능 표시</td><td>예정 물량을 현재고에 합산했는지</td><td>배정 · 가용성 확인 질문으로 남기세요.</td></tr>
   <tr><td>파일 교체 후 값이 남음</td><td>상태 초기화와 재계산</td><td>새 파일 입력 시 이전 계산을 지우고 다시 계산하세요.</td></tr>
   <tr><td>HTML이 글자로 열림</td><td>확장자와 저장 형식</td><td>UTF-8 HTML로 저장하고 파일명을 확인하세요.</td></tr>
   <tr><td>Skill이 목록에 없음</td><td>등록 위치 · 범위 · 파일명</td><td>저장과 등록을 구분해 확인하세요.</td></tr></table>`
});

DECK.push({k:'부록 · 문제 해결', h:'오류 설명 틀과 용어',
  c:promptHTML(`입력 파일·날짜:
재현 순서:
기대 결과와 계산:
실제 결과:
유지해야 할 기능:
수정 후 다시 실행할 테스트:`)
   + `<table class="tb sm"><tr><th style="width:150px">용어</th><th>뜻</th></tr>
   <tr><td><b>기준일</b></td><td>판단을 <b>멈춰서 보는 시점</b></td></tr>
   <tr><td><b>스냅샷</b></td><td>그 시점의 상태</td></tr>
   <tr><td><b>연결 키</b></td><td>자료의 <b>같은 대상</b>을 찾는 값 (주문번호 · 품목코드)</td></tr>
   <tr><td><b>품목별 집계</b></td><td>같은 품목의 <b>대상 주문량을 모으는</b> 과정</td></tr>
   <tr class="hl"><td><b>참고 부족수량</b></td><td><b>교육용 비교값</b>이며 실제 부족 · 납기 불가 확정이 아닙니다</td></tr></table>
   <div class="cal gray sm"><span class="ch">더 필요할 때</span>
     Work·Skill의 상세 등록, 사이트 배포·API·MCP 연동은 <b>각각의 참고 페이지</b>에서 필요할 때 확인합니다.</div>`
});

DECK.push({type:'end',h:'수고하셨습니다',
  c:`오늘은 기능을 많이 만든 날이 아니라, <b>하나의 업무를 끝까지 끌고 간 날</b>입니다.<br><br>
     숫자를 <b>원본까지 따라갈 수 있고</b>, 새 자료에서도 <b>같은 기준이 작동하고</b>,
     <b>동료가 다시 실행할 수 있다면</b> — 오늘의 목표는 달성되었습니다.`,
  note:'Data Thinking Lab · 이승묵 Ph.D &nbsp;|&nbsp; lee.seungmook@datathinkinglab.com &nbsp;|&nbsp; datathinkinglab.com'
});
