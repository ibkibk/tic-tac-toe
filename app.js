const onload = () => {
  let playercounter = 0;
  const playerX = box => {
    box
      .append("X")
      .css("font-size", "120px")
      .css("text-align", "center");
  };
  const playerO = box => {
    box
      .append("O")
      .css("font-size", "120px")
      .css("text-align", "center");
  };
  const checkResult = () => {
    sq1 = $(".box1").text();
    sq2 = $(".box2").text();
    sq3 = $(".box3").text();
    sq4 = $(".box4").text();
    sq5 = $(".box5").text();
    sq6 = $(".box6").text();
    sq7 = $(".box7").text();
    sq8 = $(".box8").text();
    sq9 = $(".box9").text();

    if (sq1 === sq2 && sq2 === sq3 && sq1.length > 0) {
      $(".result").text(`${sq1},"win"`);
      alert("you win");
    } else if (sq4 === sq5 && sq5 === sq6 && sq4.length > 0) {
      $(".result").text(`${sq4},"win"`);
      alert("you win");
    } else if (sq7 === sq8 && sq8 === sq9 && sq7.length > 0) {
      $(".result").text(`${sq7}`);
      alert("you win");
    } else if (sq1 === sq4 && sq4 === sq7 && sq1.length > 0) {
      $(".result").text(`${sq1}`);
      alert("you win");
    } else if (sq2 === sq5 && sq5 === sq8 && sq2.length > 0) {
      $(".result").text(`${sq2}`);
      alert("you win");
    } else if (sq3 === sq6 && sq6 === sq9 && sq3.length > 0) {
      $(".result").text(`${sq3}`);
      alert("you win");
    } else if (sq3 === sq5 && sq5 === sq7 && sq3.length > 0) {
      $(".result").text(`${sq3}`);
      alert("you win");
    } else if (sq1 === sq5 && sq5 === sq8 && sq1.length > 0) {
      $(".result").text(`${sq1}`);
      alert("you win");
    }
  };

  $(".box").one("click", function() {
    if (playercounter % 2 === 0 && $(this).text().length <= 1) {
      playerX($(this));
      playercounter++;
      checkResult();
    } else if (playercounter % 2 === 1 && $(this).text().length <= 1) {
      playerO($(this));
      playercounter++;
      checkResult();
    }
  });
};
$(onload);
