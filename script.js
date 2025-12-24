function checkOutfit() {
  const top = document.getElementById("topColor").value;
  const bottom = document.getElementById("bottomColor").value;

  const colorDiv = document.getElementById("colorMatches");
  const shoeDiv = document.getElementById("shoeMatches");

  if (!top || !bottom) {
    colorDiv.innerHTML = "⚠️ Please select both colors.";
    shoeDiv.innerHTML = "";
    return;
  }

  const colorRules = {
    Black: ["White", "Grey", "Beige", "Cream", "Olive", "Khaki", "Blue", "Navy"],
    White: ["Black", "Grey", "Blue", "Navy", "Brown", "Olive"],
    Grey: ["Black", "White", "Blue", "Navy", "Maroon"],
    Charcoal: ["White", "Beige", "Cream", "Blue"],
    Blue: ["White", "Grey", "Beige", "Brown"],
    Navy: ["White", "Beige", "Cream", "Grey"],
    Olive: ["Black", "White", "Beige", "Cream"],
    Khaki: ["Black", "White", "Navy", "Brown"],
    Beige: ["Black", "Navy", "Brown", "Olive"],
    Cream: ["Black", "Brown", "Navy"],
    Brown: ["White", "Beige", "Blue"],
    Maroon: ["White", "Grey", "Beige"],
    "Pastel Pink": ["White", "Grey", "Blue"],
    "Pastel Blue": ["White", "Grey", "Beige"]
  };

  const shoeRules = {
    Black: ["Black", "White", "Brown"],
    White: ["White", "Beige", "Tan"],
    Grey: ["White", "Black"],
    Blue: ["White", "Brown"],
    Navy: ["White", "Brown"],
    Olive: ["White", "Brown"],
    Khaki: ["White", "Brown"],
    Beige: ["White", "Brown"],
    Cream: ["Brown", "White"],
    Maroon: ["Black", "Brown"]
  };

  // ROW 2 OUTPUT
  const matches = colorRules[top] || [];
  colorDiv.innerHTML = `
    <h3>🎨 Best Color Matches</h3>
    <ul>
      ${matches.map(c => `<li>${c}</li>`).join("")}
    </ul>
  `;

  // ROW 3 OUTPUT
  const shoes = shoeRules[bottom] || ["White", "Black"];
  shoeDiv.innerHTML = `
    <h3>👟 Shoes That Match</h3>
    <ul>
      ${shoes.map(s => `<li>${s} shoes</li>`).join("")}
    </ul>
  `;
}
