
/*1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй. 
3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.*/
        let r=Math.floor(Math.random()*100)+1;
        let g=window.prompt(`ta 100 dotor too random${r}`);
        
        while(Number(r)!==Number(g)){
            if(Number(r)===Number(g)){
                break;
            }
                if(r>g){
                    alert('baga ');
                } 
                else{
                    alert('ikh ');
                }
            g=Number(prompt(`ta zuv too oruulna uu? random${r}`))
        }
        alert('zuv taalaa');
