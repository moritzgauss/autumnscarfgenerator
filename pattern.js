let variationCounter = 0;

const canvas = document.getElementById("patternCanvas");
const ctx = canvas.getContext("2d");

// Harmonious colors, with occasional neon accents
const harmoniousColors = [
  '#C19A6B', '#A0522D', '#8B4513', '#F4A460', '#DEB887', '#D2B48C', // Beige/Brown tones
  '#808080', '#A9A9A9', '#B0C4DE', '#778899', '#708090', '#696969', // Gray tones
  '#556B2F', '#6B8E23', '#2E8B57', '#3CB371', '#228B22', '#8FBC8F', // Green tones
  '#A52A2A', '#B22222', '#CD5C5C', '#DC143C', '#800000', '#FA8072', // Red tones
  '#8A2BE2', '#4B0082', '#483D8B', '#6A5ACD', '#7B68EE', '#9370DB', // Purple tones
  '#D2691E', '#FF8C00', '#FFA500', '#FF4500', '#FF6347', '#FFD700'  // Orange/Yellow tones
];

// Occasional neon palette
const neonColors = [
  '#FF5733', '#DAF7A6', '#FFC300', '#FF33F6', '#33FFF3', '#DA33FF',
  '#33FF57', '#FF5733', '#FFF700', '#FF006E'
];

function randomBeige() {
  return harmoniousColors[Math.floor(Math.random() * harmoniousColors.length)];
}

function randomColor() {
  return harmoniousColors[Math.floor(Math.random() * harmoniousColors.length)];
}

// Function to get a random harmonious or neon color occasionally
function getRandomColor() {
  const isNeon = Math.floor(Math.random() * 100) === 0;  // 1 in 100 for neon
  if (isNeon) {
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  } else {
    return randomColor();
  }
}

// Function to draw plaid stripes with varying spacing and line width
function drawPlaidStripes() {
  const stripeSpacing = 70 + Math.random() * 30; // Adjusted for more variety
  const blackLineWidth = Math.random() * 5 + 2; // Reduced max line width
  const whiteLineWidth = 4 + Math.random() * 2; // Slight variation in white stripes
  const redLineWidth = 2 + Math.random() * 3;

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
  ctx.strokeStyle = getRandomColor();
  ctx.lineWidth = redLineWidth;
  for (let i = 0; i < canvas.width; i += stripeSpacing * 2) {
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

// Function to draw diagonal hatching with varying spacing
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

// Function to calculate total variations based on color combinations and spacing
function calculateTotalVariations() {
  const colorCombinations = harmoniousColors.length * harmoniousColors.length; // BG and Red colors
  const stripeVariations = 10; // Variability in stripe widths
  const spacingVariations = 20; // Variability in spacing
  const hatchVariations = 20; // Variability in hatching
  
  return colorCombinations * stripeVariations * spacingVariations * hatchVariations;
}

// Update total variations based on the calculation
const totalVariations = calculateTotalVariations();

function generatePattern() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlaidStripes();
  drawHatching();

  // Increment variation counter
  variationCounter++;
  document.getElementById('variation-info').innerText = `Current Variation: ${variationCounter}/${totalVariations}`;
}

// Set the initial total variations count in HTML
document.getElementById('totalVariations').innerText = `Total Possible Variations: ${totalVariations}`;

// Generate the initial pattern on page load
generatePattern();
