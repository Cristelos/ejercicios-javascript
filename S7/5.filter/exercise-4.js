const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const gamers = streamers.filter((gamerYoung) => {
    if(gamerYoung.age < 30){
        return gamerYoung.name;
    }
})

console.log(gamers);