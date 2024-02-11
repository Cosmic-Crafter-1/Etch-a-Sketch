const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");

document.addEventListener("DOMContentLoaded", function () {

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(button => {
                button.style.background = "white";
                button.style.color = "black";
            })
            button.style.background = "black";
            button.style.color = "white";
        });
    });

    const containerHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;

    // Create 16x16 grid of squares
    for (let i = 1; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Add hover effect
    const squares = document.querySelectorAll('.square');

    const colorMode = document.querySelector(".color-mode");
    colorMode.addEventListener("click", () => {
        squares.forEach(square => {
            square.addEventListener("mouseenter", () => {
                // Change color on hover and border to black as well
                square.style.backgroundColor = 'black';
                square.style.borderColor = 'black';
            });
        });
    })

    const clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        squares.forEach(square => {
            square.style.background = "white";
            square.style.borderColor = "transparent";
        })
    });

    const eraser = document.querySelector(".eraser");
    eraser.addEventListener("click", () => {
        squares.forEach(square => {
            square.addEventListener("mouseenter", () => {
                square.style.background = "white";
                square.style.borderColor = "transparent";
            })
        })
    })

    const rainbowMode = document.querySelector(".rainbow-mode");
    rainbowMode.addEventListener("mouseenter", () => {
        squares.forEach(square => {
            square.addEventListener("mouseenter", () => {
                // Generate random RGB values
                const red = Math.random() * 40 * 10;
                const green = Math.random() * 40 * 10;
                const blue = Math.random() * 40 * 10;
                square.style.background = `rgb(${red}, ${green}, ${blue})`;
                square.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
            })
        })
    })
});


