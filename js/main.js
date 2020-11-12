let counter = document.querySelector("#counterValue");
let counterValue = 0;
let iterator = document.querySelector("#digit")
let addButton = document.querySelector("#addition")
let subtractButton =document.querySelector("#subtraction")

counter.innerText = counterValue;
iterator.value = 1;

function isNegative (number) {
    if (number < 0) {
        counter.style.color = "red"
    } else {
        counter.style.color = "black"
    }
}

function addition () {
    counterValue = counterValue + parseInt(iterator.value);
    isNegative(counterValue)
    counter.innerText = "";
    counter.innerText = counterValue;
}

function subtraction () {
    counterValue = counterValue - parseInt(iterator.value);
    isNegative(counterValue)
    counter.innerText = "";
    counter.innerText = counterValue;
}

addButton.addEventListener("click", function () {
    addition ();
})

subtractButton.addEventListener("click", function () {
    subtraction ();
})