const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]')
const ul$$ = document.createElement('ul');

cars.forEach(coche => {
    const li$$ = document.createElement('li');
    li$$.textContent = coche;
    ul$$.appendChild(li$$);
});

div$$.appendChild(ul$$);
