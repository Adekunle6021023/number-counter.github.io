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

    if (displayValue == 0) {
        document.body.style.color = '#ffffff';
    }else {
        document.body.style.color = '#d3092b';
    }

}())