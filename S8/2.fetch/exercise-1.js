const losDatos = async () => {

    try {
        const datos = await fetch(`https://api.agify.io?name=${input$$.value}`);
        const devuelve = await datos.json();
        console.log(devuelve);
        
    } catch (error) {
        console.log(error);
    }
};

console.log(losDatos);