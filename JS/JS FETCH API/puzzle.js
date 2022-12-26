
const winPuzzle = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
];
const puzzle = [
    [4, 5, 6],
    [7, 0, 8],
    [3, 2, 1],
];

let zeroX=1, zeroY=1;

const swapedTiles=(clickedX, clickedY)=>{
    const temp=Number(puzzle[clickedX][clickedY]);
        puzzle[clickedX][clickedY]=0;
        puzzle[zeroX][zeroY]=temp;
        zeroX=clickedX;
        zeroY=clickedY;
}

const checkWin=()=>{
    let index=1;
    for(let puzzleRow of puzzle){
        for(let puzzleCol of puzzleRow){
            if(puzzleCol===index){
                index++;
            }else{
                break;
            }
        }
    }
}

const createTile = (val, x,y) => {
    const tileNode = document.createElement("div");
    tileNode.classList.add("tile");
    tileNode.setAttribute('x',x);
    tileNode.setAttribute('y',y)
    tileNode.innerHTML = val;

    const tileImg=document.createElement('img');
    tileImg.src=``
    tileNode.addEventListener('click',(e)=>{
        const clickedX=Number(e.target.getAttribute('x'));
        const clickedY=Number(e.target.getAttribute('y'));
        const ydiff=Math.abs(clickedX-zeroY);
        const xdiff=Math.abs(clickedY-zeroX);

        if(ydiff+xdiff===1){

        }

        
        drawTiles();
    });
    return tileNode;
};

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const drawTiles=()=>{
    wrapper.innerHTML="";
    let i=0;
    for(let rowItems of puzzle){
        for(let colItems of rowItems){
            const tile=createTile(colItems);
            wrapper.appendChild();
        }
    }
    
}