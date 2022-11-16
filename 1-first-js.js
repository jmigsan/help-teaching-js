//write js like you write JHub. just normal writing code. but then they reference the HTML.

let x = 0;
let y = 0;

const func1 = () => {
  x = x + 1;
  y = x;

  document.getElementById('f1').innerHTML = x;
  document.getElementById('f2').innerHTML = y;
};
