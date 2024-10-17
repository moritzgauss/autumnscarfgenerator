function randomColor(minR, maxR, minG, maxG, minB, maxB) {
  return `rgb(${Math.floor(Math.random() * (maxR - minR + 1)) + minR}, 
               ${Math.floor(Math.random() * (maxG - minG + 1)) + minG}, 
               ${Math.floor(Math.random() * (maxB - minB + 1)) + minB})`;
}

function generatePattern() {
  const canvas = document.getElementById('patternCanvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  // Random colors for stripes with controlled color ranges
  const beige = randomColor(200, 255, 180, 230, 150, 200); // light beige to light brown
  const red = randomColor(120, 255, 0, 50, 0, 50); // dark red to bright red
  const black = randomColor(0, 50, 0, 50, 0, 50); // black to dark gray
  const white = randomColor(220, 255, 220, 255, 220, 255); // white to light gray

  // Define stripe widths and hatching properties
  const stripeWidth = Math.floor(Math.random() * 10) + 10; // random stripe width
  const stripeSpacing = Math.floor(Math.random() * 50) + 50; // random spacing between stripes
  const hatchDensity = Math.floor(Math.random() * 6) + 5; // density of hatching

  // Draw background beige
  ctx.fillStyle = beige;
  ctx.fillRect(0, 0, width, height);

  // Horizontal stripes (random spacing and widths)
  for (let i = 0; i < height; i += stripeSpacing) {
      ctx.fillStyle = black;
      ctx.fillRect(0, i, width, stripeWidth);
      ctx.fillStyle = red;
      ctx.fillRect(0, i + stripeWidth + 5, width, stripeWidth);
  }

  // Vertical stripes (random spacing and widths)
  for (let i = 0; i < width; i += stripeSpacing) {
      ctx.fillStyle = black;
      ctx.fillRect(i, 0, stripeWidth, height);
      ctx.fillStyle = red;
      ctx.fillRect(i + stripeWidth + 5, 0, stripeWidth, height);
  }

  // Draw hatching effect
  ctx.strokeStyle = white;
  ctx.lineWidth = 1;
  for (let i = -height; i < width; i += hatchDensity) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
  }

  // Update total pattern count
  document.getElementById('variationCount').innerText = "Total Variations: 1,250,000";
}

// Total possible variations
const totalVariations = 50 * 20 * 10 * 10 * 5 * 5 * 5;

document.getElementById('variationCount').innerText = `Total Variations: ${totalVariations}`;
