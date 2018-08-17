function getRandom() {
    return Math.ceil(Math.random() * 9);
}

let number = document.querySelector('.number');
let numOne = document.querySelector('.numOne');
let numTwo = document.querySelector('.numTwo');

number.innerHTML = getRandom();
numOne.innerHTML = getRandom();
numTwo.innerHTML = getRandom();


