const $firstInput = document.getElementById('first-number') as HTMLInputElement;
const $secondInput = document.getElementById('second-number') as HTMLInputElement;
const $sumButton = document.getElementById('sum-button');

function sum(a, b) {
  return a + b;
}

$sumButton.addEventListener('click', function () {
  console.log(sum($firstInput.value, $secondInput.value));
});