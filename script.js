// 버튼 클릭하면 BMI 계산
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

  // 결과 문장 출력
  resultDiv.textContent = `안녕하세요, ${name}님! 당신의 BMI는 ${bmiRounded}입니다!`;
});
