const container=document.querySelector('#container')
const button=document.querySelector('button')
let numberOfBoxes;
let flexPercentage;
let color;
button.addEventListener('click',()=>{
    numberOfBoxes=prompt("How many squares do you want on each side?")
    if (numberOfBoxes===null){
        alert("No input")
    }
    else if(numberOfBoxes<1){
        alert("Cannot have negative or no squares")
    }
    else{
        const gridBoxes=document.querySelectorAll('.gridBox');
        gridBoxes.forEach((gridBox)=>{
            container.removeChild(gridBox);
        })
        flexPercentage=100/numberOfBoxes;
        makeBoxes();
    }
})
function makeBoxes(){
    for(let i=0;i<numberOfBoxes*numberOfBoxes;i++){
        const gridBox=document.createElement('div')
        gridBox.classList.add('gridBox')
        gridBox.style.width='100px';
        gridBox.style.border=`2px solid black`;
        gridBox.style.flex=`0 0 calc(${flexPercentage}% - 4px)`;
        container.appendChild(gridBox);

    }
    const gridBoxes=document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox)=>{
        gridBox.addEventListener('mouseenter',()=>{
            gridBox.style.backgroundColor=getRandomColor();
        });
    });
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  }
