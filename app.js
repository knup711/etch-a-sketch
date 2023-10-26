const spielfeld = document.querySelector("div");

function createGameField(times) {
    let column;
    let row;
    for (i = 0; i < times; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        spielfeld.append(row);
        for (j = 0; j < times; j++) {
        column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        }
    }
};

function getPainted (event) {
    let painted = document.querySelectorAll(".column");

    for (i = 0; i < painted.length; i++) {
    painted[i].addEventListener ("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
};
};


createGameField(16);
getPainted();

