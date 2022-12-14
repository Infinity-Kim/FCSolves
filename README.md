# FCSolves

> Для решения задач используется JavaScript
 
    Вкладка обсуждения открыта, буду рад вашим комментариям :)

P.S. Необходимо добавить авто - тесты
## Оглавление
1. [Функция numeralTransition](#Задание-1) - [решение](solves/numeralTransition.js)
2. [Функция footballPlayersCount](#Задание-2) - [решение](solves/footballPlayersCount.js)
3. [Функция convertTemperature](#Задание-3) - [решение](solves/convertTemperature.js)
4. [Функция countColleagues](#Задание-4) - [решение](solves/countColleagues.js)
5. [Функция convertToCamelCase](#Задание-5) - [решение](solves/convertToCamelCase.js)
6. [Функция palindromeCheck](#Задание-6) - [решение](solves/palindromeCheck.js)
7. [Функция findFunnyDigit](#Задание-7) - [решение](solves/findFunnyDigit.js)
8. [Функция atmDistance](#Задание-8) - [решение](solves/atmDistance.js)
9. [Функция findPartyBreaker](#Задание-9) - [решение](solves/findPartyBreaker.js)
10. [Функция sortFeedbacks](#Задание-10) - [решение](solves/sortFeedbacks.js)
11. [Функция findSimpleNumbers](#Задание-11) - [решение](solves/findSimpleNumbers.js)
12. [Функция barMeetings](#Задание-12) - [решение](solves/barMeetings.js)
13. [Функция humanCalculator](#Задание-13) - [решение](solves/humanCalculator.js)
14. [Функция getFinalDecision](#Задание-14) - [решение](solves/getFinalDecision.js)
15. [Функция waitingWalk](#Задание-15) - [решение](solves/waitingWalk.js)

## Задание 1

```javascript
/* 
    В требованиях ЦБ изменили нумерацию, теперь элементы требований нумеруются не арабскими числами, а римскими.
    Необходимо написать функцию, которая будет вычислять римское число по арабскому.

    Напомним значения:
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1000

    Пример:
    numberTransition(1021); // вернет 'MXXI'
*/
```
## Задание 2

```javascript
/*
    На тимбилдинге коллег разделили на 2 команды для игры в футбол. 

    Две команды, названные «A» и «B», состоят из 11 игроков в каждой (игроки пронумерованы от 1 до 11).
    Любой игрок может быть удален с поля, получив красную карточку.
    Игрок также может получить желтую карточку-предупреждение.
    А вот две желтые карточки - это удаление с поля (в этом случае красная карточка не нужна).

    Карточка — это строка с буквой команды («A» или «B»), номером игрока и цветом карты («Y» или «R»).
    Например, карточка «B7Y» означает, что игрок № 7 из команды B получил желтую карточку (все буквы в верхнем регистре).

    Задача: по списку карточек (может быть пустым) вернуть количество оставшихся игроков в каждой команде в конце игры.
    Результат верните в виде массива из 2 целых чисел, сначала команда «А»).

    Минимальное количество игроков в команде - 7.
    Если их стало меньше, то вы должны остановить расчет.

    Пример:
    footballPlayersCount(["A4Y", "A4Y"]); // вернет [10,11]
*/
```

## Задание 3

```javascript
/*
    В офисе международного банка решили внедрить “умный офис”.
    Система получает на вход температуру в определенной шкале, а также ту шкалу,
    в которой нужно показать температуру на экране.
    Напишите конвертер температурных шкал.

    Справочник:
    "C"  - Celsius
    "F"  - Fahrenheit
    "K"  - Kelvin
    "R"  - Rankine
    "De" - Delisle
    "N"  - Newton
    "Re" - Réaumur
    "Ro" - Rømer

    Правила конвертации по ссылке https://clck.ru/32RkT5

    Пример:
    convertTemperature(100, "C", "F"); // вернет 212
*/
```

## Задание 4

```javascript
/*
    В офисе есть задача максимально эффективно распоряжаться пространством. 
    Однако, для того, чтобы это сделать, нужно понять, сколько человек находятся в офисе.

    На вход дан массив, где true - работник присутствует на рабочем месте, false - отсутствует.
    Нам нужна функция, которая подсчитывает количество сотрудников, присутствующих в офисе (массиве).

    Пример:
    countColleagues([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]) // вернет 17
*/
```

## Задание 5

```javascript
/*
    В команде разработки есть несколько стажеров, которые не очень хорошо знакомы с правилами кодстайла на проекте.
    Напишите функцию, которая исправит их ошибку и переведет в camelCase названия переменных в проекте.

    Пример:
    convertToCamelCase("the-stealth-warrior"); // вернет "theStealthWarrior"
*/
```

## Задание 6

```javascript
/*
    На одном из корпоративных мероприятий сотрудникам предложили конкурс: “Кто придумает больше всех палиндромов”.
    Однако проверку хотелось бы автоматизировать.
    Напишите функцию, которая бы проверяла, является ли фраза, придуманная сотрудниками палиндромом.
    Знаки препинания необходимо игнорировать. Пустую строку можно считать палиндромом.

    Примеры:
    palindromeCheck("Amore, Roma"); // вернет "valid"
    palindromeCheck("A man, a plan, a canal: Panama"); // вернет "valid"
    palindromeCheck("No 'x' in 'Nixon'"); // вернет "valid"
    palindromeCheck("Abba Zabba, you're my only friend"); // вернет "invalid"
*/
```

## Задание 7

```javascript
/*
    Игра в математику. Некоторые числа обладают забавными свойствами.
    Например:
        89 --> 8¹ + 9² = 89 * 1
        695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
        46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

    Даны положительное целое число, записанное в виде abcd... (a, b, c, d... являются цифрами),
    и положительное целое число p (показатель степени для первой цифры числа).
    Мы хотим найти положительное целое число k, если оно существует, такое, что сумма цифр n,
    взятых в последовательных степенях p, равна k * n.

    Другими словами:
    Существует ли целое число k, такое как: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k
    Если это так, мы вернем k, если нет, вернем -1.

    Примечание: n и p всегда задаются как строго положительные целые числа.

    Пример:
    findFunnyDigit(695, 2) // вернет 2, так как 6² + 9³ + 5⁴= 1390 = 695 * 2
*/
```

## Задание 8

```javascript
/*
    В торговом центре есть ряд с банкоматами. Расстояние между ними одинаковое и ширина банкоматов одинаковая.
    Ваша функция принимает три аргумента:
        - количество банкоматов (≥ 1);
        - расстояние между банкоматами (10 – 30 метров);
        - ширина банкомата (10 – 50 сантиметров).

    Рассчитайте расстояние между первым и последним банкоматом в сантиметрах (без ширины первого и последнего).

    Пример:
    atmDistance(1, 10, 10); // вернет 0
    atmDistance(2, 20, 25); // вернет 2000
*/
```

## Задание 9

```javascript
/*
    Пати-брейкер. Найдите число, выбивающееся из ряда. В ряду могут быть либо все четные, либо нечетные.


    Пример:
    findPartyBreaker([2, 4, 0, 100, 4, 11, 2602, 36]); // вернет 11, единственное нечетное число в четном ряду
*/
```

## Задание 10

```javascript
/*
    Менеджеры попросили собрать аналитику по комментариям, которые клиенты отправляют к платежам.
    Почему-то оказалось, что им удобнее читать их по алфавиту.
    Ваша задача отсортировать исходную выгрузку (по первой букве отзыва), которую вам принес аналитик.

    Пример:
    sortFeedbacks(["Хороший сервис", "Ужасный банк", "Красивое приложение", "Понятная форма"]);
    // вернет ["Красивое приложение", "Понятная форма", "Ужасный банк", "Хороший сервис"]
*/
```

## Задание 11

```javascript
/*
    Простые пары.
    Нужно найти количество пар простых чисел с разницей 2,
    которые находятся в интервале от 1 до числа, которое подается на вход.

    Число называется простым, если оно делится только на единицу и само на себя.

    Пример:
    findSimpleNumbers(25); // вернет 4
*/
```

## Задание 12

```javascript
/*
    Миссия для тех, кто занят - сходить в бар.
    Пара друзей никак не могут найти дату, когда же они могут встретиться за чашкой… кофе🙂.
    Помогите им решить проблему.

    На вход мы получаем
        - w1 - рабочие дни первого друга
        - r1 - дни отдыха первого друга
        - w2 - рабочие дни второго друга
        - r2 - дни отдыха второго друга
        - timePeriod: период времени, за который нужно успеть встретиться
    
    В результате, нам нужно понять, сколько раз за timePeriod друзья успеют сходить в бар.

    Пример:
    barMeetings(3,1,7,3,10); // вернет 1
*/
```

## Задание 13

```javascript
/*
    Разработчики голосового помощника решили написать человекопонятный калькулятор.
    Начали с простого - преобразование оператора из текстового вида в арифметический.
    Нам даны два числа и оператор в текстовом виде - а ваша задача посчитать результат.

    Операции:
    - add - сложить
    - subtract - вычесть
    - multiply - умножить
    - divide - разделить

    Пример:
    humanCalculator(5, 2, "add"); // вернет 7
*/
```

## Задание 14

```javascript
/*
    Персональный менеджер в банке после череды согласований может предоставить скидку на обслуживание клиенту.
    Для этого, он отправляет запрос.
    Из системы он выгружает список, состоящий из решений, принятых начальниками разных уровней.
    Каждый из них назначает свою скидку, а вот менеджеру нужно принять решение о том, какую скидку он может дать.

    Менеджер не может дать просто максимальную скидку, ему нужно проверить, не опустится ли цена ниже себестоимости.

    На вход мы получаем массив решений, в каждом элементе которого есть:
        - tier - данные о том, руководитель какого уровня принял решение
        - discount - скидка (в процентах), которую разрешил руководитель,
    а также помимо массива мы получаем
        - basePrice - себестоимость
        - retailPrice - стоимость для клиента

    Необходимо посчитать финальную стоимость для клиента.

    Пример:
    getFinalDecision(
        [
            {tier: 4, discount: 20},
            {tier: 2, discount: 30},
            {tier: 3, discount: 10},
        ], 100, 130
    ) // вернет 117
*/
```

## Задание 15

```javascript
/*
    Вы пришли на встречу с персональным менеджером на 10 минут раньше.
    Хвала небесам, в вашем городе есть приложение, которое помогает вам скоротать досуг,
    при этом помогает быть более активным.
    Оно предлагает вам прогуляться по округе.
    На вход дан массив направлений (n - north, s - south, e - east, w - west).
    Прогулка в каждом направлении займет ровно одну минуту.
    Напишите функцию, которая позволит вам узнать - успеете ли вы вернуться в исходную точку ровно ко времени встречи.
    

    Пример:
    waitingWalk(['n','s','n','s','n','s','n','s','n','s']); // вернет true
*/
```
