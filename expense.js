let addBtn = document.getElementById("add-btn")
let nameExp = document.getElementById("name-exp")
let dateExp = document.getElementById("date-exp")
let amtExp = document.getElementById("amt-exp")
let tabList = document.getElementById("table-list")

//localStorage.clear()
let expenFromStorage = JSON.parse(localStorage.getItem("expen"))
if (expenFromStorage) {
    tabList.innerHTML = expenFromStorage 
}


addBtn.addEventListener("click", function() {
    if (nameExp.value && dateExp.value && amtExp.value) {
        let name = nameExp.value
        let date = dateExp.value
        let amt = amtExp.value

        let row=""
        row+= `
            <tr>
               <td>${name}</td>
               <td>${date}</td>
               <td>&#8358; ${amt}</td>
               <td class="del-exp">&times;</td>
            </tr>
        `
        tabList.innerHTML+=row
        localStorage.setItem("expen", JSON.stringify(tabList.innerHTML))
        window.location.reload()
    }
    nameExp.value=""
    dateExp.value=""
    amtExp.value=""
})

let delExp = document.getElementsByClassName("del-exp")
for (var i=0; i<delExp.length; i++) {
    delExp[i].addEventListener("click", function() {
        let div = this.parentElement;
        div.style.display="none"
        localStorage.setItem("expen", JSON.stringify(tabList.innerHTML))
    })
}
