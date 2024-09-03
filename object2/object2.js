const person1 = {
  name: "잉여인간",
  age: 28,
  introduce: function () {
    console.log(`안녕! 나는 ${this.name}이야. 나이는 ${this.age}이고!`);
  },
  introduce1: () => {
    console.log(`안녕! 나는 ${this.name}이야. 나이는 ${this.age}이고!`);
  },
};

const person2 = {
  name: "열심인간",
  age: 30,
  introduce: function () {
    console.log(`안녕! 나는 ${this.name}이야. 나이는 ${this.age}이고!`);
  },
};

person1.introduce1();

const function1 = () => {
  console.log(this);
};

function function2() {
  console.log(this);
}

function1();
function2();

document.querySelector(".fun1").addEventListener("click", function1);
document.querySelector(".fun2").addEventListener("click", function2);
