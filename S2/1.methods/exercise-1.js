const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
    if(products[i].includes("Camiseta")){
        console.log("Los productos que son camisetas son:",products[i]);
    }
}
