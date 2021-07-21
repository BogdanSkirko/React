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
    getName(): string {
        return 'hello my name is ' + this.name
    }
}
let maksym = new User('maksym',323,'Lviv',true)
console.log(maksym);

// 1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
