const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  
  let buttom$$ = document.querySelector('button');
  
  butyom$$.addEventListener('click', function(){
    console.log(input$$.value);
  
    const gamers = streamers.filter((leyenda) => {
      if(leyenda.name.toLowerCase().includes(input$$.value.toLowerCase())){
          return leyenda;
        }
        return false;
      }
    )
    console.log(gamers);
  });

// const boton$$ = document.querySelector('button');
// const filtro = () => {
//   const input$$ = document.querySelector('input');
//   const filtrado = streamers.filter(gamers => gamers.name.toLowerCase().includes(input$$,value));
//   console.log(filtrado);
// }

// boton$$.addEventListener('click',filtro);

