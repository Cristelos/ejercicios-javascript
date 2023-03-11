const breakingBad = async (page) => {
    try {
        const response = await fetch('https://breakingbadapi.com/api/characters');
        const responseJson = await response.json();
        pintarDatos(responseJson);



    } catch (error) {
        console.log(error);
    }
}
breakingBad()