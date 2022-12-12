let score=0; //onoo zaah

const scoreTarget= document.querySelector('#scoreTarget'); //onoo haruulah span tag
function updateScore(point){ //onoog hedeer nemeh ve 
    score+=point;
    scoreTarget.innerHTML=score; //shineer haruulah
}

const parent=document.querySelector('ul');

function getRandomNumber(min , max){
    return Math.floor(Math.random()*(max-min))+min;

}
function getRandomColor() {
    //rgb
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red,green,blue];
  }

const tileCount= 9;  //heden dorvoljin garj ireh ve

function getDifferntColor(colors){ //
    const random=getRandomNumber(0,2);
    const newColors=[...colors];
    let color=colors[random];
    if(color<126){
        color-=100;
    }
    else{
        color+=100;
    }
    newColors[random]=color;
    return `rgb(${newColors[0]}, ${newColors[1]},${newColors[2]})`
}



function redRaw(){
    parent.innerHTML="";
    const colors=getRandomColor(); 

    const randomIndex=getRandomNumber(0,8);

// console.log(colors);

for(let i=0; i<tileCount; i++){
    const li= document.createElement('li');
    const isNormal=i !==randomIndex;
    if(isNormal){
        li.style.backgroundColor=`rgb(${colors[0]}, ${colors[1]},${colors[2]})`;
    }else{
        li.style.backgroundColor=getDifferntColor(colors);
    }

    li.addEventListener('click',function(){
        if(!isNormal){
            updateScore(1);
            redRaw();
        }
        else{
            updateScore(-2);
        }
    })
    parent.appendChild(li);
}
}



redRaw();


