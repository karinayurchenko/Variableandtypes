const dressPrice = 15.678;
const hatPrice = 123.965;
const shoesPrice = 90.2345;

let maxPrice = Math.max(dressPrice,hatPrice,shoesPrice);//->максимальное число
console.log('max price:' + maxPrice);

let minPrice = Math.min(dressPrice,hatPrice,shoesPrice);//->минимальное число
console.log('min price:' + minPrice);

let prices = [dressPrice,hatPrice,shoesPrice];
const sumPrice = prices.reduce(function (result, num) {
    return result + num;
}, 0);
console.log ('total price:' +sumPrice);//-> стоимость всех товаров

const sumDiscont = Math.floor (dressPrice) + Math.floor (hatPrice) + Math.floor (shoesPrice); //-> целая часть стоимости всех товаров
console.log ('discount:' +sumDiscont);

const roundedAmount = Math.round (dressPrice) + Math.round (hatPrice) + Math.round (shoesPrice); 
console.log ('rounded amount:'+ roundedAmount);

const ceiledAmount = Math.ceil(sumPrice/100)*100;
console.log('amount ceiled to hundreds:' + ceiledAmount);//->сумма товаров округленная до сотен


const even = sumDiscont => !(sumDiscont % 2);
console.info(even(sumDiscont));//-> стоимость всех товаров округленная в меньшую сторону(пар.или не пар)


(function money (dressPrice,hatPrice,shoesPrice) {
    const payment = 500;
    let leftmoney =payment-sumPrice;
    console.log('left money from 500 uah: ' + leftmoney);
})();//->сумма сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн


 const average = sumPrice/ prices.length;
console. log('average: ' + average.toFixed(2) ); // ->среднее значение цен, округленное до второго знака после запятой

const discount = Math.random().toFixed(2);
const amountOfDiscount = (discount*100).toFixed(0);
const generalPrice = sumPrice.toFixed(2);
const discountPrice = (generalPrice * discount).toFixed(2);      //-> цена со скидкой
const priceWithSale = (generalPrice - generalPrice ).toFixed(2);    //-> разница цены со скидкой
const costPrice = (generalPrice/2).toFixed(2);             //-> себестоимость
const lostProfit = (costPrice - discountPrice).toFixed(2);
console.log('Amount of discount : ' + amountOfDiscount + '%');
console.log('Price with discount: ' + discountPrice + ' uah');
console.log('Lost profit : ' + costPrice + ' - ' + discountPrice  + ' = ' + lostProfit);
  
