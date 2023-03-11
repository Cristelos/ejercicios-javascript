const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

function todosLosPaises(){
  countries.forEach((paises,index) => {
      
      const div$$ = document.createElement('div');
  
      const hcuatro$$ = document.createElement('h4');
      hcuatro$$.textContent = paises.title;
  
      const img$$ = document.createElement('img');
      img$$.src = paises.imgUrl;

      const bntEliminar$$ = document.createElement('button');
      bntEliminar$$.textContent = 'X';
      
      bntEliminar$$.addEventListener('click', () => {
        countries.splice(index,1);
        document.body.removeChild(div$$);
      });
      
      div$$.appendChild(hcuatro$$);
      div$$.appendChild(img$$)
      div$$.appendChild(bntEliminar$$)
      
      document.body.appendChild(div$$)
  
  });
}

todosLosPaises();

const bnt$$ = document.querySelector('button');

bnt$$.addEventListener('click', () => {
    countries.pop();
    const divEliminar$$ = document.querySelector('div:last-child');
    document.body.removeChild(divEliminar$$);
  });