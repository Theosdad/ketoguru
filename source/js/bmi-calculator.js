const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculateButton = document.getElementById('bmi-calculate');
const bmiItems = document.querySelectorAll('.bmi-list__item');

const calculateBMI = () => {
  let weightValue = parseInt(weight.value);
  let heightValue = parseFloat(height.value) / 100;

  const bmiResult = weightValue / heightValue ** 2;
  bmiItems.forEach((item) => {
    item.style.display = 'none';
  });

  if (bmiResult < 18) {
    document.getElementById('bmi-little').style.display = 'flex';
  } else if (bmiResult >= 18 && bmiResult <= 25) {
    document.getElementById('bmi-normal').style.display = 'flex';
  } else if (bmiResult > 25) {
    document.getElementById('bmi-much').style.display = 'flex';
  }
}

calculateButton.addEventListener('click', calculateBMI);
