const sudoku=[
    [5,0,9,0,0,0,4,0,0 ],
    [7,0,8,3,0,4,9,0,0],
    [6,0,1,0,0,0,7,3,0],
    [4,6,2,5,0,0,0,0,0],
    [3,8,5,7,2,0,6,4,9],
    [1,0,7,4,0,8,9,]
]

const tableTarget=document.querySelector('#tableTarget');
const tbody=document.createElement('tbody');

for(let row=0; row<sudoku.length; row++){
    const cols=sudoku(row);
    const tr=document.createElement('tr');
    for (let col=0; col<cols.length; col++){
        const td=document.createElement('td');
        if(cols[col]!==0){
            td.className='default';
            td.innerHTML=cols(col);
        }else{
            td.addEventListener('click', function(){
                chosenTd=e.target;
                console.log(chosenTd)
            });
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
} 
tableTarget.appendChild(tbody);

const validKeys='0123456789';

document.addEventListener('keypress',function(e){
    const key=e.key;
    if(validKeys.includes(key)){
        if(key==0){
            chosenTd.innerHTML='';
        }
        chosenTd.innerHTML=key;
    }

});