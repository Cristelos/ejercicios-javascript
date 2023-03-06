const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let index = 0; index < foodSchedule.length; index++) {
  const fruta = foodSchedule[index];
  if (!fruta.isVegan) {
    fruta.name = fruits[index];
    fruta.isVegan = true;
  }
}
console.log(foodSchedule);
