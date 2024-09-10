// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.introduce = function () {
//   console.log(`안녕! 나는 ${this.name}이야. 나이는 ${this.age}이고!`);
// };

// const person1 = new Person("잉여인간", 28);
// const person2 = new Person("잉여인간2", 30);

// person1.introduce();
// person2.introduce();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`안녕! 나는 ${this.name}이야. 나이는 ${this.age}이고!`);
  }
}

const person3 = new Person("잉여인간3", 32);

person3.introduce();
