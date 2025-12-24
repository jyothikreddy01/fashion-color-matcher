const colors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#ffffff" },
  { name: "Grey", hex: "#7d7d7d" },
  { name: "Beige", hex: "#e6d3a3" },
  { name: "Cream", hex: "#f4ecd8" },
  { name: "Navy", hex: "#0a1f44" },
  { name: "Denim Blue", hex: "#3b5b92" },
  { name: "Olive", hex: "#556b2f" },
  { name: "Sage", hex: "#9caf88" },
  { name: "Brown", hex: "#5a3a1b" },
  { name: "Tan", hex: "#d2b48c" },
  { name: "Maroon", hex: "#6b1f2b" },
  { name: "Wine", hex: "#722f37" },
  { name: "Rust", hex: "#b7410e" },
  { name: "Pastel Pink", hex: "#f2b5d4" },
  { name: "Lavender", hex: "#c4b7e2" },
  { name: "Mustard", hex: "#d4a017" },
  { name: "Peach", hex: "#f7c1a0" },
  { name: "Gold", hex: "#d4af37" },
  { name: "Gunmetal", hex: "#2a3439" }
];

let topColor = "";
let bottomColor = "";
let shoeColor = "";

const neutrals = [
  "Black", "White", "Grey", "Beige", "Cream", "Navy", "Brown", "Tan"
];

function createDots(containerId, setter) {
  const container = document.getElementById(containerId);

  colors.forEach(c => {
    const dot = document.createElement("div");
    dot.className = "color-dot";
    dot.style.background = c.hex;
    dot.title = c.name;

    dot.onclick = () => {
      [...container.children].forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      setter(c.name);
    };

    container.appendChild(dot);
  });
}

createDots("topColors", c => topColor = c);
createDots("bottomColors", c => bottomColor = c);
createDots("shoeColors", c => shoeColor = c);

function checkFit() {
  const occasion = document.getElementById("occasion").value;
  const result = document.getElementById("result");
  const bestShoe = document.getElementById("bestShoe");

  if (!topColor || !bottomColor || !shoeColor) {
    result.innerHTML = "⚠️ Please select top, bottom, and footwear colors.";
    bestShoe.innerHTML = "";
    return;
  }

  let score = 0;

  if (topColor === bottomColor) score++;
  if (neutrals.includes(topColor) || neutrals.includes(bottomColor)) score += 2;
  if (neutrals.includes(shoeColor)) score += 2;

  if (occasion === "date" && neutrals.includes(shoeColor)) score++;
  if (occasion === "party" && !neutrals.includes(topColor)) score++;
  if (occasion === "casual") score++;

  let verdict =
    score >= 6
      ? "✨ Excellent — premium and well-balanced."
      : score >= 4
      ? "👍 Good — stylish with room for refinement."
      : "⚠️ Not ideal — try neutral balance.";

  const suggestedShoe =
    occasion === "party"
      ? "Black or Gold"
      : occasion === "date"
      ? "Brown or Tan"
      : "White or Black";

  result.innerHTML = `
    <h3>Outfit Verdict</h3>
    <p><b>${verdict}</b></p>
    <p>${occasion.toUpperCase()} look</p>
    <p>Top: ${topColor} | Bottom: ${bottomColor} | Shoes: ${shoeColor}</p>
  `;

  bestShoe.innerHTML = `
    <h3>Best Shoe Suggestion</h3>
    <p>Try <b>${suggestedShoe}</b> shoes for a refined finish.</p>
  `;
}

  

