const colors = ['red','blue','purpel','yellow','pink','green'];


const container = document.querySelector('#boxes');
for(let color of colors){
    const box = document.createElement('div');

    box.style.backgroundColor = color;
    //const neveshte= document.creatElement('h3');
   // neveshte.innertext= "funny";
    
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', function(){
       console.log("click me ");

    })
}  



