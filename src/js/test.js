// ООП
// 1. Инкапсуляция - объединение сущностей в одну оболочку, где под сущностями
//    подразумеваются св-ва и методы, где в св-вах хранятся сами данные объекта,
//    а поведение в методах. Позволяет делать сокрытие, если у ЯП есть такая    
//    возможность
const john = {
	name: 'john',
	age: 23,

	showUserInfo() {
		console.log(`Name: ${this.name}, age: ${this.age}`);
	}
}
// john.showUserInfo()


// 2. Наследование - у объекта могут быть объекты прообразы (предки), в которых  
//    хранятся св-ва и методы, которых нет у самого объекта, и так один объект 
//    может наследовать от другого, а тот от следующего и т.д

// 2.1 Пример: чтобы избежать дублирование методов, создадми объект прородителя (предка)
// 2.2 Наследование дает мощный инструмент - Полиморфизм Подтипов(надо почитать)
// const john2 = {
// 	name: 'john',
// 	age: 23,
// 	showUserInfo() {
// 		console.log(`Name: ${this.name}, age: ${this.age}`);
// 	}
// }
// const bob = {
// 	name: 'bob',
// 	age: 25,
// 	showUserInfo() {
// 		console.log(`Name: ${this.name}, age: ${this.age}`);
// 	}
// }

const user = {
	// объект предок - в js называется ПРОТОТИП
	showUserInfo() {
		console.log(`Name: ${this.name}, age: ${this.age}`);
	},

	a: {
		b: 1
	}
}

const john2 = {
	//__proto__ - это св-во, которое используется как ссылка на другой объект
	//            если в этом объекте нет нужного св-ва или метода
	name: 'john',
	age: 23,
	__proto__: user,
}

const bob = {
	name: 'bob',
	age: 23,
	__proto__: user,
}

// john2.showUserInfo()
// при обращении к св-ву или методу объекта, он ищет в самом объекте, если 
// там нет, ищет у предка и т.д
// если мы ЗАПИСЫВАЕМ новое св-во в объект, то оно записывается в сам объект,
// а не в Прототип
john2.showUserInfo = function () {
	console.log('test');
}
// но если будем записывать вложенный объект, то будет искаться у самого, если
// там нет, то идем в протоип и перезаписываем его данные
john2.a.b = 'newValue'
// console.log(john2);
// console.log(user);
// в Общем при Чтении смотрит на родителя, при записи на сам объект


// 3. Быстрая копия объекта
const a = {
	a: 1,
	b: 2,
	c: 3,
}
// св-ва физически не находятся в новых объектах, только ссылаются
const b = { __proto__: a }
const c = Object.create(a)
// console.log(b, c);
// console.log(b.__proto__);
// console.log(c.__proto__);
// console.log(Object.getPrototypeOf(c));


// 4. Как описать тип нашего объекта, как его формализовать, используем - class
class User {
	name;
	age;

	constructor(name, age = 0) {
		this.name = name
		this.age = age
	}

	showUserInfo() {
		console.log(`Name: ${this.name}, age: ${this.age}`);
	}
}
// объекты созданные при помощи класса, называются экземплярами класса, 
// по англ-кому - instance 
const jo = new User('jo')
const bo = new User('bo', 70)
// оператор instanceof проверят, что некий Объект является экземпляром Класса
function foo(obj) {
	if (obj instanceof User) {
		obj.showUserInfo()
	}
}
// foo(jo)

// 4.1 Наследование от класса, extends - расширять
class Admin extends User {
	role;

	constructor(name, age, role) {
		// у конструктор который наследуется, ОБЯЗАТЕЛЬНО должна вызываться
		// Родительская реализация
		super(name, age = 12);
		this.role = role;
	}

	showUserInfo() {
		// чтобы унаследовать внутри своего метода с ТАКИМ ЖЕ ИМЕНЕМ, метод родителя
		// нужно ключевое слово 'super'
		console.log('i am a admin');
		super.showUserInfo()
	}

	deleteUser(id) {
		//...
	}
}
const pet = new Admin('pet', 0, 'admin')
// console.log(pet);
// pet.showUserInfo();


class Foo {
	#bla = 1;
}
console.log(new Foo.#bla);