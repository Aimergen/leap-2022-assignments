// 1. Банканд хүмүүс оочирлож байв. Хаах цаг дөхиж оочирт байгаа эхний
// 10 хүнийг аваад хаахаар болов. Гэтэл хаанаас ч юм 2 эгч (эгч1, эгч2) 
//Гончигсумлай - д оочир захьсан байсан гэж дайрж орж ирээд зогсчихлоо. 
// 2. Банкнаас амжиж үйлчилгээ авах хүмүүсийн array - ийг 10 хүнтэй array болгоорой.
// queueLine = [ "Бат", "Дорж", "Пунцаг", "Готов", "Баяраа", "Болд", 
//"Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар", "Сүхээ" ]

let queueLine = [ "Бат", "Дорж", "Пунцаг", "Готов", 
        "Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", 
        "Нэргүй", "Бальбийгомбо", "Баатар", "Сүхээ" ];
        // console.log(queueLine);
        function bank (egch1, egch2){
            const index = queueLine.indexOf('Гончигсумлай');
            queueLine.splice(index+1,0,egch1,egch2);
            queueLine.splice(10,queueLine.length-10)
            return queueLine;
        }
        console.log(bank('dulmaa','matraa'));