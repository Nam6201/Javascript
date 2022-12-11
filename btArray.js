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

const menu = `1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên
Nhập thao tác lựa chọn`

var cont = true
do {
  try {
    var input = prompt(menu);
    if (input == "") throw new Error("Nhap lua chon");
    cont = false;
  } catch (error) {
    alert(error)
  }
} while (cont);


if (input == 1) {
  console.log(students)
} 
else if (input == 2) {
  var newName = prompt(" Nhap ten sinh vien: ")
  var newAddress = prompt("Nhap dia chi: ")
  var newStudent = {
    id: students.length + 1,
    name: newName,
    address: newAddress
  }
  students.push(newStudent);
  console.log(students)
}
else if (input == 3) {
  var idEdit = prompt("Nhap id sinh vien muon sua: ");
  var editIndex = students.findIndex(function (student) {
    return student.id == idEdit;
  })
  if (editIndex == -1) {
    alert(" Khong tim thay sinh vien")
  } else {
    var updateName = prompt(" Nhap ten sinh vien: ");
    var updateAddress = prompt("Nhap dia chi: ");
    var updateStudent = {
      id: Number(idEdit),
      name: updateName,
      address: updateAddress
    }
    students.splice(idEdit - 1, 1, updateStudent);
  }
  console.log(students);
}
else if (input == 4) {
  var idDel = prompt("Nhap id sinh vien muon xoa: ");
   var delIndex = students.findIndex(function (student) {
     return student.id == idDel;
   });
   if (delIndex == -1) {
     alert(" Khong tim thay sinh vien");
   } else {
      students.splice(idDel - 1, 1);
  }
  console.log(students);
}
// Sử dụng các hàm đã học ở trên để thực hiện các chức năng như: thêm, sửa, xóa sinh viên trong mảng đã cho
// function add(id, name, address) {
//   this.id = id;
//   this.name = name;
//   this.address = address;
// }

// var add1 = new add(8, 'Nam', 'Danang')
// students[students.length] = add1;
// console.log(students)

// function update(arr) {
//   for (const i of arr) {
//     if (i.id == 8) {
//       i.name = "Nam Nguyen";
//       i.address = "Quang Nam"
//     }
//   }
// }
// update(students);
// console.log(students);

// function del(arr) {
//   for (const i of arr) {
//     if (i.id == 8) {
//       arr.pop(arr[i])
//     }
//   }
// }
// del(students)
// console.log(students);