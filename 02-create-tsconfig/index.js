var $firstInput = document.getElementById('first-number');
var $secondInput = document.getElementById('second-number');
var $sumButton = document.getElementById('sum-button');
function sum(a, b) {
    return a + b;
}
$sumButton.addEventListener('click', function () {
    console.log(sum(Number($firstInput.value), Number($secondInput.value)));
});
