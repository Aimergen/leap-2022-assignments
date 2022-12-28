const emailTarget=document.querySelector('#email');
const passwordTarget=document.querySelector('#password');
const repasswordTarget=document.querySelector('#repassword'); //id gaarn barij avna

const getFieldValues=()=>{ //object bolgodog F
    return{
        email: emailTarget.value,
        password: passwordTarget.value,
        repassword: repasswordTarget.value,
    };
};

const signupSubmit=()=>{ //butguuleh huselt ilgeeh F
    const values=getFieldValues(); //object bolgoson F-e huvisagchid hiij bn
    fetch('http://localhost:3333/api/signup',{ //haanaas backendee avahaa zaana
        method: 'POST', //huselt ilgeeh helbern
        headers: {  //
            'Content-Type': 'application/json', //contentiin torol, json helbereer
        },
        body: JSON.stringify(values), //
    })
    .then((res)=>res.json()) //tegeed irsen huseltee json bolgon huvirgan
    .then((data)=>{ //irsen huseltiig data-n hiij hadgalna
        alert(data.message); //huseltee medeeleh
    })
    .catch((err)=>{ //irsen huseltiin aldaa garsan ued medeeleh
        alert(err.message);
    });
    

};

const Upper_Letter='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower_letter='abcdefghijklmnopqrstuvwxyz';
const special='@$%!*#?&';
const numbers='0123456789';

const passwordCheck=(password, repassword)=>{ //password shalgah F
    let match=false;

    let constainsUpper=false;
    let containsLower=false;
    let containsDigits=false;
    let containsChar=false;
    let lengthPassed=false;

    match=password===repassword;

    lengthPassed=password.length>=8;

    for(const char of password.split('')){
        if(!constainsUpper) constainsUpper=Upper_Letter.includes(char);
        if(!containsLower) containsLower=lower_letter.includes(char);
        if(!containsDigits) containsDigits=numbers.includes(char);
        if(!containsChar) containsChar=special.includes(char);
    }

    return { match, constainsUpper, containsLower, containsChar, containsDigits, lengthPassed};
}


const upperTarget=document.querySelector('#upper');
const lowerTarget=document.querySelector('#lower');
const numberTarget=document.querySelector('#number');
const charTarget=document.querySelector('#char');
const lengthTarget=document.querySelector('#length');

passwordTarget.addEventListener('input', ()=>{
    const {password,repassword}=getFieldValues();
    const passwordInfo=passwordCheck(password,repassword);
    console.log(passwordInfo);
    if(passwordInfo.constainsUpper){
        upperTarget.checked=true;
    }else{
        upperTarget.checked=false;
    }
    if(passwordInfo.containsLower){
        lowerTarget.checked=true;
    }else{
        lowerTarget.checked=false;
    }
    if(passwordInfo.containsDigits){
        numberTarget.checked=true;
    }else{
        numberTarget.checked=false;
    }
    if(passwordInfo.containsChar){
        charTarget.checked=true;
    }else{
        charTarget.checked=false;
    }
    if(passwordInfo.lengthPassed){
        lengthTarget.checked=true;
    }else{
        lengthTarget.checked=false;
    }

});

//hervee buh nohtsol bielj bval button idevhtei
// herve nohtsoluudes negn taarku bol button idevhgui bolgoh
const toggleBtn=()=>{
    const btn=document.querySelector('btn');
    let disabled=btn.disabled;
    btn.disabled=!disabled;
    const all=passwordCheck(password, repassword);

    if(all.constainsUpper){
        upperTarget.checked=true;
        
    }else{
        upperTarget.checked=false;
        disabled;
    }
};



const submitButton=document.querySelector('button');

submitButton.addEventListener('click', signupSubmit);