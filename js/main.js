const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const backGroundStyle = getComputedStyle(document.body);
const backGroundStyleColor = backGroundStyle.backgroundColor;

console.log(backGroundStyleColor);
for (let p of ps){
    p.style.backgroundColor = backGroundStyleColor;
}