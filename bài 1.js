function main() {
    var a = prompt("nhập số thứ nhất");
    var c = a/0 ;
    try {
            console.log( a + "chia hết cho " + c)
    }catch (e) {
        console.log(("Error:	" + e.message))
    }
}