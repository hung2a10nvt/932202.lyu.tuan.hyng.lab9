function dis(val) {
    document.getElementById("result").value += val;
}

function myFunction(event) {
    const validKeys = "0123456789+-*/";
    if (validKeys.includes(event.key)) {
        document.getElementById("result").value += event.key;
    }
}

// Calculation
document.getElementById("calculator").onkeyup = function (event) {
    if (event.key === "Enter") {
        solve();
    }
};

function solve() {
    let x = document.getElementById("result").value;
    let y;
    try {
        y = eval(x);
    } catch (error) {
        y = "Error";
    }
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";
}

function undo() {
    let curValue = document.getElementById("result").value;
    document.getElementById("result").value = curValue.slice(0, -1);
}
