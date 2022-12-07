// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart=['Milk', 'Coffee', 'Tea', 'Honey'];
        shoppingCart.splice(0 ,0 ,'Meat');
        console.log(shoppingCart);

        shoppingCart.push('Sugar');
        console.log(shoppingCart);

        shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
        console.log(shoppingCart);

       
        console.log(shoppingCart.join('-').replace('Tea','Green Tea').split('-'));