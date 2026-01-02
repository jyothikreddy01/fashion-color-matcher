let selectedTop = null;
let selectedBottom = null;

/* 🎨 COLOR DATABASE */
const colors = [
  // NEUTRALS
  { name: "White", hex: "#ffffff", type: "neutral" },
  { name: "Black", hex: "#000000", type: "dark" },
  { name: "Grey", hex: "#9e9e9e", type: "neutral" },
  { name: "Beige", hex: "#d8cfc4", type: "neutral" },
  { name: "Cream", hex: "#f5f5dc", type: "neutral" },

  // BLUES
  { name: "Light Blue", hex: "#add8e6", type: "blue" },
  { name: "Navy", hex: "#0b1c2d", type: "dark" },

  // EARTH
  { name: "Olive", hex: "#6b8e23", type: "earth" },
  { name: "Brown", hex: "#5a3a1a", type: "earth" },

  // BRIGHTS
  { name: "Red", hex: "#c62828", type: "bright" },
  { name: "Yellow", hex: "#fbc02d", type: "bright" },
  { name: "Orange", hex: "#ef6c00", type: "bright" },

  // PASTELS
  { name: "Pink", hex: "#f8bbd0", type: "pastel" },
  { name: "Lavender", hex: "#e6e6fa", type: "pastel" },
  { name: "Mint", hex: "#b2dfdb", type: "pastel" }
];

/* 🧩 RENDER COLORS */
function renderColors() {
  const topDiv = document.getElementById("topColors");
  const bottomDiv = document.getElementById("bottomColors");

  colors.forEach(color => {
    const cardTop = createCard(color, "top");
    const cardBottom = createCard(color, "bottom");
    topDiv.appendChild(cardTop);
    bottomDiv.appendChild(cardBottom);
  });
}

function createCard(color, type) {
  const card = document.createElement("div");
  card.className = "color-card";
  card.innerHTML = `
    <div class="color-box" style="background:${color.hex}"></div>
    <div>${color.name}</div>
  `;

  card.onclick = () => {
    document
      .querySelectorAll(`#${type}Colors .color-card`)
      .forEach(c => c.classList.remove("selected"));

    card.classList.add("selected");

    if (type === "top") selectedTop = color;
    else selectedBottom = color;
  };

  return card;
}

/* 👟 FASHION ENGINE */
function checkOutfit() {
  const result = document.getElementById("result");

  if (!selectedTop || !selectedBottom) {
    result.innerHTML = "Please select both top and bottom colors.";
    return;
  }

  let shoes = [];
  let message = "Good style choice.";

  if (selectedBottom.name === "Blue Jeans") {
    shoes = ["White Sneakers", "Black Sneakers"];
  }
  else if (selectedTop.type === "pastel") {
    shoes = ["White Sneakers", "Beige Sneakers"];
    message = "Soft pastel balanced perfectly.";
  }
  else if (selectedTop.type === "bright") {
    shoes = ["White Sneakers", "Black Sneakers"];
    message = "Bold color balanced with neutrals.";
  }
  else if (
    selectedTop.type === "earth" ||
    selectedBottom.type === "earth"
  ) {
    shoes = ["Brown Loafers", "Tan Boots", "White Sneakers"];
    message = "Earth tones look premium together.";
  }
  else if (
    selectedTop.type === "dark" &&
    selectedBottom.type === "dark"
  ) {
    shoes = ["Black Sneakers", "Black Boots"];
    message = "Strong monochrome look.";
  }
  else {
    shoes = ["White Sneakers", "Black Sneakers"];
    message = "Clean and versatile outfit.";
  }

  result.innerHTML = `
    ✅ ${message}<br><br>
    👟 Best shoes:<br>
    ${shoes.join("<br>")}
  `;
}

/* INIT */
renderColors();
