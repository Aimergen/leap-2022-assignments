const todoTarget=document.querySelector('#todoTarget');
const testTarget=document.querySelector('#testTarget');
const inputTarget=document.querySelector('#inputTarget');

inputTarget.addEventListener('change', function(e){
    testTarget.innerHTML=e.target.value;
    
});

inputTarget.addEventListener('input', function(e){
    if(e.key==='Enter'){
        testTarget.innerHTML=e.target.value;
    }    
});

const firstli=todoTarget.querySelector('li')[0];
console.log(firstli);

// parentNode.removeChild(childNode);
// firstli.parentNode.removeChild(firstli);

function creatCB(){
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.addEventListener('')
}

inputTarget.addEventListener('keypress',function(){
    if(e.key==='Enter'){

    }
});

const firsrCB= document.querySelector('input[type="checkbox"]')[0];

firsrCB.addEventListener('click', function(e){
    console.log(e.target.checked);
});

//   attribute nemeh
btn.setAttribute("disabled", "disabled"); // setAttribute params: ni ("attributeName","attributeValue")
setTimeout(function () {
  //   attributiin utgiig avahdaa getAttribute("attributeName")
  if (btn.getAttribute("disabled") === "disabled")
    btn.removeAttribute("disabled"); // removeAttribute("attributeName")
}, 1000);

