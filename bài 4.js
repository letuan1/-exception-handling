function main() {
    var a = prompt("nhập tên thành phố");
    try {
        if (a == "stockholm") throw "sai thành phố"
    }catch (e) {
        console.log(("Error:	" + e.message))
    }
}