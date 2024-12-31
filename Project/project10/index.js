let productsContainer = document.getElementById("productsContainer")

let cart = JSON.parse(localStorage.getItem("cart")) || {};

let getData  = async ()=>{
   let response = await fetch("https://fakestoreapi.com/products")
  let data = await response.json()
  showData(data)
}

function showData(data){
data.forEach(item => {
   

    let div = document.createElement("div")

    let images = document.createElement("img")
    images.src = item.image
    images.style.width = "100px"

    let p1 = document.createElement("p")
    p1.innerHTML = item.title

    let p2 = document.createElement("p")
    p2.innerHTML = `Price : ${item.price}`

    let addToCartBtn = document.createElement("button")
    addToCartBtn.innerHTML = "Add To Cart"
    addToCartBtn.classList.add(".addToCart")
    addToCartBtn.addEventListener("click" , function(){
        alert("item added in a cart")
        addToCartHandler(item)
    })


    div.append(images , p1 , p2 , addToCartBtn)
    productsContainer.append(div)

});
}

function addToCartHandler(item){
    if(cart[item.id]){
        cart[item.id].quantity += 1;
    }else{
    cart[item.id] = {...item , quantity : 1}
   }
  SavedToLocalStorage()
}

function SavedToLocalStorage(){
localStorage.setItem("cart" , JSON.stringify(cart))
}
getData()