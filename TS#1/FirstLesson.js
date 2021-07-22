// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
var User = /** @class */ (function () {
    function User(name, age, city, status) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getCity = function () {
        return this.city;
    };
    User.prototype.setName = function (newName) {
        this.name = newName;
    };
    User.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    User.prototype.setCity = function (newCity) {
        this.city = newCity;
    };
    User.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    };
    return User;
}());
let Dmytro = new User('Dima', 33, 'Lviv', false);
Dmytro.age = 3123;
console.log(Dmytro);
// 1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
// interface Animal {
//     swimming: string;
//     walking: string;
//     running: string
// }
//
// class Cat implements Animal{
//     sleep: number;
//     eat: number;
//     running: string;
//     swimming: string;
//     walking: string;
//
// }
