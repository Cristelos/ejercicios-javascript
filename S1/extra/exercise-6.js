const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

//for (let ventas of products) {
  //  if(ventas.sellCount<20){
    //    badProducts.push(products);
    //}else{
      //  goodProducts.push(products);
    //}
//}

for (let i = 0; i < products.length; i++) {
    if(products[i].sellCount > 20){
        goodProducts.push(products[i]);
    }else{
        badProducts.push(products[i]);
    }
    
}

console.log("Bad products: ",badProducts);
console.log("Good products: ",goodProducts);