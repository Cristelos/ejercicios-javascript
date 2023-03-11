async function getCharacters () {
    try {
        const datos = await fetch('https://rickandmortyapi.com/api/character');
        const characters = await datos.json();
        console.log(characters);
    } catch (error) {
        console.log(error);
    }
}

getCharacters();