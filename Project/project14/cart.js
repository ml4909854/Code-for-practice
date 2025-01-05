let productlist = document.getElementById("productlist")
let cart = JSON.parse(localStorage.getItem("cart")) || {}

function showData() {

    productlist.innerHTML = " "
    if (Object.keys(cart).length === 0) {
        productlist.innerHTML = "Your card is empty"
    }

    Object.values(cart).forEach((product, index) => {
       
        let div = document.createElement("div")

        let title = document.createElement("p")
        title.innerHTML = `title : ${product.title}`

        let price = document.createElement("p")
        price.innerHTML = `price : ${product.price}`
    

        let quantity = document.createElement("p")
        quantity.innerHTML = `Quantity : ${product.quantity}`

        let removeBtn = document.createElement("button")
        removeBtn.innerHTML = "Remove to Cart"
        removeBtn.addEventListener("click" , function(){
            removeHandler(product.id)
        })

        div.append(title, price,quantity, removeBtn)
        productlist.append(div)
    })
}

 function removeHandler(productId){
    
    delete cart[productId]
    localStorage.setItem("cart" , JSON.stringify(cart))
    showData()
 }

showData()