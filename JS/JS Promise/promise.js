
const rawEgg='tuuhi ondog';

// function cookMake(rawEgg){
//     const isForgetToFlip=false;
//     const prom=new Promise(function ( resolve, reject){
//         setTimeout(function(){
//             if(!isForgetToFlip){
//                 resolve('cooked egg');
//             }else{
//                 reject('half burnt egg');
//             }
//         },2000);
//     });
//     return prom;
// }

let result=rawEgg;
cookMake(rawEgg).then(function(res){
    result=res;
    console.log(result);
})
.catch(function(err){
    console.log(err);
});

// function cookMake(){
//     const isForgetToFlip=false;
//     const prom=new Promise( ( resolve, reject)=>{
//         setTimeout(()=>{
//             if(!isForgetToFlip){
//                 resolve('cooked egg');
//             }else{
//                 reject('half burnt egg');
//             }
//         },2000);
//     });
//     return prom;
// }


function getAtEgg(){ //ondog songoj avah
    const eggCount=12;
    const promise=new Promise((resolve, reject)=>{
        if(eggCount>0){
            resolve(true);
        }else{
            reject('run out of egg');
        }
    });
    return promise;
}
 
function pickAnPot(){ //togoo avah
    const isPotInUse=false;
    const promise= new Promise((resolve, reject)=>{
        if(!isPotInUse){
            resolve(true);
        }else{
            reject('pot is in use');
        }
    });
    return promise;
}

function fillWater(){
    const isWaterRunning=true;
    const promise= new Promise((resolve, reject)=>{
        if(isWaterRunning){
            resolve(true);
        }else{
            reject('no water');
        }
    });
    return promise;
}

//pletka asaan
function startStove(){
    const isStoveWorking= true;
    return new Promise((resolve, reject)=>{
        if(isStoveWorking){
            resolve(true);
        }else{
            reject('stove off');
        }
    });
    
}

function boilEggToWater(){
    const timer=10
    return new Promise((resolve, reject)=>{
        if(timer>=10){
        resolve('cooked egg');
    }else{
        reject('timer was too short got raw egg');
    }

    });

}

function cookEgg(){
    let gotEgg=false;
    let gotPot=false;
    let goWater=false;
    let startedStove=false;
    getAtEgg()
    .then((res)=>{
        gotEgg=true;

    })
    .catch((err)=> console.error(err));
}

const cookEgg=getAtEgg()
    .then(()=>{
        console.log('picked an egg');
        pickAnPot();
    })
    .then(()=>{
        console.log('picked an pot');
        fillWater();
    })
    .then(()=>{
        console.log('filled pot');
        startStove();
    })
    .then(()=>{
        console.log()
        boilEggToWater()
    })
    .then(()=>{
        console.log('started stove');
        ();
    })
    .then(()=>{
        console.log('picked an egg');
        pickAnPot();
    })