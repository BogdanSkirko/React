// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
class User {
    name: string;
    age: number;
    city: string;
    status: boolean;

    constructor(name: string, age: number, city: string, status: boolean) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }
    getName () {
        return this.name
    }
    getAge () {
        return this.age
    }
   getCity () {
        return this.city
    }

    setName (newName) {
        this.name = newName

    }
    setAge (newAge) {
        this.age = newAge
    }
   setCity (newCity) {
        this.city = newCity
    }
    changeStatus (newStatus) {
        this.status = newStatus
    }

    }

    let Dmytro = new User('Dima',33,'Lviv',false)
    Dmytro.age = 3123
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