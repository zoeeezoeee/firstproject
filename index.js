const colors = ['red','blue','purpel','yellow','pink','green'];

const changecolor= function(e){
    console.log(e);
    const h1 = document.querySelector('h1');
    h1.style.color= this.style.backgroundColor;
};
const container = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    //const neveshte= document.creatElement('h3');
   // neveshte.innertext= "funny";
    
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changecolor);

   
}  
document.body.addEventListener('keypress' , function(e){
    console.log(e);
})


