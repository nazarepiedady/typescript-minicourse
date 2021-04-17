const $firstInput = document.getElementById('first-number') as HTMLInputElement;
const $secondInput = document.getElementById('second-number') as HTMLInputElement;
const $sumButton = document.getElementById('sum-button') as HTMLButtonElement;

function sum(a: number, b: number) {
  return a + b;
}

$sumButton.addEventListener('click', function () {
  console.log(sum(Number($firstInput.value), Number($secondInput.value)));
});