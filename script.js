let selectedTop = null;
let selectedBottom = null;

/* 🎨 COMPLETE COLOR DATABASE (LIGHT / MID / DARK) */
const colors = [

  // ⚪ WHITES & NEUTRALS
  { name: "White", hex: "#FFFFFF", type: "neutral", base: "white" },
  { name: "Off White", hex: "#FAF9F6", type: "neutral", base: "white" },
  { name: "Cream", hex: "#F5F5DC", type: "neutral", base: "white" },

  // ⚫ BLACK & GREY
  { name: "Black", hex: "#000000", type: "dark", base: "black" },
  { name: "Charcoal Grey", hex: "#2E2E2E", type: "dark", base: "grey" },
  { name: "Dark Grey", hex: "#4A4A4A", type: "dark", base: "grey" },
  { name: "Grey", hex: "#9E9E9E", type: "neutral", base: "grey" },
  { name: "Light Grey", hex: "#D6D6D6", type: "neutral", base: "grey" },

  // 🔵 BLUES
  { name: "Light Blue", hex: "#ADD8E6", type: "pastel", base: "blue" },
  { name: "Sky Blue", hex: "#87CEEB", type: "pastel", base: "blue" },
  { name: "Steel Blue", hex: "#4682B4", type: "neutral", base: "blue" },
  { name: "Blue", hex: "#1E88E5", type: "bright", base: "blue" },
  { name: "Navy", hex: "#0B1C2D", type: "dark", base: "blue" },
  { name: "Dark Navy", hex: "#081421", type: "dark", base: "blue" },

  // 🟢 GREENS
  { name: "Mint", hex: "#B2DFDB", type: "pastel", base: "green" },
  { name: "Light Green", hex: "#AED581", type: "pastel", base: "green" },
  { name: "Olive", hex: "#6B8E23", type: "earth", base: "green" },
  { name: "Forest Green", hex: "#1B5E20", type: "dark", base: "green" },
  { name: "Dark Green", hex: "#0F3D2E", type: "dark", base: "green" },

  // 🟤 BROWNS
  { name: "Beige", hex: "#D8CFC4", type: "neutral", base: "brown" },
  { name: "Tan", hex: "#C49A6C", type: "earth", base: "brown" },
  { name: "Brown", hex: "#5A3A1A", type: "earth", base: "brown" },
  { name: "Dark Brown", hex: "#3E2723", type: "dark", base: "brown" },

  // 🔴 REDS
  { name: "Light Red", hex: "#EF9A9A", type: "pastel", base: "red" },
  { name: "Red", hex: "#C62828", type: "bright", base: "red" },
  { name: "Wine", hex: "#7B1E1E", type: "dark", base: "red" },
  { name: "Maroon", hex: "#4E0707", type: "dark", base: "red" },

  // 🟡 YELLOWS
  { name: "Light Yellow", hex: "#FFF9C4", type: "pastel", base: "yellow" },
  { name: "Mustard", hex: "#FBC02D", type: "bright", base: "yellow" },
  { name: "Golden Yellow", hex: "#F9A825", type: "bright", base: "yellow" },

  // 🟠 ORANGES
  { name: "Peach", hex: "#FFCCBC", type: "pastel", base: "orange" },
  { name: "Orange", hex: "#EF6C00", type: "bright", base: "orange" },
  { name: "Burnt Orange", hex: "#BF360C", type: "dark", base: "orange" },

  // 🌸 PINKS & PURPLES
  { name: "Baby Pink", hex: "#F8BBD0", type: "pastel", base: "pink" },
  { name: "Pink", hex: "#EC407A", type: "bright", base: "pink" },
  { name: "Dusty Pink", hex: "#C48B9F", type: "neutral", base: "pink" },

  { name: "Lavender", hex: "#E6E6FA", type: "pastel", base: "purple" },
  { name: "Purple", hex: "#7E57C2", type: "bright", base: "purple" },
  { name: "Deep Purple", hex: "#4527A0", type: "dark", base: "purple" }
];

/* 🧩 RENDER COLOR CARDS */
function renderColors() {
  const topDiv = document.getElementById("topColors");
  const bottomDiv = document.getElementById("bottomColors");

  colors.forEach(color => {
    topDiv.appendChild(createCard(color, "top"));
    bottomDiv.appendChild(createCard(color, "bottom"));
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

/* 👟 FASHION RULE ENGINE */
function checkOutfit() {
  const result = document.getElementById("result");

  if (!selectedTop || !selectedBottom) {
    result.innerHTML = "Please select both top and bottom colors.";
    return;
  }

  let shoes = [];
  let message = "Good style choice.";

  if (selectedBottom.base === "blue") {
    shoes = ["White Sneakers", "Black Sneakers", "Grey Sneakers"];
    message = "Casual & clean denim look.";
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
    shoes = ["Brown Loafers", "Tan Shoes", "White Sneakers"];
    message = "Earth tones look premium.";
  }
  else if (
    selectedTop.type === "dark" &&
    selectedBottom.type === "dark"
  ) {
    shoes = ["Black Sneakers", "Black Boots"];
    message = "Strong monochrome outfit.";
  }
  else {
    shoes = ["White Sneakers", "Black Sneakers"];
    message = "Clean and versatile outfit.";
  }

  result.innerHTML = `
    ✅ ${message}<br><br>
    👟 Best shoe options:<br>
    ${shoes.join("<br>")}
  `;
}

/* INIT */
renderColors();
