const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
let peliculaPequeña = [ ];
let peliculaMediana = [ ];
let peliculaGrande = [ ];
for (let duracion of movies) {
   if (duracion.durationInMinutes < 100){
       peliculaPequeña.push(duracion);
    } else if(duracion.durationInMinutes <= 100  || duracion.durationInMinutes< 200){
        peliculaMediana.push(duracion);
    }else{
        peliculaGrande.push(duracion)
    }
}


console.log("Películas pequeñas: ",peliculaPequeña);
console.log("Películas medianas: ",peliculaMediana);
console.log("Películas grandes: ",peliculaGrande);
