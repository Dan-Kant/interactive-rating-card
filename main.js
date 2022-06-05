let numbers = document.querySelectorAll('.numbers');
let p = document.querySelector('.selection-statement');

numbers.forEach((number) => {
    number.addEventListener('click', function() {
        number.style.backgroundColor = 'hsl(25, 97%, 53%)';
        number.style.color = 'hsl(0, 0%, 100%)';

        if (number.style.backgroundColor == 'hsl(25, 97%, 53%)') {
            p.innerHTML = `You selected 5 out of 5`;
        };
    });
});

let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let THANK_YOU_CARD = document.querySelector('.thank-you-card');
    THANK_YOU_CARD.style.zIndex = '2';
});