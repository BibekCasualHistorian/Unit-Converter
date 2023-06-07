document.getElementById("convert").addEventListener("click", function () {
  let input = document.getElementById("input-number").value;
  const all = document.querySelectorAll(".all");
  for (let index = 0; index < all.length; index++) {
    document.getElementsByClassName("all")[index].textContent = input;
  }

  document.getElementById("meter-to-feet").textContent = (
    input * 3.281
  ).toFixed(2);
  document.getElementById("feet-to-meter").textContent = (
    input / 3.281
  ).toFixed(3);
  document.getElementById("liter-to-gallon").textContent = (
    input * 0.264
  ).toFixed(3);
  document.getElementById("gallon-to-liter").textContent = (
    input / 0.264
  ).toFixed(3);
  document.getElementById("kilo-to-pound").textContent = (
    input * 2.204
  ).toFixed(3);
  document.getElementById("pound-to-kilo").textContent = (
    input / 2.204
  ).toFixed(3);
  //   document.getElementById("meter-value").textContent = input;
  //   document.getElementById("feet-value").textContent = input / 3.281;
});
