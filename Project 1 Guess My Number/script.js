const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const numberGuess = document.querySelector(".guess");

const secretNumber = Math.floor(Math.random() * 18) + 1;
let score = 20;
let highscore = 0;
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   Nếu không có số sẽ lối
  if (!guess) {
    document.querySelector(".message").textContent = "No answer";
  }

  //   Nếu bằng số đoán thì thông báo chiến thăng
  if (guess == secretNumber) {
    document.querySelector(".message").textContent = "You win";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${highscore}`;
    }

    //   Nếu không bằng số đoán thì giảm điểm và tiếp tục thực hiện đoán số, nếu nhỏ hơn 1 thì thông báo "thua"
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";
      --score;

      document.querySelector(".label-score").textContent = `💯Score ${score}`;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

// Ấn nút again sẽ reset lại toàn bộ background và chơi lại từ đầu
btnAgain.addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guesssing....";
  document.querySelector(".label-score").textContent = "💯 Score: 20";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "";
  document.querySelector(".guess").value = "";
});
