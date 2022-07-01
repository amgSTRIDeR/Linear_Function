"use strict"

function calcLinear() {
    // Use this formula y1 = ax1 + b.  y2 = ax2 + b.
    let Ymax = document.getElementById("maxWidth").value;
    let Ymin = document.getElementById("minWidth").value;
    let Xmax = document.getElementById("maxVW").value / 100;
    let Xmin = document.getElementById("minVW").value / 100;

    a = ((Ymax - Ymin) / (Xmax - Xmin));
    b = Ymin - (a * Xmin);
}

function showLinear() {
    calcLinear();
    let symbol = '+';
    if (b < 0) {
        symbol = " - ";
        b = Math.abs(b);
    }

    if ((Math.abs(a) != Infinity) && (Math.abs(b) != Infinity) && (a != NaN) && (b != NaN)) {
        document.getElementById("answer").innerHTML = `calc(${a.toFixed(3)}vw ${symbol} ${b.toFixed(2)}px)`;
    } else {
        document.getElementById("answer").innerHTML = "Error";
    }
}


let a = 0;
let b = 0;


