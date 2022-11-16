// two ways to write functions. just use the modern way. it fixes some problems. but the other one is fine.

let x = 0;
let y = 0;

// this is a function. this is the modern and cool way to do it.
const func1 = () => {
  x = x + 1;

  document.getElementById('f1').innerHTML = x;
};

// this is a function. this is the lame and old way to do it.
function func2() {
  y = y + 1;

  document.getElementById('f2').innerHTML = y;
}
