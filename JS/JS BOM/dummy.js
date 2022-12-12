const dummyElement=document.getElementsByClassName('dummy');
console.log(dummyElement);
for(let i=0; i<dummyElement.length; i++){
    dummyElement[i].innerHTML=`<b> hello dummy div ${i + 1}</b>`;
}

document.getElementById('demo').innerHTML='date:'+Date();

const targetEl=document.getElementById('target');
targetEl.innerHTML='<p> Hello world</p>';

const pTag=document.createElement('p');
pTag.innerHTML='Creat by creat element';
pTag.className='demo';
pTag.id='demoId';
targetEl.appendChild(pTag);


