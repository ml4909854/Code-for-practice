const sliderImage = document.getElementById("slideImage")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const dotsContainer = document.getElementById("dotsContainer")

const Images  = [
    "https://cdn.pixabay.com/photo/2013/05/09/09/06/waves-circles-109964_640.jpg",
    "https://cdn.pixabay.com/photo/2020/03/27/17/56/toilet-paper-4974461_640.jpg",
    "https://cdn.pixabay.com/photo/2019/01/02/10/20/iceland-3908498_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/18/12/17/meadow-8071932_640.jpg",
    "https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/19/32/lion-7705981_640.png",
    "https://cdn.pixabay.com/photo/2017/10/03/12/13/hairdresser-2812229_640.jpg",
    "https://cdn.pixabay.com/photo/2016/09/21/09/46/gerbera-1684436_640.jpg",
]
let currentIndex = 0
let clear ;

function showImages(){
    sliderImage.src = Images[currentIndex]
    Images.alt = `Images of ${currentIndex}`
    UpdateDots()
}


function ImageSlider(){
  clear = setInterval(() => {
        currentIndex = (currentIndex +1 )%Images.length
        showImages()
    }, 2000);
} 



function pauseInterVal(){
    clearInterval(clear)
}

prevBtn.addEventListener("click"  , function(){
    pauseInterVal()
    currentIndex = (currentIndex - 1 + Images.length)%Images.length
    showImages()
})

nextBtn.addEventListener("click" , function(){
    pauseInterVal()
    currentIndex = (currentIndex+1)%Images.length
    showImages()
})

function createDots() {
    Images.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        if (index === currentIndex) {
            dot.classList.add("active")
        }
        dot.addEventListener("click", function () {
          pauseInterVal()
            currentIndex = index
            showImages()
            sliderImage()
        })
        dotsContainer.append(dot)
    })
}


function UpdateDots(){
    let dots = document.querySelectorAll(".dot")
    dots.forEach((dot , index)=>{
dot.classList.toggle("active" , index === currentIndex)
    })
}

ImageSlider()
createDots()



const products = document.getElementById("products");
let cart =  {};

// Fetch products and display them
async function getData() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        showData(data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function showData(data) {
    products.innerHTML = ""; // Clear the container before adding new data

    data.forEach((item) => {
        let div = document.createElement("div");
        div.className = "product"; // Optional: Add a class for styling

        // Product Image
        let image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.style.width = "100px";

        // Product Title
        let p1 = document.createElement("p");
        p1.innerHTML = item.title;

        // Product Price
        let p2 = document.createElement("p");
        p2.innerHTML = `Price: $${item.price.toFixed(2)}`; // Format price as currency

        // Add to Cart Button
        let addToCart = document.createElement("button");
        addToCart.innerHTML = "Add to Cart";
        addToCart.classList.add("add");
        addToCart.addEventListener("click", () => {
            addToCartHandler(item); // Add item to cart
        });

        div.appendChild(image);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(addToCart);

        // Append Product Div to Products Container
        products.appendChild(div);
    });
}

// Handle adding an item to the cart
function addToCartHandler(item) {
    if (cart[item.id]) {
        cart[item.id].quantity += 1; // Increase quantity if item is already in the cart
    } else {
        cart[item.id] = { ...item, quantity: 1 }; // Add new item with initial quantity
    }
    updateCart();
}

// Update cart and display subtotal
function updateCart() {
    // Save cart to localStorage to share data with the cart page
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Call the function to fetch and display products
getData();
