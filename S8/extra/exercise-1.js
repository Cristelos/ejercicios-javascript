
const main$$ = document.querySelector('main');

const get = async () => {
    try {
        const response = await fetch('https://starwars-server.vercel.app/characters');
        const responseJson = await response.json();
        // console.log(responseJson);
        return responseJson.data.characters;



    } catch (error) {
        console.log('Esto es un error', error);
    }
}
let div$$ = document. createElement('div');
div$$.className = 'personajes';
main$$.appendChild(div$$);

const pintardatos = ((content) => {
    let myDiv$$ = document.querySelector('.personajes');
    myDiv$$.innerHTML = '';
    for (const starwars of content) {
        let divStar$$ = document.createElement('div');
        divStar$$.className = 'personaje';
        // divStar$$.style.display = 'flex';

        let img$$ = document.createElement('img');
        img$$.setAttribute('src', starwars.image);
        img$$.setAttribute('alt', starwars.name);

        let h4$$ = document.createElement('h4');
        h4$$.textContent = starwars.name;

        divStar$$.appendChild(h4$$);
        divStar$$.appendChild(img$$);

        div$$.appendChild(divStar$$);

    } 
})


get().then(data => pintardatos(data))