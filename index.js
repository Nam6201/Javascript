var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var number2 = [11, 22, 33, 44, 55];
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//giam dan
arr.sort(function sortArr(a, b) {
  return b - a;
});
console.log(arr);

// tang dan
arr.sort(function sortArr(a, b) {
  return a - b;
});
console.log(arr);

// cắt mảng từ ptu 0 - ptu thứ 8
function popArr1(arr) {
  return arr.slice(0, 9);
}
console.log(popArr1(arr));

// cắt mảng từ ptu thứ 1 trở đi
function popArr2(arr) {
  return arr.slice(1);
}
console.log(popArr2(arr));

// thêm 0 vào cuối mảng
function pushArr(arr) {
  return arr.push(0);
}
pushArr(arr);
console.log(arr);

// thêm 0 vào đầu mảng
function shiftArr(arr) {
  arr.pop(0);
  return arr.unshift(0);
}
shiftArr(arr);
console.log(arr);

// loại bỏ 0 đầu mảng, sau đó cắt mảng từ pt thứ 0 đến thứ 4
function sliceArr(arr) {
  arr.shift(0);
  console.log(arr.slice(0, 5));
}
sliceArr(arr);

// thêm 100 vào vị trí thứ 4 của mảng
function spliceArr(arr) {
  arr.splice(4, 0, 100);
  console.log(arr);
}
spliceArr(arr);

function spliceArr1(arr) {
  arr.splice(4, 2, 100);
  console.log(arr);
}
spliceArr1(arr);

function newArray(arr) {
  arr1 = arr.slice(4, 9);
  console.log(arr1);
}
newArray(arr);

function newArray2(arr) {
  arr2 = arr.slice(0, 5);
  console.log(arr2);
}
newArray2(arr);
console.log(arr)


function spliceArr2(arr) {
  arr.splice(4, 1, 5);
  console.log(arr);
}
spliceArr2(arr);

function catArray(arr, arr2) {
  console.log(arr.concat(arr2))
}
catArray(arr, number2);