(function parentFunct() {
    var display =  document.querySelector('.display');
    var addOne = document.querySelector('.display-plus');
    var minusOne = document.querySelector('.display-minus');
    var displayValue = Number(display.childNodes[0].nodeValue);
    var contain = document.querySelector('.container');

    function plusOne() {
        display.textContent = displayValue++ ;
    }

    function subtractOne() {
        display.textContent = displayValue-- ;
    }

    addOne.addEventListener('click', plusOne);
    minusOne.addEventListener('click', subtractOne);


}())