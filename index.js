const container=document.querySelector('#container')
for(let i=0;i<256;i++){
    const gridBox=document.createElement('div')
    gridBox.textContent="bruh";
    gridBox.classList.add('gridBox')
    gridBox.style.width='100px';
    gridBox.style.backgroundColor='blue';
    gridBox.style.border='2px solid black';
    container.appendChild(gridBox);

}
const gridBoxes=document.querySelectorAll('.gridBox');
gridBoxes.forEach((gridBox)=>{
    gridBox.addEventListener('mouseenter',()=>{
        gridBox.style.backgroundColor='black';
    });
});
