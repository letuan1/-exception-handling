function main() {
    var a = prompt("nhập số ");
    var b = prompt("nhập số ");
    var c = prompt("nhập số ");
    try {
        if ((a - b ) == 0) throw "sai"
    }catch (e) {
        console.log(("Error:	" + e.message))
    }finally {
        console.log("kết quả là   " + (c/(a-b)))
    }

}
