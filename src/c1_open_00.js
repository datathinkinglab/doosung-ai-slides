/* ===================== 오프닝 ===================== */
DECK.push({type:'cover',
  eyebrow:'기업교육 · 개정 2026-09-15',
  h:'AI 업무활용 심화교육 <span style="opacity:.72">(2차)</span>',
  sub:'데이터로 판단하고, 다시 쓸 수 있는 업무도구 완성하기',
  meta:[['대상','1차 교육 이수자 · 전 직군'],['운영','1일 8시간 · 팀 실습 중심'],
        ['산출물','분석 근거 + 업무도구 1개 + 재실행 안내'],['강사','이승묵 Ph.D']]
});

DECK.push({k:'오프닝', h:'오늘은 업무 하나를 끝까지 완성합니다',
  c:`<p class="lead">여러 주제를 훑지 않습니다. <b>납기 점검</b>이라는 업무 하나를 자료 확인부터 도구 제작, 재실행까지 끝냅니다.</p>
   <div class="q">“2026-08-31 기준, 기한 경과 또는 향후 7일 이내 납기 주문 중<br>어떤 품목을 먼저 확인해야 하며, 근거와 대응 방안을 어떻게 정리할까?”</div>
   <div class="flow">
     <div class="fs"><div class="t1">자료 확인</div><div class="t2">무엇이 들어 있나</div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">위험 품목 판단</div><div class="t2">무엇을 먼저 볼까</div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">대응 보고</div><div class="t2">누구에게 무엇을</div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">업무도구 제작</div><div class="t2">같은 판단을 화면으로</div></div><div class="ar">→</div>
     <div class="fs"><div class="t1">새 자료로 재실행</div><div class="t2">다음에도 되는가</div></div></div>`
});

DECK.push({k:'오프닝', h:'1차와 무엇이 다른가',
  c:`<div class="g2">
     <div class="card fill"><h4>1차에서 한 것</h4>
       <ul class="b"><li><b>주어진</b> 납기 이슈를 문서로 작성</li>
       <li>보고서 · 고객 이메일 · 실행계획 초안</li>
       <li>문제정의와 검토 기준 정리</li>
       <li>HTML 문서 생성기 <b>제작 경험</b></li></ul></div>
     <div class="card"><h4>2차에서 하는 것</h4>
       <ul class="b"><li>여러 자료에서 <b>확인 대상을 직접 발견</b></li>
       <li>계산을 <b>원본으로 검산</b>하고 오류를 분리</li>
       <li>같은 기준을 <b>화면과 절차로</b> 고정</li>
       <li>새 자료를 넣어도 <b>같은 규칙이 작동</b>하는지 검증</li></ul></div></div>
   <div class="cal info"><span class="ch">한 문장으로</span>
     1차는 <b>AI에게 일을 시키는 법</b>을 배웠고, 2차는 <b>그 일을 다음에도 똑같이 반복할 수 있게 만드는 법</b>을 배웁니다.</div>`
});

DECK.push({k:'오프닝', h:'운영과 산출물',
  c:`<table class="tb sm"><tr><th style="width:120px">대상</th><td>1차 교육 이수자 · 수입 / 영업 / 물류 / 관리 등 전 직군</td></tr>
   <tr><th>자료</th><td>교육용 가상 CSV. <b>공통 3종(주문·출고·재고)</b> · 입고는 선택 확장 · 마케팅은 교육 후 선택</td></tr>
   <tr><th>환경</th><td>수업 전 AI 환경 <b>하나</b>를 정하고 <b>파일 읽기 · 파일 생성 · Skill 등록</b> 가능 여부를 점검</td></tr>
   <tr><th>산출물</th><td><b>분석 근거 묶음 + 납기 확인 도구 1개 + 검증·재실행 안내</b></td></tr></table>
   <div class="g3">
     <div class="kpi"><div class="n">근거</div><div class="l">품목별 확인표 · 품질 점검표 · 납기 점검 보고서</div></div>
     <div class="kpi"><div class="n">도구</div><div class="l"><span class="mono">index_final.html</span> 과 규칙 v1</div></div>
     <div class="kpi"><div class="n">재사용</div><div class="l">M3 테스트 기록 · Skill 또는 수동 절차 · 실행 안내</div></div></div>
   <div class="cal gray sm"><span class="ch">개인 앱을 따로 만들지 않습니다</span>
     별도 개인 앱을 새로 만드는 대신 <b>같은 도구에 직무별 기능 하나</b>를 보완합니다.
     Skill 등록이 불가능한 팀은 절차 파일을 새 작업에 직접 제공하고 적용 방식을 기록합니다.</div>`
});

DECK.push({k:'오프닝 · 시간표', h:'오전 — 데이터에서 판단 근거 찾기',
  c:`<table class="tb"><tr><th style="width:130px">시간</th><th>활동</th><th style="width:290px">확인할 결과</th></tr>
   <tr><td>08:30–09:20</td><td><b>M1-1</b> 1차 수행 점검 15분 · 질문과 완료 기준</td><td>핵심 질문 1개와 규칙 v1</td></tr>
   <tr><td>09:20–10:20</td><td><b>M1-2</b> 주문·출고 연결 후 재고 추가</td><td>품질 점검표 · 품목별 확인표</td></tr>
   <tr><td>10:30–11:20</td><td><b>M1-3</b> 우선 확인 품목 선정 · 선택 입고 확장</td><td>근거 · 가설 · 담당자 질문</td></tr>
   <tr><td>11:20–12:00</td><td><b>M1-4</b> 보고서 작성 · 오후 요구사항으로 연결</td><td>보고서 1장 · 검산 사례</td></tr>
   <tr class="hl"><td colspan="3" class="c">12:00–13:00 &nbsp;중식</td></tr></table>
   <div class="cal ok sm"><span class="ch">오전이 끝나면 손에 남는 것</span>
     <b>품목별 납기 확인표</b> · <b>데이터 품질 점검표</b> · <b>납기 점검 보고서 1장</b> —
     이 세 가지가 오후 도구의 입력값이자 정답지가 됩니다.</div>`
});

DECK.push({k:'오프닝 · 시간표', h:'오후 — 같은 판단을 도구와 절차로 만들기',
  c:`<table class="tb"><tr><th style="width:130px">시간</th><th>활동</th><th style="width:290px">확인할 결과</th></tr>
   <tr><td>13:00–13:50</td><td><b>M2-1</b> 입력 · 계산 · 출력 설계</td><td>화면 요구사항</td></tr>
   <tr><td>14:00–14:50</td><td><b>M2-2</b> HTML 도구 구현</td><td>오전 결과와 일치하는 v1</td></tr>
   <tr><td>15:00–15:50</td><td><b>M3</b> 합성 데이터 · 예외 테스트</td><td>재실행이 검증된 v2</td></tr>
   <tr><td>16:00–16:25</td><td><b>M4</b> 직무별 기능 하나 개선</td><td>최종 도구</td></tr>
   <tr><td>16:25–16:50</td><td><b>Work·Skill</b> 오늘의 절차를 Skill로 제작 · 등록</td><td>새 작업에서 테스트 또는 수동 재사용</td></tr>
   <tr><td>17:00–17:15</td><td><b>마무리</b> 동료 인수인계 · 다음 적용 계획</td><td>실행 안내 · 남은 한계</td></tr></table>`
});

DECK.push({k:'오프닝', h:'강사가 강조할 세 가지',
  c:`<div class="cal dan"><span class="ch">① 자료에 없는 사실은 확인 질문으로 남긴다</span>
     모르는 것을 그럴듯한 문장으로 메우지 않습니다. <b>“확인 필요”</b>라고 적는 것이 정답입니다.</div>
   <div class="cal warn"><span class="ch">② 화면의 숫자를 원본 주문과 계산식으로 설명할 수 있어야 한다</span>
     숫자가 맞는지가 아니라 <b>어디서 왔는지</b>를 따라갈 수 있어야 합니다.</div>
   <div class="cal ok"><span class="ch">③ 새 자료를 넣어도 같은 규칙이 적용되어야 한다</span>
     오늘 한 번 맞은 결과보다, <b>다음 자료에서도 같은 기준으로 돌아가는지</b>가 심화의 기준입니다.</div>
   <div class="cal gray sm"><span class="ch">운영 방법</span>
     기본 개념은 1차 수행 점검에서 <b>필요한 만큼만</b> 복습합니다. 설명 다음에 바로 실습하고 결과를 확인합니다.
     느린 팀은 <b>공통 3파일 분석과 검산</b>을 우선하고 직무 확장을 줄입니다.
     빠른 팀은 입고 자료를 추가하되 <b>인과관계를 단정하지 않습니다.</b></div>`
});

DECK.push({k:'오프닝', h:'오늘의 완료 체크와 안전 기준',
  c:`<ul class="chk" style="font-size:17px">
     <li>원본 자료로 계산을 <b>검산</b>했다.</li>
     <li><b>기한 경과 · 참고 부족 · 자료 오류</b>를 구분했다.</li>
     <li>합성 테스트에서 <b>입력 변경과 예외 처리</b>가 작동했다.</li>
     <li>동료가 <b>실행 안내를 보고 다시 사용</b>할 수 있다.</li></ul>
   <div class="cal dan"><span class="ch">🔒 오늘 하루 지킬 것</span>
     실제 <b>내부자료 · 고객정보 · 계약정보는 입력하지 않습니다.</b><br>
     <b>납기 약속 · 재고 배정 · 실제 발주와 고객 연락은 담당자가 결정합니다.</b>
     오늘 만드는 것은 확인 대상을 찾아주는 도구이지, 약속을 확정하는 도구가 아닙니다.</div>`
});

/* ===================== 00. 실습 준비 ===================== */
DECK.push({type:'section',no:'00',h:'실습 준비 — 자료 범위와 공통 판단 기준',
  sub:'모든 모듈이 <b>같은 기준</b>을 씁니다. 여기서 정한 <b>납기 점검 규칙 v1</b>이 오전 계산·오후 도구·Skill까지 그대로 이어집니다.',
  tags:['자료는 필요한 순서로','납기 점검 규칙 v1','출력 계약','자료 사전']
});

DECK.push({k:'00 · 자료 범위', h:'자료는 필요한 순서로 엽니다',
  c:`<table class="tb"><tr><th style="width:120px">구분</th><th style="width:330px">자료</th><th>사용 목적</th></tr>
   <tr><td><b>첫 확인</b></td><td><span class="mono">03_영업주문</span> + <span class="mono">04_출고현황</span></td>
       <td>주문번호로 연결해 <b>기준일 미완료 주문</b>과 납기 확인 대상 추리기</td></tr>
   <tr><td><b>공통 분석</b></td><td><span class="mono">02_재고현황</span> 추가</td>
       <td>품목코드로 현재고를 연결하고 미완료 주문량과 비교</td></tr>
   <tr><td><b>선택 확장</b></td><td><span class="mono">01_수입입고</span></td>
       <td>미입고 물량과 예정일 확인. <b>현재고에 자동 합산하지 않기</b></td></tr>
   <tr><td><b>교육 후 선택</b></td><td><span class="mono">05_마케팅캠페인</span></td>
       <td>별도 마케팅 질문을 다룰 때 활용</td></tr></table>
   <div class="cal info sm"><span class="ch">파일은 5종을 보관하되 공통 과제는 3종으로</span>
     파일마다 <b>한 행의 의미 · 단위 · 기간과 기준일</b>을 먼저 확인합니다.
     기존 워크시트의 ‘KPI 5개·앱 2개’ 요구보다 <b>이번 개정 강의노트의 완료 기준</b>을 따릅니다.</div>`
});

DECK.push({k:'00 · 실습 전 확인', h:'수업 시작 전에 이것만 확인합니다',
  c:`<ul class="chk" style="font-size:17px">
     <li>노트북에서 <b>교육용 파일을 열 수 있는지</b> 확인합니다.</li>
     <li>수업에서 사용할 <b>AI 환경 하나</b>를 정하고 <b>파일 읽기 · 파일 생성 · Skill 선택</b> 가능 여부를 확인합니다.</li>
     <li><b>1차 결과물</b>이 있으면 가져옵니다. 없으면 M1-1의 짧은 과제로 시작합니다.</li>
     <li><b>원본 CSV는 보관</b>하고 시험용 데이터는 복사본을 만듭니다.</li></ul>
   <div class="cal warn"><span class="ch">기준일을 오늘 날짜로 바꾸지 않습니다</span>
     교육용 가상 자료의 <b>재고 기준일은 2026-08-31</b>입니다.
     수업 당일 날짜로 바꾸어 해석하면 오전의 모든 숫자가 어긋납니다.</div>`
});

DECK.push({k:'00 · 규칙 v1', h:'납기 점검 규칙 v1 — 기준과 연결', sub:'모든 모듈에서 같은 기준을 씁니다 (1/2)',
  c:`<div class="cal info sm" style="margin-top:0"><span class="ch">기준일과 기간</span>
     기준일 <b>D = 2026-08-31</b>, 확인 기간은 D부터 <b>D+7일인 2026-09-07</b>까지입니다.</div>
   <ul class="b">
     <li><b>연결 확인</b> — 03과 04는 <b>주문번호의 유일성과 1:1 연결</b>을 실제로 확인합니다.
       중복·불일치는 임의 병합하지 않고 <b>확인 대상으로 분리</b>합니다.</li>
     <li><b>기준일 출고량</b> — 출고실제일이 <b>D 이하인 완료 건의 출고수량만</b> 반영합니다.
       미래 출고실적을 소급 반영하지 않습니다. 상태와 날짜가 모순되면 확인 대상으로 분리합니다.</li>
     <li><b>미완료수량 = 주문수량 − 기준일 출고량.</b> 음수나 수량 누락은 <b>오류이며 0으로 보정하지 않습니다.</b>
       실제일이 비어 있는 예정·지연 건은 출고 0으로 처리할 수 있으나,
       <b>완료 상태인데 실제일이 없으면 오류</b>입니다.</li></ul>
   <div class="cal gray sm"><span class="ch">여기까지가 “무엇을 셀 것인가”</span>
     다음 장은 “센 것을 어떻게 나눌 것인가”입니다.</div>`
});

DECK.push({k:'00 · 규칙 v1', h:'납기 점검 규칙 v1 — 구분과 집계', sub:'모든 모듈에서 같은 기준을 씁니다 (2/2)',
  c:`<table class="tb sm"><tr><th style="width:190px">납기 구간</th><th>조건 (미완료수량이 양수일 때)</th></tr>
   <tr><td><b>기한 경과</b></td><td>납기요청일 <b>&lt; D</b></td></tr>
   <tr><td><b>기간 내 확인</b></td><td><b>D 이상 D+7 이하</b></td></tr>
   <tr><td>기간 밖</td><td>D+7 이후</td></tr></table>
   <ul class="b">
     <li><b>집계 순서</b> — 기한 경과와 기간 내 확인 주문의 미완료수량을 <b>품목별로 먼저 합산한 뒤</b> 02의 현재고와 연결합니다.
       <b>같은 현재고를 주문 행마다 더하지 않습니다.</b></li>
     <li><b>참고 부족수량 = max(대상 미완료수량 합계 − 현재고수량, 0).</b>
       단위가 같고 현재고가 유효할 때만 계산합니다. <b>현재고 누락은 계산 불가</b>입니다.</li>
     <li><b>점검 표지</b> — ‘기한 경과 있음’과 ‘참고 부족수량 양수’는 <b>함께 표시할 수 있는</b> 표지입니다.
       데이터 오류 목록은 <b>별도로</b> 냅니다.</li></ul>
   <div class="cal warn sm"><span class="ch">이것은 확인 대상을 찾는 교육용 규칙입니다</span>
     예약재고·실시간 재고·배정·분할출고 정책이 없으므로
     <b>출고 가능 여부나 고객 약속을 확정하지 않습니다.</b></div>`
});

DECK.push({k:'00 · 출력 계약', h:'무엇을 내놓을지 미리 약속합니다',
  c:`<div class="cal info" style="margin-top:0"><span class="ch">품목별 결과 — 아홉 칸</span>
     품목코드 / 대상 주문번호 / 기한 경과 미완료수량 / 기간 내 미완료수량 / 현재고수량 /
     참고 부족수량 / 점검 표지 / 근거 / 확인 질문</div>
   <div class="cal ok"><span class="ch">요약 — 세 숫자</span>
     <b>점검 대상 품목 수</b> · <b>기한 경과 주문 수</b> · <b>데이터 오류 행 수</b><br>
     대상 품목 수는 <b>중복 없는 품목 수</b>이며, 지표의 <b>단위를 함께</b> 적습니다.</div>
   <div class="g3">
     <div class="kpi"><div class="n">근거</div><div class="l">모든 행에 <b>원본 주문번호</b>가 붙어 있어야 합니다</div></div>
     <div class="kpi amber"><div class="n">질문</div><div class="l">자료로 알 수 없는 것은 <b>확인 질문</b>으로 남깁니다</div></div>
     <div class="kpi red"><div class="n">오류</div><div class="l">정상 행과 <b>섞지 않고</b> 따로 목록을 만듭니다</div></div></div>`
});

DECK.push({k:'00 · 자료 사전', h:'공통 3파일 — 이 열들을 씁니다',
  c:`<table class="tb xs"><tr><th style="width:120px">파일</th><th>주요 컬럼</th><th style="width:230px">오늘 쓰는 곳</th></tr>
   <tr><td><b>03 영업주문</b><br><span class="mono">sales_orders</span></td>
       <td><b>주문번호</b> · 주문일 · 고객코드 · 고객명 · 고객군 · 채널 · 영업담당 ·
           <b>품목코드</b> · 품목명 · 품목군 · <b>주문수량</b> · 단가 · 주문금액 · <b>납기요청일</b></td>
       <td>미완료수량의 분자 · 납기 구간 판정</td></tr>
   <tr><td><b>04 출고현황</b><br><span class="mono">shipments</span></td>
       <td>출고번호 · <b>주문번호</b> · 고객코드 · 고객명 · 고객군 · 품목코드 · 품목명 · 품목군 ·
           <b>출고수량</b> · 출고예정일 · <b>출고실제일</b> · 지연일수 · <b>출고상태</b> · 지연사유</td>
       <td>기준일 출고량 · 상태/날짜 모순 점검</td></tr>
   <tr><td><b>02 재고현황</b><br><span class="mono">inventory</span></td>
       <td>기준일 · <b>품목코드</b> · 품목명 · 품목군 · 창고 · <b>현재고수량</b> · 안전재고수량 ·
           월평균출고량 · 재고일수 · 재고회전율 · 단가 · 재고금액 · 입고예정수량 · 표준리드타임</td>
       <td>참고 부족수량 계산 (기준일 <b>2026-08-31 스냅샷</b>)</td></tr></table>
   <div class="cal gray sm"><span class="ch">연결 키</span>
     03 ↔ 04 는 <b>주문번호</b>, 그 결과 ↔ 02 는 <b>품목코드</b>.
     주문 1건 = 출고 1건으로 단순화되어 있으므로 <b>1:1 연결이 실제로 성립하는지</b>를 반드시 세어서 확인합니다.</div>`
});

DECK.push({k:'00 · 자료 사전', h:'선택 자료 두 개 — 쓰는 법과 함정',
  c:`<div class="g2">
     <div class="card"><h4>01 수입·입고 <span class="small">(선택 확장)</span></h4>
       <p class="small" style="margin:0 0 7px">발주번호 · 품목코드 · 공급사 · 원산지 · 발주수량 · 선적일 ·
         입항예정/실제일 · 통관완료일 · 입고예정/실제일 · 지연일수 · 지연사유 · <b>진행상태</b></p>
       <div class="cal warn sm" style="margin:0"><span class="ch">⚠ 두 가지 함정</span>
         ① <b>진행상태</b>가 입고완료가 아닌 건은 실제일·지연일수가 <b>비어 있습니다.</b><br>
         ② <b>입고예정수량을 현재고에 합산해 ‘납기 가능’으로 바꾸지 않습니다.</b>
         대상 주문에 배정되는지 알 수 없습니다.</div></div>
     <div class="card"><h4>05 마케팅 캠페인 <span class="small">(교육 후 선택)</span></h4>
       <p class="small" style="margin:0 0 7px">캠페인코드 · 캠페인명 · 대상품목군 · 대상고객군 · 시작일 · 종료일 ·
         혜택 · 캠페인비용 · 기간내주문건수 · 기간내주문금액 · 문의건수 · 상태</p>
       <div class="cal gray sm" style="margin:0"><span class="ch">🧠 가설을 구분하는 훈련용</span>
         기간 내 주문금액이 높다고 해서 <b>캠페인이 원인이라는 보장은 없습니다.</b>
         계절성일 수도 있습니다.</div></div></div>
   <div class="cal info sm"><span class="ch">분류 값 참고</span>
     품목군 5종(인쇄용지·팬시지·특수지·판지·라벨지) · 고객군 6종(대형/중소인쇄소·패키지제조·디자인문구·라벨가공·출판총판) ·
     채널 3종(직거래·대리점·온라인) · 영업담당 5명 · 공급사 7개사</div>`
});
