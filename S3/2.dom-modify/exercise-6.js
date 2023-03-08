const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let ul$$ = document.createElement('ul');


for(let i = 0; i < apps.length; i++){
    let li$$ = document.createElement('li');
    ul$$.appendChild(li$$);
    li$$.textContent  = apps[i];
}

document.body.appendChild(ul$$);