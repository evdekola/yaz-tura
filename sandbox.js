let coin = Math.round(Math.random());
let output = "none";

switch(coin){
    case 1:
        output = "Yazı";
        break;
    case 0:
        output = "Tura";
        break;
    default:
        break;
}
var code = `${output.toLowerCase()}.png`;

const what = document.querySelector('img');
const para = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', () =>{
  window.location.reload(false);
});

para.innerText = output;
what.setAttribute('src', code);

console.log(output);
