const $firstInput = document.getElementById('first-number');
const $secondInput = document.getElementById('second-number');
const $sumButton = document.getElementById('sum-button');

function sum(a, b) {
  return a + b;
}

$sumButton.addEventListener('click', function () {
  console.log(sum($firstInput.value, $secondInput.value));
});