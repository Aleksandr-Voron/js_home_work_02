//1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// const questionUser = prompt("how old with you");
// if (questionUser < 3 && questionUser >= 0) {
//   alert("children");
// } else if (questionUser < 19 && questionUser > 11) {
//   alert("teenager");
// } else if (questionUser < 61 && questionUser > 17) {
//   alert("man");
// } else {
//   alert("old man");
// }

//2
//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// const figureUser = +prompt("pleas writing a number 0 or 9");
// switch (figureUser) {
//   case 1:
//     alert("!");
//     break;
//   case 2:
//     alert("@");
//     break;
//   case 3:
//     alert("#");
//     break;
//   case 4:
//     alert("$");
//     break;
//   case 5:
//     alert("%");
//     break;
//   case 6:
//     alert("^");
//     break;
//   case 7:
//     alert("&");
//     break;
//   case 8:
//     alert("*");
//     break;
//   case 9:
//     alert("(");
//     break;
//   case 0:
//     alert(")");
//     break;
//   default:
//     alert("Pleas writing a number!");
// }


//3
//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// const threeNumberUser = prompt("Pleas writing three figure");
// const treeNumbers = threeNumberUser % 10;
// const twoNumbers = ((threeNumberUser % 100) - (threeNumberUser % 10)) / 10;
// const oneNumbers = ((threeNumberUser % 1000) - (threeNumberUser % 100)) / 100;
// if (oneNumbers == twoNumbers || oneNumbers == treeNumbers) {
//   alert("We have a number with the same digits");
// } else if (twoNumbers == treeNumbers) {
//   alert("We have a number with the same digits.......");
// } else {
//   alert("just a number!");
// }


//4
//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const oldYears = +prompt("pleas writiing old year");
// if (oldYears % 400 === 0) {
//   alert("hide year");
// } else if (oldYears % 4 === 0 && oldYears % 100 !== 0) {
//   alert("hide-year");
// } else {
//   alert("just year ");
// }

//5
//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const oldYears = prompt("five number pleas!");
// const lastNumbers = oldYears % 10;
// const SecondLastNumbers = ((oldYears % 100) - (oldYears % 10)) / 10;
// const FirsthNumbers = ((oldYears % 100000) -(oldYears % 10000)) /10000 ;
// const SecondNumbers = ((oldYears % 10000) -(oldYears % 1000)) /1000 ;
//  if (lastNumbers === FirsthNumbers && SecondLastNumbers === SecondNumbers) {
//  	alert('This is palindrom numbers');
//  }
// else{
// alert('Just numbers');
// }

//6
//Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// const CashDolarUser = prompt('Pleas writing quantity USD');
// const UserExchangValue = prompt('EUR, UAN, AZN');
// if(UserExchangValue == 'EUR' || UserExchangValue == 'Eur' || UserExchangValue == 'eur' ){
// 	const ResultExchangEur = CashDolarUser * 0.82;
// 	alert(ResultExchangEur + ' ' + 'EUR');
// }
// else if( UserExchangValue == 'UAN' || UserExchangValue == 'Uan' || UserExchangValue == 'uan' ){
// 	const ResultExchangUan = CashDolarUser * 27.43;
// 	alert(ResultExchangUan + ' ' + 'UAN');
// }
// else if( UserExchangValue == 'AZN' || UserExchangValue == 'Azn' || UserExchangValue == 'azn' ){
// 	const ResultExchangAzn = CashDolarUser * 1.7;
// 	alert(ResultExchangUan + ' ' + 'AZN');
// }
// else{
// 	alert('pleas writing a right exchang');
// }

//7 ???Match.floor
//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// const UserBuy = prompt('Your quantity dollars?');
// if (UserBuy >= 200 && UserBuy < 300) {
// 	const RezultBuyFirsth = UserBuy / 100 * 3;
// 	alert( 'your sales' + ' ' + RezultBuyFirsth );
// }
// else if (UserBuy => 300 && UserBuy < 500) {
// 	const RezultBuySecond = UserBuy / 100 * 5;
// 	alert( 'your sales' + ' ' + RezultBuySecond );
// }
// else if (UserBuy >= 500) {
// 	const RezultBuyThree = UserBuy / 100 * 7;
// 	alert( 'your sales' + ' ' + RezultBuyThree );
// }
// else{
// 	alert('sorry maybe next time');
// }

//8
//Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.
// const UserSquareLength = prompt('length of square');
// const UserSquarePerimetr = prompt('perimetr of square');
// const RezSquareDiagonal = UserSquareLength / 3.14;
// const RezSquarePerimetr = UserSquarePerimetr / 4;
// if(RezSquareDiagonal >  RezSquarePerimetr){
// 	alert('Yes you can!')
// }
// else{
// 	alert('No-no!')
// }

//9
//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
// За каждый правильный ответ начисляется 2 балла. 
//После вопросов выведите пользователю количество набранных баллов.
// let ratingUser = 0;
// const QuestionUserFirsth = +prompt('How old are you?(31, 18, 45)');
// if(QuestionUserFirsth == 31){
// 	ratingUser = ratingUser + 2;
// }
// else{
//  alert('You shure?');
// }
// const QuestionUserSecond = prompt('Do you live in Kiev? (Yes,No,Maybe)');
// if(QuestionUserSecond == 'Yes' || QuestionUserSecond == 'yes'){
// 	ratingUser = ratingUser + 2;
// }
// else{
//  alert('You shure?');
// }
// const QuestionUserThird = prompt('Do you now js? (Yes,No,Maybe)');	
// if (QuestionUserThird == 'Yes' || QuestionUserThird == 'yes') {
// 	ratingUser = ratingUser + 2;
// }
// console.log(ratingUser);


