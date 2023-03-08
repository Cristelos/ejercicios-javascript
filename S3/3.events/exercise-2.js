
let form$$ = document.querySelector('input');
form$$.addEventListener('focus', function(event){
    console.log(event.target.value);
});