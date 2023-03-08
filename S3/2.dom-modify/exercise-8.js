


let div$$ = document.querySelectorAll('div')[1];

let p$$ = document.createElement('p');
p$$.textContent ='Voy en medio!';

div$$.parentNode.insertBefore(p$$, div$$)