const person = ["K", "o", "t", "l", "i", "a", "r", "s"];
console.log(person[3]);

console.log(person.length);

person[2]= "Alisa";
console.log(person[2]);

person.push("Tom");
console.log(person);

const date = new Date();
console.log(date);

const people = ["Alisa", "Tom", "Ron",];
people[0] = "Mika";
console.log(people)
console.log(people[1]);

const person = {firstName:"Alisa", lastName:"Kotler", age:39};
console.log(person.firstName);

Home Work //
const person = {
    firstName:"Alisa",
    lastName:"Kotliarski",
    age:39,
    carName:"Suzuki",
    birthDay: new Date(1983, 02, 08),
    fullName:function() {return this.firstName + " " + this.lastName;}
};
console.log(person.fullName());
console.log(person);

let birthDay = new Date(year=1983, month=03, day=08);
console.log(birthDay);


const date = new Date(year=2022, month=10, day=01, hours=11, minutes=21);
console.log(date);

const date = new Date(year=2022, month=10, day=35, hours=11, minutes=21);
console.log(date);



