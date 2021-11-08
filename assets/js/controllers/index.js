var service = new ProductService();
function getELE(id) {
    return document.getElementById(id);
}

function getListProduct() {
    service.getListProductApi().then(function (result) {
        renderData(result.data);
    }).catch(function (error) {
        console.log(error);
    })
}

getListProduct();

function renderData(data) {
    var html = "";
    data.forEach(function (item) {
        html += `<tr>
        <td>${item.id}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td style="width:10rem;"><img style="width:100%; height:auto;" src="../../assets/img/${item.hinhAnh}" alt="${item.hinhAnh}"></td>
        <td>${item.moTa}</td>
        <td style="width:10rem;"><button type="button" class="btn btn-info">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>`;
    });
    getELE("tblDanhSachSP").innerHTML = html;
}
{/* <td><button type="button" class="btn btn-info">Edit</button>
    </td> */}