// BMI 계산 버튼
document.getElementById("calcBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  // 초기화
  resultDiv.classList.remove("error");

  // 입력값 체크
  if (!name) {
    resultDiv.textContent = "이름을 입력해주세요.";
    resultDiv.classList.add("error");
    return;
  }

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = "키와 몸무게를 숫자로 입력해주세요.";
    resultDiv.classList.add("error");
    return;
  }

  if (height <= 0 || weight <= 0) {
    resultDiv.textContent = "키와 몸무게는 0보다 큰 값이어야 합니다.";
    resultDiv.classList.add("error");
    return;
  }

  // cm → m 변환
  const heightMeter = height / 100;

  // BMI 계산
  const bmi = weight / (heightMeter * heightMeter);

  // 소수점 둘째 자리까지
  const bmiRounded = bmi.toFixed(2);

  // BMI 범위에 따른 분류 (WHO 기준 예시)
  let status = "";

  if (bmi < 18.5) {
    status = "저체중";
  } else if (bmi < 25) {
    status = "정상";
  } else if (bmi < 30) {
    status = "과체중";
  } else {
    status = "비만";
  }

  // 결과 문장 출력
  resultDiv.textContent = `안녕하세요, ${name}님! 당신의 BMI는 ${bmiRounded}입니다. (체중 상태: ${status})`;
});

// 다크 모드 토글 버튼
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    this.textContent = "라이트 모드";
  } else {
    this.textContent = "다크 모드";
  }
});
