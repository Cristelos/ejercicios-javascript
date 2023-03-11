const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);

countries.forEach(country => {
    const lista$$ = document.createElement('li');
    lista$$.textContent = country;
    ul$$.appendChild(lista$$);
})