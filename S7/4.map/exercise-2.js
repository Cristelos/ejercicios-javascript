const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let lista = users.map((nombres) => {
    if (nombres.name[0].includes("A")){
        return nombres.name = "Anacleto";
    }
   return nombres.name;
});

console.log(lista);