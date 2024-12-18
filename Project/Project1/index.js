let sliderImage = document.getElementById("image")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let dotsContainer = document.getElementById("dotsContainer")

let currentIndex = 0
let interval;
const Images = [
    "https://cdn.pixabay.com/photo/2024/12/13/08/36/new-year-9264474_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/26/18/50/skyscraper-9226515_640.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
    "https://cdn.pixabay.com/photo/2024/12/13/21/21/eye-9266169_640.jpg",
    "https://cdn.pixabay.com/photo/2024/12/13/18/36/landscape-9265991_640.jpg",
    "https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_640.jpg",
]

function showImage() {
    sliderImage.src = Images[currentIndex]
    sliderImage.alt = `Images ${currentIndex + 1}`
    updateDots()
}
function autoSlider() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % Images.length
        showImage()
    }, 1000);
}

function pauseInterval() {
    clearInterval(interval)
}

prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length
    showImage()
    pauseInterval()
})
next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % Images.length
    showImage()
    pauseInterval()
})

function createDots() {
    Images.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        if (index === currentIndex) {
            dot.classList.add("active")
        }

        dot.addEventListener("click", function () {
            currentIndex = index
            pauseInterval()
            showImage()
            autoSlider()
        })
        dotsContainer.appendChild(dot)


    })
}

function updateDots() {
    const dots = document.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex)
    })
}
updateDots()
autoSlider()
createDots()