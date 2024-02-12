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

    // Create 16x16 default grid of squares.
    for (let i = 1; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('square');
        container.appendChild(row);
        for (let j = 1; j < 16; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }

    // Very useful function to setup when to initiate ability to sketch or not.
    sketch();

    // Create grid based on user input.
    const grid = document.querySelector(".grid-size");
    let gridSize = 16;
    grid.addEventListener("click", () => {
        container.innerHTML = "";
        let userInput = prompt("Please enter the size of the grid: (Max 100)");
        gridSize = parseInt(userInput);

        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert("Invalid input, Defaulting to 16x16 grid.");
            gridSize = 16;
        }

        // Create 16x16 default grid of squares
        for (let i = 1; i < gridSize; i++) {
            const squares = document.createElement('div');
            squares.classList.add('square');
            container.appendChild(squares);
            for (let j = 1; j < gridSize; j++) {
                let column = document.createElement('div');
                column.classList.add('column');
                squares.appendChild(column);
            }
        }
        sketch();
    })

    function sketch() {

        // Add hover effect
        const column = document.querySelectorAll('.column');
        let coloringActive = false;

        const colorMode = document.querySelector(".color-mode");
        colorMode.addEventListener("click", () => {
            column.forEach(square => {
                // Clicking any square to start drawing.
                square.addEventListener("mouseenter", () => {
                    // Change color on hover and border to black as well
                    square.style.backgroundColor = 'black';
                    square.style.borderColor = 'black';
                });
            });
        })
        // colorMode.addEventListener("click", () => {
        //     column.forEach(square => {
        //         square.addEventListener("mousedown", () => {
        //             coloringActive = true;
        //         })
        //         square.addEventListener("mouseup", () => {
        //             coloringActive = false;
        //         })
        //         column.forEach(square => {
        //             square.addEventListener("mouseenter", () => {
        //                 if (coloringActive) {
        //                     square.style.backgroundColor = 'black';
        //                     square.style.borderColor = 'black';
        //                 }
        //             })
        //         })
        //     })
        // })

        const rainbowMode = document.querySelector(".rainbow-mode");
        rainbowMode.addEventListener("click", () => {
            column.forEach(square => {
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
        // rainbowMode.addEventListener("click", () => {
        //     column.forEach(square => {
        //         square.addEventListener("mousedown", () => {
        //             coloringActive = true;
        //         })
        //         square.addEventListener("mouseup", () => {
        //             coloringActive = false;
        //         })
        //         column.forEach(square => {
        //             square.addEventListener("mouseenter", () => {
        //                 if(coloringActive) {
        //                 // Generate random RGB values
        //                 const red = Math.random() * 40 * 10;
        //                 const green = Math.random() * 40 * 10;
        //                 const blue = Math.random() * 40 * 10;
        //                 square.style.background = `rgb(${red}, ${green}, ${blue})`;
        //                 square.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
        //                 }
        //             })
        //         })
        //     })
        // })

        const eraser = document.querySelector(".eraser");
        eraser.addEventListener("click", () => {
            column.forEach(square => {
                square.addEventListener("mouseenter", () => {
                    square.style.background = "white";
                    square.style.borderColor = "white";
                })
            })
        })
        // eraser.addEventListener("click", () => {
        //     column.forEach(square => {
        //         square.addEventListener("mousedown", () => {
        //             coloringActive = true;
        //         })
        //         square.addEventListener("mouseup", () => {
        //             coloringActive = false;
        //         })
        //         column.forEach(square => {
        //             square.addEventListener("mouseenter", () => {
        //                 if (coloringActive) {
        //                     square.style.background = "white";
        //                     square.style.borderColor = "white";
        //                 }
        //             })
        //         })
        //     })
        // })

        const clear = document.querySelector(".clear");
        clear.addEventListener("click", () => {
            column.forEach(square => {
                square.style.background = "white";
                square.style.borderColor = "white";
            })
        });
        clear.addEventListener("click", () => {
            column.forEach(square => {
                square.addEventListener("mouseenter", () => {
                    // Since prev button was selected, clear button onclick
                    // was continuing the same color after everything was cleared
                    // hence make everything white on clear.
                    square.style.backgroundColor = 'white';
                    square.style.borderColor = 'white';
                    column.style.borderColor = 'white';
                });
            });
        })
    }
});


