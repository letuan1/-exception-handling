function main() {
    var x = prompt("nhập tên để kiểm tra");
    try {
        if (isNaN(x) == false) throw "số"
        if (x == true) throw "số"
        console.log("tên đúng")
    }catch (e) {
        console.log("tên không hợp lệ   " + e.message)
    }
}
