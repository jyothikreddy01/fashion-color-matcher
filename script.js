function checkOutfit() {
  const top = document.getElementById("topColor").value;
  const bottom = document.getElementById("bottomColor").value;
  const result = document.getElementById("result");

  if (!top || !bottom) {
    result.innerHTML = "⚠️ Select both colors.";
    return;
  }

  const rules = {
    Black: ["White", "Grey", "Beige", "Olive", "Blue"],
    White: ["Black", "Blue", "Brown", "Olive"],
    Blue: ["White", "Grey", "Beige", "Black"],
    Grey: ["Black", "White", "Blue"],
    Olive: ["Black", "White", "Beige"],
    Beige: ["Black", "Blue", "Brown"],
    Brown: ["White", "Beige", "Blue"]
  };

  if (rules[top].includes(bottom)) {
    result.innerHTML = `✅ Good match! ${top} + ${bottom} looks clean.`;
  } else {
    result.innerHTML = `❌ Not ideal. Try pairing ${top} with: ${rules[top].join(", ")}`;
  }
}

