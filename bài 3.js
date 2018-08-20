function main() {
    var a = prompt("nhập số thứ nhất");
    try {
        if (a > 100){
            console.log("số lớn hơn 100 , hãy nhập lại số ")
        }
    }catch (e) {
        console.log(("Error:	" + e.message))
    }
}