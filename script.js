function checkOutfit() {
  const top = document.getElementById("top").value;
  const bottom = document.getElementById("bottom").value;
  const result = document.getElementById("result");

  if (!top || !bottom) {
    result.innerHTML = "Please select both top and bottom colors.";
    return;
  }

  let shoes = [];
  let message = "";

  // 🎯 WHITE TOP RULES
  if (top === "white" && bottom === "blue") {
    shoes = ["White Sneakers", "Black Sneakers", "Grey Sneakers"];
    message = "Great combo! Casual & clean look.";
  }

  // 🎯 BLACK TOP RULES
  else if (top === "black" && bottom === "black") {
    shoes = ["Black Sneakers", "Black Boots"];
    message = "All-black always works.";
  }

  // 🎯 GREY TOP RULES
  else if (top === "grey" && bottom === "black") {
    shoes = ["White Sneakers", "Black Sneakers"];
    message = "Sharp and balanced outfit.";
  }

  // 🎯 BEIGE / KHAKI BOTTOM RULES
  else if (bottom === "beige") {
    shoes = ["Brown Loafers", "White Sneakers"];
    message = "Perfect neutral pairing.";
  }

  // 🎯 DEFAULT SAFE RULE
  else {
    shoes = ["White Sneakers", "Black Sneakers"];
    message = "Safe and stylish combination.";
  }

  result.innerHTML = `
    ✅ ${message}<br><br>
    👟 Best shoes:<br>
    ${shoes.join("<br>")}
  `;
}
