/* ===================== M2-1 ===================== */
DECK.push({type:'section',no:'M2-1',h:'업무도구 설계 — 판단 기준을 화면으로',
  sub:'오전의 계산을 <b>그대로 화면에서 확인</b>하게 만듭니다. 디자인이 아니라 <b>입력·계산·출력의 약속</b>을 정하는 시간입니다.',
  tags:['13:00–13:50','결과물 — 요구사항과 손그림','1차 요구사항 작성 틀 재사용']
});

DECK.push({k:'M2-1 · 강의', tm:'13:00–13:50', h:'핵심 기능은 세 가지뿐입니다',
  c:`<div class="g3">
     <div class="card"><h4>① 읽기</h4><p class="small" style="margin:0">03 · 04 · 02 자료를 읽고
       <b>기준일과 조회 종료일</b>을 화면에 표시한다.</p></div>
     <div class="card"><h4>② 나누기</h4><p class="small" style="margin:0">품목별 <b>납기 확인 목록</b>과
       <b>오류 목록</b>을 분리한다.</p></div>
     <div class="card"><h4>③ 따라가기</h4><p class="small" style="margin:0">품목을 선택하면
       <b>원본 주문과 계산 근거, 담당자 질문</b>이 보인다.</p></div></div>
   <div class="cal info"><span class="ch">화면에 항상 보일 세 숫자</span>
     <b>점검 대상 품목 수</b> · <b>기한 경과 주문 수</b> · <b>오류 행 수</b><br>
     필터가 이 숫자에 영향을 주는지 <b>정하고 레이블로 알려줍니다.</b>
     (“필터 적용 기준” 인지 “전체 기준” 인지)</div>
   <div class="cal gray sm"><span class="ch">1차의 틀을 그대로</span>
     1차에서 배운 <b>문제정의 · 요구사항 작성 틀</b>을 사용합니다. 새 양식을 만들지 않습니다.</div>`
});

DECK.push({k:'M2-1 · 활동', h:'요구사항을 구체화합니다',
  c:promptHTML(`오전 보고서, 규칙 v1, 품목별 확인표를 바탕으로
교육용 납기 확인 도구의 요구사항을 작성하세요.
1차에서 만든 HTML 문서 생성기를 참고하되,
오늘의 핵심은 자료 입력과 계산 근거 확인입니다.
입력 CSV 3개, 날짜 조건, 필수 열, 계산식, 오류 처리,
화면 영역, 복사할 요약, 통과 기준을 적으세요.
한 HTML 파일로 구현하고 외부 API·로그인·DB는 사용하지 않습니다.
고객에게 납기를 확정하거나 재고를 배정하는 기능은 제외합니다.
규칙 v1의 내용을 생략 없이 요구사항에 포함하세요.`,'sm'),
  done:'요구사항에 <b>규칙 v1이 생략 없이</b> 들어 있고, 통과 기준이 <b>오전 검산값</b>으로 적혀 있다.'
});

DECK.push({k:'M2-1 · 활동', h:'동료에게 손그림으로 설명합니다',
  c:`<div class="chips"><span class="chip hand">✋ AI 끄기</span><span class="chip team">팀</span><span class="chip out">손그림</span></div>
   <p class="lead">한 팀원은 <b>사용자 역할</b>이 되어 두 가지만 묻습니다.</p>
   <div class="q sm">“기한이 지난 주문을 어떻게 찾나요?”</div>
   <div class="q sm">“재고 숫자는 어디서 왔나요?”</div>
   <div class="cal warn"><span class="ch">설명이 길어지면 화면을 단순화합니다</span>
     말로 오래 설명해야 하는 화면은 <b>실제로도 안 쓰입니다.</b>
     손그림 단계에서 줄이는 것이 코드로 고치는 것보다 훨씬 쌉니다.</div>`,
  done:'두 질문에 <b>화면을 가리키며</b> 답할 수 있다.'
});

DECK.push({k:'M2-1 · 마무리', h:'구현 전에 합의할 것',
  c:`<ul class="chk" style="font-size:17px">
     <li><b>오전 검산 결과가 화면의 기준값</b>이다.</li>
     <li>오류 데이터가 <b>정상처럼 표시되지 않는다.</b></li>
     <li>요약 수치의 <b>단위와 필터 범위</b>를 정했다.</li>
     <li>팀별 개선 기능은 <b>하나만</b> 남겨두었다.</li></ul>
   <div class="cal ok"><span class="ch">강의포인트</span>
     <b>디자인보다 입력 · 계산 · 출력의 약속이 먼저입니다.</b></div>`
});

/* ===================== M2-2 ===================== */
DECK.push({type:'section',no:'M2-2',h:'업무도구 구현 — 납기 확인 도구 v1',
  sub:'요구사항으로 <span class="mono">index_v1.html</span>을 만들고, <b>오전과 같은 숫자가 나오는지</b>로 완료를 판정합니다.',
  tags:['14:00–14:50','결과물 — index_v1.html','파일이 열리는 것만으로 완료 아님']
});

DECK.push({k:'M2-2 · 활동', tm:'14:00–14:50', h:'요구사항으로 구현합니다',
  sub:'새 작업을 쓴다면 오전 대화 내용을 안다고 가정하지 말고 규칙 v1·요구사항·검산 사례를 함께 제공합니다',
  c:promptHTML(`확정한 요구사항으로 index_v1.html을 만들어주세요.
HTML/CSS/JavaScript를 한 파일에 포함하세요.
외부 라이브러리·API·서버·로그인 없이 브라우저에서 실행합니다.
03·04·02 CSV를 각각 입력하고 기준일과 기간 끝을 확인하게 하세요.
CSV의 UTF-8 BOM, 따옴표 안 쉼표, 빈 셀을 처리하세요.
필수 열 누락, 중복 키, 숫자·날짜 오류를 표시하고 임의 보정하지 마세요.
오전의 규칙 v1을 그대로 적용하고, 근거 주문번호와 계산식을 보여주세요.
요약은 검증된 계산 결과를 바탕으로 템플릿 방식으로 만드세요.
품목 필터, 근거 상세 보기, 요약 복사, 초기화 기능을 넣으세요.
파일을 바꾸면 예전 결과가 남지 않게 하세요.
파일 완성 후 실행 방법과 아직 검증하지 않은 항목을 알려주세요.`,'sm')
});

DECK.push({k:'M2-2 · 강의', h:'이 도구가 하는 일과 하지 않는 일',
  c:`<div class="g2">
     <div class="card yes"><h4>하는 일</h4>
       <ul class="b"><li>규칙 v1에 따른 <b>계산</b></li><li>목록과 오류의 <b>표시</b></li>
       <li>검증된 결과로 <b>문구 조합</b>(템플릿 요약)</li></ul></div>
     <div class="card no"><h4>하지 않는 일</h4>
       <ul class="b"><li>브라우저에서 <b>AI가 새로 판단</b>하는 기능</li>
       <li>고객에게 <b>납기 확정</b></li><li><b>재고 배정</b></li></ul></div></div>
   <div class="cal info"><span class="ch">교육용 웹앱의 성격</span>
     이 도구는 <b>계산 · 표시 · 문구 조합</b>을 수행합니다.
     “AI가 들어 있는 화면”이 아니라 <b>오전에 사람이 정한 규칙이 들어 있는 화면</b>입니다.</div>`
});

DECK.push({k:'M2-2 · 활동', h:'열고 계산을 대조합니다',
  c:`<ol class="b" style="font-size:16.5px">
     <li>파일을 내려받아 브라우저에서 엽니다. 코드로 받았다면 <b>UTF-8</b>로 <span class="mono">index_v1.html</span>에 저장하고
       <b>확장자를 확인</b>합니다.</li>
     <li><b>03 · 04 · 02 파일과 날짜</b>를 입력합니다.</li>
     <li>오전에 검산한 <b>주문 2건 · 품목 1건</b>의 결과를 비교합니다.</li>
     <li><b>목록 · 근거 보기 · 요약 복사 · 초기화</b>를 실행합니다.</li></ol>
   <div class="cal warn sm"><span class="ch">HTML이 글자로 열리면</span>
     확장자가 <span class="mono">.html.txt</span>로 저장된 경우입니다.
     저장 형식을 <b>모든 파일</b>, 인코딩을 <b>UTF-8</b>로 다시 저장합니다.</div>`,
  done:'오전 검산값 <b>3개가 화면 값과 일치</b>하고, 네 기능이 모두 동작한다.'
});

DECK.push({k:'M2-2 · 활동', h:'값이 다르면 이렇게 요청합니다',
  c:promptHTML(`기대 결과: [오전 검산값]
현재 결과: [화면 값]
재현 순서: [파일·날짜·품목·버튼 순서]
이 차이의 원인을 찾아 수정하세요.
규칙 v1과 정상 동작은 유지하고 수정된 전체 파일을 제공하세요.`)
   + `<div class="cal ok"><span class="ch">완료 기준 — 파일이 열리는 것만으로 완료하지 않습니다</span>
     <b>오전과 동일한 입력에서 동일한 수치</b>가 나오고,
     <b>오류 목록과 근거</b>를 볼 수 있어야 합니다.</div>
   <div class="cal gray sm"><span class="ch">강의포인트</span>
     <b>“작동합니다”를 실제 데이터와 기대값으로 확인합니다.</b></div>`
});

/* ===================== M3 ===================== */
DECK.push({type:'section',no:'M3',h:'재실행 검증 — 새 데이터와 예외 처리',
  sub:'원본과 무관한 <b>합성 테스트 자료</b>를 만들어, 데이터가 바뀌어도 <b>같은 규칙이 유지되는지</b> 확인합니다.',
  tags:['15:00–15:50','결과물 — index_v2.html','검증 기록','여기가 심화의 핵심']
});

DECK.push({k:'M3 · 활동', tm:'15:00–15:50', h:'시험용 자료를 별도로 만듭니다',
  sub:'원본 자료와 무관한 합성 테스트 — D=2026-08-31, 종료=2026-09-07, 수량 단위 연',
  c:`<table class="tb sm"><tr><th>주문</th><th>품목</th><th class="c">주문량</th><th class="c">기준일 출고량</th><th>납기요청일</th><th>출고 상태</th></tr>
   <tr><td>T01</td><td><b>P-A</b></td><td class="c">100</td><td class="c">0</td><td>2026-08-30</td><td>예정 · 실제일 빈칸</td></tr>
   <tr><td>T02</td><td><b>P-A</b></td><td class="c">50</td><td class="c">0</td><td>2026-09-07</td><td>예정 · 실제일 빈칸</td></tr>
   <tr><td>T03</td><td>P-B</td><td class="c">80</td><td class="c">80</td><td>2026-08-31</td><td>완료 · 실제일 2026-08-31</td></tr>
   <tr><td>T04</td><td>P-C</td><td class="c">30</td><td class="c">0</td><td>2026-09-08</td><td>예정 · 실제일 빈칸</td></tr>
   <tr><td>T05</td><td>P-D</td><td class="c">20</td><td class="c">0</td><td>2026-09-01</td><td>예정 · 실제일 빈칸</td></tr></table>
   <div class="cal info sm" style="margin-top:6px"><span class="ch">02의 현재고</span>
     P-A = <b>120</b> · P-B = 100 · P-C = 100 · P-D = <b>빈 셀</b>(실제 CSV에 빈칸으로)<br>
     출고예정 행의 출고수량 열을 채워야 한다면 예정 수량을 넣되,
     <b>실제일이 없으므로 출고 완료량에는 반영하지 않습니다.</b></div>
   <p class="small">구현한 CSV 필수 열에 맞춰 시험용 03·04·02 파일을 만듭니다.
     나머지 필수 열에는 가상 값을 넣되 <b>주문번호와 품목코드는 유지</b>합니다.</p>`
});

DECK.push({k:'M3 · 활동', h:'예상 결과를 먼저 적고 돌립니다',
  c:`<table class="tb"><tr><th style="width:110px">대상</th><th>기대 결과</th></tr>
   <tr class="hl"><td><b>P-A</b></td><td>기한 경과 <b>100</b>, 기간 내 <b>50</b>, 대상 합계 <b>150</b>,
       현재고 <b>120</b>, 참고 부족수량 <b>30</b></td></tr>
   <tr><td>T03</td><td><b>완료되어 대상에서 제외</b></td></tr>
   <tr><td>T04</td><td>종료일 다음 날이므로 <b>기간 밖</b></td></tr>
   <tr><td><b>P-D</b></td><td>대상 수량 20이지만 <b>현재고 누락으로 부족수량 계산 불가 · 확인 필요</b></td></tr></table>
   <div class="g3">
     <div class="kpi"><div class="n">2<em>개</em></div><div class="l">점검 대상 품목 수<br><span class="small">P-A · P-D</span></div></div>
     <div class="kpi red"><div class="n">1<em>건</em></div><div class="l">기한 경과 주문 수</div></div>
     <div class="kpi amber"><div class="n">?</div><div class="l">오류 행 수 — 입력 점검 단계에서 <b>정의한 오류 행 단위</b>로 계산하고 이유를 표시</div></div></div>`,
  done:'화면 값이 <b>기대 결과와 한 줄씩 일치</b>한다. 다르면 먼저 어느 규칙이 어긋났는지 찾습니다.'
});

DECK.push({k:'M3 · 활동', h:'한 조건씩 바꾸어 봅니다',
  c:`<table class="tb sm"><tr><th style="width:290px">바꾸는 입력</th><th>기대 결과</th></tr>
   <tr><td>P-A 현재고를 <b>200</b>으로</td><td>부족수량 <b>0</b>, <b>기한 경과 표지는 유지</b></td></tr>
   <tr><td>T04 납기를 <b>09-07</b>로</td><td><b>기간 내 대상에 포함</b></td></tr>
   <tr class="hl"><td>T01을 <b>복제</b></td><td><b>중복 주문번호 오류</b>. 조용히 두 배로 집계하면 안 됩니다</td></tr>
   <tr><td>출고수량 &gt; 주문량, 또는 날짜 오입력</td><td><b>오류 표시</b></td></tr>
   <tr><td>원본 파일을 <b>다시 입력</b></td><td>시험용 결과가 <b>남아 있으면 안 됨</b></td></tr></table>
   <p class="small" style="margin:2px 0 6px"><b>검증 기록은 한 줄씩 남깁니다</b></p>`
   + promptHTML(`시험 이름 | 바꾼 입력 | 기대 결과 | 실제 결과 | 통과 여부 | 수정 내용`),
  done:'다섯 조건의 <b>통과 여부가 기록</b>되었고, 실패한 항목에 수정 내용이 적혀 있다.'
});

DECK.push({k:'M3 · 마무리', h:'수정하고 다시 확인합니다',
  c:`<div class="cal warn"><span class="ch">한 번에 많이 고치지 않습니다</span>
     <b>실패 사례 하나를 재현하고 수정</b>합니다. 수정 후 <b>기본 사례도 다시 통과</b>하는지 확인합니다.</div>
   <pre class="dia">index_v1.html   →   (실패 하나 수정 → 기본 사례 재확인)   →   index_v2.html
   보관                        반복                          통과한 결과</pre>
   <div class="cal dan sm"><span class="ch">합성 자료를 실제처럼 말하지 않습니다</span>
     별도의 ‘다음 주 실제 데이터’가 없으므로,
     <b>합성 자료를 실제 운영 결과처럼 표현하지 않습니다.</b></div>
   <div class="cal ok sm"><span class="ch">강의포인트</span>
     <b>데이터가 바뀌어도 규칙이 유지되는지 확인하는 과정이 심화입니다.</b></div>`
});
