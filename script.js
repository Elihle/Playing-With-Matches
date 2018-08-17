// function getRandom() {
//     return Math.ceil(Math.random() * 9);
// }

// function showNumber(number){
//     let number = document.querySelector('.number');
//     for (let i = 0; i < number.length; i++) {
//           number = number[i];
//         }
// }
//     number.innerHTML = getRandom();


    function getRandom() {
        return Math.ceil(Math.random() * 9);
    }
    
    // let number = document.querySelector('.number');
    // let numOne = document.querySelector('.numOne');
    // let numTwo = document.querySelector('.numTwo');
    // let numThree = document.querySelector('.numThree');

    var elems  = document.querySelectorAll('.number') // = [number, numOne, numTwo];

    for (let index = 0; index < elems.length; index++) {
        const number = elems[index];
        number.innerHTML = getRandom();   
    }

    // number.innerHTML = getRandom(); 
    // numOne.innerHTML = getRandom();
    // numTwo.innerHTML = getRandom();
    
