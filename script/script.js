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
    document.getElementById("answer").innerHTML = `${a.toFixed(3)}vw + ${b.toFixed()}px`;
}


let a = 0;
let b = 0;


