// Lấy tham chiếu đến các phần tử cần sử dụng
const ax1Input = document.querySelector('#ax1');
const b1Input = document.querySelector('#b1');
const c1Input = document.querySelector('#c1');
const c2Input = document.querySelector('#c2');
const ax2Input = document.querySelector('#ax2');
const b2Input = document.querySelector('#b2');
const x0Input = document.querySelector('#x0');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');
const result4 = document.querySelector('#result4');
const result5 = document.querySelector('#result5');
const button = document.getElementById('myButton');

// Define the printt function
function printt() {
  const ax1 = parseInt(ax1Input.value);
  const b1 = parseInt(b1Input.value);
  const c1 = parseInt(c1Input.value);
  const c2 = parseInt(c2Input.value);
  const ax2 = parseInt(ax2Input.value);
  const b2 = parseInt(b2Input.value);
  const x0 = parseInt(x0Input.value);

  result1.innerHTML = ax1 + 'x + ' + b1 + ' = ' + c1;
  result2.innerHTML = ax2 + 'x + ' + b2 + ' = ' + c2;
  result3.innerHTML = Number(ax2 + ax1) + 'x + ' + Number(b2 + b1) + ' = ' + Number(c1 + c2);
  result4.innerHTML = ax1 + " * " + String(x0)+ ' + ' + b1 + ' = ' + Number(ax1 * x0 + b1);
  result5.innerHTML = ax2 +" * "+ String(x0)+ ' + ' + b2 + ' = ' + Number(ax2 * x0 + b2);
}
