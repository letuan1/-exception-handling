function main() {
    var a = prompt("nhập số ");
    try {
        if (a > 100){
            console.log("số lớn hơn 100 , hãy nhập lại số ")
        }else if (a > 0 || a < 100) {
            console.log("đúng dồi")
        }
    }catch (e) {
        console.log(("Error:	" + e.message))
    }finally {
        console.log("cảm ơn")
    }
}