const btn$$ = document.querySelector('button')
const input$$ = document.querySelector('input')

const div$$ = document.createElement('div')
document.body.appendChild(div$$);

const losDatos = async () => {

    try {
        const datos = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
        const devuelve = await datos.json();
        textop(devuelve);

    } catch (error) {
        console.log(error);
    }
};

const textop = (devuelve) =>{
    const p$$ = document.createElement('p');
    let texto = `El nombre ${devuelve.name} tiene `;
    for (const country of devuelve.country) {
        const porcentajes = (country.probability * 100).toFixed(2);
        texto += `un ${porcentajes}% de ser de ${country.country_id}. `;
    }
    p$$.textContent = texto;
    div$$.appendChild(p$$);
    return texto;
}



btn$$.addEventListener('click', () => {
    div$$.innerHTML = '';
    losDatos();
});

