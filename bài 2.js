function main() {
    var x = prompt("nhập tên để kiểm tra");
    try {
        if (isNaN(x)) throw "số";
        if (x == 'a') throw "số"
        console.log("tên hợp lệ")
    }catch (e) {
        console.log("tên không hợp lệ")
    }
}
