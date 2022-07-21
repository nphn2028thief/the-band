var sliderList = [
    {
        src: "./assets/img/slider/newyork.jpg",
        title: "New York",
        description: "The atmosphere in New York is lorem ipsum."
    },
    {
        src: "./assets/img/slider/chicago.jpg",
        title: "Chicago",
        description: "Thank you, Chicago - A night we won't forget."
    },
    {
        src: "./assets/img/slider/la.jpg",
        title: "Los Angeles",
        description: "We had the best time playing at Venice Beach!"
    }
]

var sliderContainer = document.getElementById("slider");
var timer = 0;

setInterval(() => {
    sliderContainer.innerHTML = `
        <img src=${sliderList[timer].src} class="slider-img" />
        <div class="slider-content">
            <h2 class="slider-title">${sliderList[timer].title}</h2>
            <p class="slider-desc">${sliderList[timer].description}</p>
        </div>
    `
    timer++
    if (timer === 3) {
        timer = 0;
    }
}, 3000)
