let Input = document.getElementById('numbers');
let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

calculate.addEventListener('click', () => {
  let numbers = Input.value.split(',').map(Number);
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  result.innerHTML = `YOUR NUMBERS ADD UP TO:${sum}`;
});