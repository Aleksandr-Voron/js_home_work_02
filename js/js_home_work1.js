// 1
// const nameUser = prompt('Ваше имя');
// alert(nameUser);

//2
// const oldUser = +prompt('Год рождения');
// const nowYears = 2020;
// alert("Вам" + (oldUser - nowYears) + "лет");

//3
// const borderSquer = +prompt('Сторона квадрата');
// const perimeterSquare = borderSquer * 4;
// alert("Периметр квадрата равен " + perimeterSquare);

//4
// const radiusSq = +prompt('радиус окружности?');
// const numberSquer = 3.14 * radiusSq;
// alert("площадь круга равна " + numberSquer);

//5
// const carВistant = +prompt('растояние между городов?');
// const carSpeed = +prompt('скорость в дороге?');
// const timeRoad = carВistant / carSpeed;
// alert("вам нужно потратить " + timeRoad + 'времени в дороге');

//6
// const exchangeRatesEvro = 0.82;
// const writingDollar = +prompt('ведите суму в доларах');
// const rezultExchange = writingDollar * exchangeRatesEvro;
// alert("ваша сума в эвро " + rezultExchange);

//7
// const countMemory = +prompt("количество Gb на флешке");
// const rezultMb = countMemory * 1024;
// const fileMb = 820;
// const calcUs = rezultMb % fileMb;
// const fleshMb = rezultMb - calcUs;
// alert("доступно файлов " + fleshMb);

//8
// const moneyInPoked = +prompt('сума в кармане?');
// const priceСhocolate = +prompt('стоимость шоколадки?');
// const rezultBuy = moneyInPoked % priceСhocolate;
// const rezultMany = (moneyInPoked - rezultBuy) /  priceСhocolate ;
// alert(
//   "результат покупки" + rezultMany + " остаток в кошелке" + rezultBuy
// );

//8???
// const moneyInPoked = +prompt('сума в кармане?');
// const priceСhocolate = +prompt('стоимость шоколадки?');
// const rezultBuy = moneyInPoked % priceСhocolate;
// const rezultMany = (moneyInPoked / priceСhocolate) - rezultBuy ;
// alert(
//   "результат покупки" + rezultMany + " остаток в кошелке" + rezultBuy
// );

//9
// const numeralUs = +prompt("введите три цифры");
// const treeNumbers = numeralUs % 10;
// const twoNumbers = ((numeralUs % 100) - (numeralUs % 10)) / 10;
// const oneNumbers = ((numeralUs % 1000) - (numeralUs % 100)) / 100;
// alert(treeNumbers + "  " + twoNumbers + "  " + oneNumbers);

//10
// const clientMany = +prompt("put many client");
// const ClientMount = 2;
// const mountBankMoney = (clientMany * 5) / 100 / 12;
// const rezultBankMoney = mountBankMoney * ClientMount;
// alert("rezult with two mounth  " + rezultBankMoney);
