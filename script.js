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
  { name: "Peach", hex: "#f7c1a0" }
];

let topColor = "", bottomColor = "", shoeColor = "";

const neutrals = ["Black", "White", "Grey", "Beige", "Cream", "Navy", "Brown", "Tan"];

function createColors(containerId, setter) {
  const container = document.getElementById(containerId);

  colors.forEach(c => {
    const item = document.createElement("div");
    item.className = "color-item";

    const dot = document.createElement("div");
    dot.className = "color-dot";
    dot.style.background = c.hex;

    const name = document.createElement("div");
    name.className = "color-name";
    name.innerText = c.name;

    item.appendChild(dot);
    item.appendChild(name);

    item.onclick = () => {
      [...container.children].forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      setter(c.name);
    };

    container.appendChild(item);
  });
}

createColors("topColors", c => topColor = c);
createColors("bottomColors", c => bottomColor = c);
createColors("shoeColors", c => shoeColor = c);

function checkFit() {
  const occasion = document.getElementById("occasion").value;
  const result = document.getElementById("result");
  const bestShoe = document.getElementById("bestShoe");

  if (!topColor || !bottomColor || !shoeColor) {
    result.innerHTML = "⚠️ Please select top, bottom and footwear colors.";
    bestShoe.innerHTML = "";
    return;
  }

  let score = 0;
  if (topColor === bottomColor) score++;
  if (neutrals.includes(topColor) || neutrals.includes(bottomColor)) score += 2;
  if (neutrals.includes(shoeColor)) score += 2;

  if (occasion === "party" && !neutrals.includes(topColor)) score++;
  if (occasion === "casual") score++;

  let verdict =
    score >= 5 ? "Excellent balance. Looks clean and stylish."
    : score >= 3 ? "Good combination. Minor improvement possible."
    : "Not ideal. Try neutral colors.";

  const suggestedShoe =
    occasion === "party" ? "Black"
    : occasion === "date" ? "Brown or Tan"
    : "White or Black";

  result.innerHTML = `
    <b>Outfit Verdict</b><br>
    ${verdict}<br><br>
    Top: ${topColor}<br>
    Bottom: ${bottomColor}<br>
    Shoes: ${shoeColor}
  `;

  bestShoe.innerHTML = `
    <br><b>Best Shoe Suggestion:</b> ${suggestedShoe}
  `;
}

   
