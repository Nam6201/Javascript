const students = [
  {
    id: 1,
    name: "Dinh",
    address: "hue",
  },
  {
    id: 2,
    name: "Nam",
    address: "quang nam",
  },
  {
    id: 3,
    name: "Tan",
    address: "da nang",
  },
  {
    id: 4,
    name: "Hung",
    address: "hue",
  },
  {
    id: 5,
    name: "Tri",
    address: "quang tri",
  },
  {
    id: 6,
    name: "Anh",
    address: "hue",
  },
  {
    id: 7,
    name: "Binh",
    address: "da nang",
  },
];

// Sử dụng các hàm đã học ở trên để thực hiện các chức năng như: thêm, sửa, xóa sinh viên trong mảng đã cho
function add(id, name, address) {
  this.id = id;
  this.name = name;
  this.address = address;
}

var add1 = new add(8, 'Nam', 'Danang')
students[students.length] = add1;
console.log(students)

function update(arr) {
  for (const i of arr) {
    if (i.id == 8) {
      i.name = "Nam Nguyen";
      i.address = "Quang Nam"
    }
  }
}
update(students);
console.log(students);

function del(arr) {
  for (const i of arr) {
    if (i.id == 8) {
      arr.pop(arr[i])
    }
  }
}
del(students)
console.log(students);