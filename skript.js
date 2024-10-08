//1. Переменные и типы данных:
//Создайте переменные для хранения вашего имени, возраста и города
//проживания. Присвойте им соответствующие значения и определите их тип данных с помощью typeof .
let myName = "Наталья";
console.log (typeof myName);
let myAge = "39";
console.log (typeof myAge);
let myCity = "Москва";
console.log (typeof myCity);

//2.Конкатенация строк:
//Используя переменные с именем и фамилией, создайте строку, которая будет содержать полное имя, разделенное пробелом.
let userName = "Федя";
let surName = "Иванов";
let nameStr = userName + " " + surName;
console.log(nameStr);

//3. Преобразование типов:
//Создайте переменную, содержащую строку с числом, и преобразуйте её в
//число. Определите, является ли это число целым.
let str = "555";
let num = parseFloat(str);
console.log(num);
console.log(typeof num);

//4. Методы строк:
//Создайте строковую переменную с текстом "JavaScript is fun!". Используя
//методы строк, получите подстроку "fun" и сделайте её все буквы заглавными.

let text = "JavaScript is fun!";
let fun = text.slice(14, 17);
let funUp = fun.toUpperCase ();
console.log(funUp);

//5. Шаблонные строки:
//Создайте переменные с названием товара и его ценой. Используйте
//шаблонную строку для вывода строки в формате: "Цена на [товар] составляет [цена] рублей."
let nameProduct1 = "Молоко";
let nameProduct2 = "Яйца";
let nameProduct3 = "Хлеб";
let price1 = 60; 
let price2 = 100;
let price3 = 20;
console.log(`Цена на товар ${nameProduct1} составляет ${price1} рублей.`);
console.log(`Цена на товар ${nameProduct2} составляет ${price2} рублей.`);
console.log(`Цена на товар ${nameProduct3} составляет ${price3} рублей.`);


//6. Работа с числами:
//Создайте переменную, содержащую вещественное число. Используйте метод
//для округления этого числа до ближайшего целого и сохраните результат в другой переменной.
let numFloat = 5.87432;
let numMath = Math.round(5.87432);
console.log(numMath);

//7. Сравнение значений:
//Создайте две переменные с числовыми значениями. Определите, какое из
//чисел больше, и сохраните результат в переменной, содержащей булево значение.
let num1 = 34;
let num2 = 13;
let max = num1>num2;
console.log(max);

//8. Написание литералов:
//Напишите литерал объекта, который будет содержать ваше имя, возраст и любимый цвет.
let obj = {
    myName:"Natalia",
    myAge: 39,
    myColor: "Green",
};
let userNAME = obj.myName;
let age = obj.myAge;
let color = obj.myColor;
console.log(userNAME);
console.log(age);
console.log(color);

//9. Методы чисел:
//Создайте переменную, содержащую число с несколькими знаками после запятой.
// Используя соответствующий метод, округлите это число до двух знаков после запятой.
let number = 2.987653;
console.log(number.toFixed(2));

//10. Преобразование строки в массив
//Создайте строковую переменную с текстом "apple, orange, banana".
//Преобразуйте эту строку в массив, разделив её по запятым.
let strFruits = "apple, orange, banana";
let fruitsArr= "apple, orange, banana".split(", ");
console.log(fruitsArr);


//11. Проверка на NaN :
//Создайте переменную, содержащую результат некорректного математического
//выражения (например, деление строки на число). Используйте метод для проверки, является ли результат NaN .



//12. Многострочный текст:
//Используя шаблонные строки, создайте переменную, содержащую
//многострочный текст, где каждая строка будет новой строкой в исходном коде.
let text1 = "Вставка"
let manyStrText = `Многострочный текст ${text1}:
- Продолжение текста,
- Продолжение текста,
- Продолжение текста,
Конец текста.
 `
 console.log(manyStrText);
 
 //13. Преобразование данных:
 //Создайте переменную с булевым значением true . Преобразуйте её в строку
 //и определите тип данных результата.
 let bool1 = true;
 let bool2 = bool1.toString();
 console.log(typeof bool2);
 
 //14. Использование Symbol :
 //Создайте символ с описанием "id" и используйте его в качестве ключа для
 //свойства объекта. Добавьте ещё одно свойство с обычным строковым ключом.
 let id = Symbol("id");// Создаём символ id с описанием "id" 
 let person = {
  name: "Наталья", // добавляем символ в качестве ключа
  [id]: 888 
};
console.log(person);

 //15. Работа с массивом:
 //Создайте массив с несколькими числами. Используя соответствующий метод,
 //определите количество элементов в массиве и запишите результат в переменную.
let arr = [3,4,5,7];
console.log(arr.length);
let arr2 = arr.length;
alert (arr2);






















 