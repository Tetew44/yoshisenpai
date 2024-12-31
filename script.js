var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error("Failed to send email");
          button.textContent = "Error 😞";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight, maxWidth) {
  lines.forEach((line, index) => {
    const words = line.split(" ");
    let currentLine = "";
    let lineY = y + index * (fontSize + lineHeight);

    words.forEach((word) => {
      const testLine = currentLine + word + " ";
      const testWidth = context.measureText(testLine).width;
      if (testWidth > maxWidth) {
        context.fillText(currentLine, x, lineY);
        currentLine = word + " ";
        lineY += fontSize + lineHeight;
      } else {
        currentLine = testLine;
      }
    });
    context.fillText(currentLine, x, lineY);
  });
}

function drawText() {
  var fontSize = Math.min(24, window.innerWidth / 20); // Adjust font size for smaller screens
  var lineHeight = fontSize * 0.5;
  var maxWidth = canvas.width * 0.8; // Allow some margin on the sides

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["Haii yoshi senpai semoga hari ini hari yang menyenangkan"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["Haii yoshi senpai semoga hari ini hari yang menyenangkan"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["aku datang untuk memberikan link horor ini padamu"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["aku datang untuk memberikan link horor ini padamu"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["Aku membuat ini hanya iseng aja sekaligus berkeskperimen di akhir bulan ini"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["Aku membuat ini hanya iseng aja sekaligus berkeskperimen di akhir bulan ini"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["aku berharap yoshi senpai suka sama link ini"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["aku berharap yoshi senpai suka sama link ini"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }
  if (frameNumber > 2400 && frameNumber < 2700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["semoga yoshi senpai di tahun berikutnya selalu lancar urusannya"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2700 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["semoga yoshi senpai di tahun berikutnya selalu lancar urusannya"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 3000) {
    opacity = 0;
  }
  if (frameNumber > 3000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      ["see you next time yoshi senpai"],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight,
      maxWidth
    );
    opacity = opacity + 0.01;
  }

  if (frameNumber >= 3300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    drawTextWithLineBreaks(
      ["good luck and still do the best in everywhere"],
      canvas.width / 2,
      canvas.height / 2 + 70,
      fontSize,
      lineHeight,
      maxWidth
    );
    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    drawTextWithLineBreaks(
      ["Will you open it?"],
      canvas.width / 2,
      canvas.height / 2 + 120,
      fontSize,
      lineHeight,
      maxWidth
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
