let variationCounter = 0;
const totalVariations = 2160000; // Rough calculation of total possible variations

const canvas = document.getElementById("patternCanvas");
const ctx = canvas.getContext("2d");

function randomBeige() {
  return `rgb(${230 + Math.random() * 20}, ${210 + Math.random() * 10}, ${180 + Math.random() * 10})`;
}

function randomRed() {
  return `rgb(${150 + Math.random() * 40}, 0, 0)`;
}

function drawPlaidStripes() {
  const stripeSpacing = 90 + Math.random() * 10;
  const blackLineWidth = 12 + Math.random() * 3;
  const whiteLineWidth = 6 + Math.random() * 3;
  const redLineWidth = 3 + Math.random() * 3;

  // Beige background
  ctx.fillStyle = randomBeige();
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw black stripes
  ctx.strokeStyle = 'black';
  ctx.lineWidth = blackLineWidth;
  for (let i = 0; i < canvas.width; i += stripeSpacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Draw white stripes
  ctx.strokeStyle = 'white';
  ctx.lineWidth = whiteLineWidth;
  for (let i = 0; i < canvas.width; i += stripeSpacing * 1.5) {
    ctx.beginPath();
    ctx.moveTo(i + stripeSpacing / 4, 0);
    ctx.lineTo(i + stripeSpacing / 4, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i + stripeSpacing / 4);
    ctx.lineTo(canvas.width, i + stripeSpacing / 4);
    ctx.stroke();
  }

  // Draw red stripes
  ctx.strokeStyle = randomRed();
  ctx.lineWidth = redLineWidth;
  for (let i = 0; i < canvas.width; i += stripeSpacing * 3) {
    ctx.beginPath();
    ctx.moveTo(i + stripeSpacing / 2, 0);
    ctx.lineTo(i + stripeSpacing / 2, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i + stripeSpacing / 2);
    ctx.lineTo(canvas.width, i + stripeSpacing / 2);
    ctx.stroke();
  }
}

function drawHatching() {
  const hatchSpacing = 10 + Math.random() * 5;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.lineWidth = 1;

  // Draw diagonal hatching
  for (let i = -canvas.height; i < canvas.width; i += hatchSpacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + canvas.height, canvas.height);
    ctx.stroke();
  }

  for (let i = 0; i < canvas.width; i += hatchSpacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i - canvas.height, canvas.height);
    ctx.stroke();
  }
}

function generatePattern() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlaidStripes();
  drawHatching();

  // Increment variation counter
  variationCounter++;
  document.getElementById('variationCount').innerText = `Variation #${variationCounter}`;
}

document.getElementById('totalVariations').innerText = `Total Possible Variations: ${totalVariations}`;
