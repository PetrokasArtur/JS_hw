var shaurma1 = {
    name: 'chicken',
    lavaw: 50,
    chicken: 200,
    beef: false,
    cheese: false,
    tomato: 80,
    sous: 150,
    price: 60
}
var shaurma2 = {
    name: 'chicken-chesse',
    lavaw: 50,
    chicken: 200,
    beef: false,
    cheese: 100,
    tomato: 80,
    sous: 150,
    price: 70
}
var shaurma3 = {
    name: 'beff-chicken',
    lavaw: 50,
    chicken: 140,
    beef: 250,
    cheese: 100,
    tomato: 80,
    sous: 150,
    price: 100
}


console.log('шаурма ' +shaurma1.name + ' состовляет ' + (shaurma1.lavaw + shaurma1.chicken + shaurma1.beef + shaurma1.beef + shaurma1.cheese + shaurma1.tomato + shaurma1.sous) + ' калорий')
console.log('шаурма с ' + shaurma2.name +' состовляет ' + (shaurma2.lavaw + shaurma2.chicken + shaurma2.beef + shaurma2.cheese + shaurma2.tomato + shaurma2.sous) + ' калорий')
console.log('шаурма с ' + shaurma3.name + ' состовляет ' + (shaurma3.lavaw + shaurma3.chicken + shaurma3.beef + shaurma3.cheese + shaurma3.tomato + shaurma3.sous) + ' каллорий')
console.log('шаурма с двойной порцией ' + shaurma3.name + ' без курицы состовляет ' + (shaurma3.lavaw + (shaurma3.beef*2) + shaurma3.cheese + shaurma3.tomato + shaurma3.sous) + ' калорий')
console.log('цена за две ' + shaurma2.name + ' состовляет ' + (shaurma2.price*2) + ' грн.')
console.log('Ваш заказ две шаурмы: ' + shaurma1.name + ' и ' + shaurma3.name + '. Общая стоимость ' + (shaurma1.price + shaurma3.price) + ' грн.')