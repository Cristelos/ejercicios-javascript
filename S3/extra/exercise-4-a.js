const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

countries.forEach(paises => {
    
    const div$$ = document.createElement('div');

    const hcuatro$$ = document.createElement('h4');
    hcuatro$$.textContent = paises.title;

    const img$$ = document.createElement('img');
    img$$.src = paises.imgUrl;
    
    div$$.appendChild(hcuatro$$);
    div$$.appendChild(img$$)
    
    document.body.appendChild(div$$)

});