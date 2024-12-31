
let cartContainer = document.getElementById("cartContainer")
let subtotal = document.getElementById("subTotal")

let cart = JSON.parse(localStorage.getItem("cart")) || {}


function showCartData(){
    cartContainer.innerHTML = ""
    let subTotal = 0

    if(Object.keys(cart).length === 0){
        cartContainer.innerHTML = "Your Cart Is Empty"
        subTotal.innerHTML = 0
    }
    Object.values(cart).forEach((item)=>{

        let div = document.createElement("div")

        let title = document.createElement("p")
        title.innerHTML = item.title

        let price = document.createElement("p")
        price.innerHTML = `price : ${(item.price)}`

       let quantity  = document.createElement("p")
       quantity.innerHTML = `Quantity : ${item.quantity}`

       let removeButton = document.createElement("button")
       removeButton.innerHTML = "remove"

       div.append(title , price , quantity , removeButton)
      cartContainer.append(div)
    })
}
showCartData()