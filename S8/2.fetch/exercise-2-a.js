const btn$$ = document.querySelector('button')
const input$$ = document.querySelector('input')

const losDatos = async () => {

    try {
        const datos = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
        const devuelve = await datos.json();
        console.log(devuelve);
        
    } catch (error) {
        console.log(error);
    }
};

btn$$.addEventListener('click',losDatos);
