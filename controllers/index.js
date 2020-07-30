//Tạo đối tượng service tương tác backend

var svService = new SinhVienService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (res) {
      console.log("data", res.data);
      var contentTable = "";
      for (let i = 0; i < res.data.length; i++) {
        var currentSV = res.data[i];
        contentTable += `
          <tr>
          <td>${currentSV.MaSV}</td>
          <td>${currentSV.HoTen}</td>
          <td>${currentSV.Email}</td>
          <td>${currentSV.SoDT}</td>
          <td>${currentSV.DiemToan}</td>
          <td>${currentSV.DiemLy}</td>
          <td>${currentSV.DiemHoa}</td>
          </tr>
        `;
      }

      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log("error", error);
    });
};

var themSinhVien = function () {
  console.log("thêm sinh viên");
};

var xoaSinhVien = function () {
  console.log("Xóa sinh viên");
};

renderSinhVien();
