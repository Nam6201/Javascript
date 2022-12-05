var a = prompt("a");
while (isNaN(a)) {
  a = prompt("Nhap lai");
}
var b = prompt("b");
while (isNaN(b)) {
  b = prompt("Nhap lai");
}
var kq;
if (a == 0) {
  if (b == 0) {
    alert("Vo so nghiem");
  } else {
    alert("Vo nghiem");
  }
} else {
  kq = -b / a;
}

console.log(kq);
