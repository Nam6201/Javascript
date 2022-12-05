var a = prompt("a");
while (isNaN(a) || a == "" || a == null) {
  a = prompt("Nhap lai");
}
var b = prompt("b");
while (isNaN(b) || b == "" || b == null) {
  b = prompt("Nhap lai");
}
var c = prompt("c");
while (isNaN(c) || c == "" || c == null) {
  c = prompt("Nhap lai");
}
function ptBac2(a, b, c) {
  var delta = Math.pow(Number(b),2) - 4*Number(a)*Number(c);
  let x1, x2;
  if (delta < 0)
  {
    console.log('vo nghiem')
  }
  else if (delta > 0){
    x1 = (Number(b)*(-1)  + Math.sqrt(delta))/ (2*Number(a));
    x2 = (Number(b)*(-1) - Math.sqrt(delta)) / (2*Number(a));
    console.log(x1, x2)
  }
  else
  {
    x1 = x2 = (-Number(b)) / 2 * Number(a);
    console.log('nghiem kep', x1)
  }
  return x1, x2;
}
ptBac2(a, b, c);

