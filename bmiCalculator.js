const wieght = document.querySelector(".wt");
const feets = document.querySelector(".feet");
const inches = document.querySelector(".inchs");
const output = document.querySelector("h3");
const report = document.querySelector(".status");

//reset the previos data
function reset() {
  wieght.value = "";
  feets.value = "";
  inches.value = "";
  output.textContent = "0";
  report.textContent = "N/A";
}

function calcBmi() {
  //converion of feets
  const ft = feets.value * 0.3048;
  //conversion of inches
  const ins = inches.value * 0.0254;
  //taking square the total of feets and inches
  const sqrOffeetsInches = (ft + ins) * (ft + ins);
  //for BMI the formula is weight in kgs devided by (hieght in meters)*2
  const bmi = wieght.value / sqrOffeetsInches;
  //now to execute the BMI on our desired location
  output.textContent = bmi.toFixed(2);
  report.innerHTML = `Your are : <strong>${interpretBMI()}</strong>`;

  function interpretBMI() {
    if (bmi < 18.4) {
      return "Underwieght";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Noraml";
    } else if (bmi > 24.9 && bmi <= 39.9) {
      return "Overweight";
    } else if (bmi > 39.9) {
      return "obese";
    } else {
      return "Inavlid ";
    }
  }
}
