window.addEventListener('load',createGrid)
let container = document.querySelector('.container')
let containerSize = 600;
let gridSize = 16;
function createGrid(){
    for(i=0;i<gridSize**2;i++){
        let cell = document.createElement('div')
        cell.classList.add('grid')
        cell.style.width = `${(containerSize/gridSize)-2}px`;
        cell.style.height = `${(containerSize/gridSize)-2}px`;
        cell.style.border = '1px solid black'
        container.append(cell)
    }
}
(function newGrid(){
    let input = document.querySelector('#input')
    input.addEventListener('change',function(){
        let newGridSize = input.value
        console.log(newGridSize)
        gridSize = newGridSize
        container.textContent=''
        createGrid(gridSize)
    })
})()

function random(){
    return Math.floor(Math.random()*256)
}

(function changeColor(){
    container.addEventListener('mouseover',function(e){
        if(e.target.classList.contains('container')){
            return;
        }
        e.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`
    })
})()

function reset(){
    let reset = document.querySelector('#reset')
    reset.addEventListener('click',function(){
        container.textContent=''
        gridSize=16
        createGrid(gridSize)
    })
}
reset()