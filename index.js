const colors = ['red','blue','red','yellow','pink','green'];


const container = document.querySelector('#boxes');
for(let color of colors){
    const box = document.createElement('div');

    box.style.backgroundColor = color;
    
    box.classList.add('box');
    container.appendChild(box);
}  