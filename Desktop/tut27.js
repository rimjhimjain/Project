/*console.log('welcome to object literal tutorial');

// object literal for creating objects
let car = {
    nam: 'Maruti 800',
    topspeed: 89,
    run: function () {
        console.log("car is running");
    }
}
function GeneralCar(givennam, givenspeed){
    this.nam = givennam;
    this.topspeed = givenspeed;
    this.run = function(){
    console.log(`${this.name} is running`);
}
}
car1  = new GeneralCar('Nissan',180);
console.log(car1);*/

/*console.log("This is tut 28");
let details = {
    nam : "Rimjhim",
    channel : "CWD",
    address : "Earth"

}

function obj(givenName){
    this.name = givenName
}

obj.prototype.getName = function(){
    return this.nam;
}
let obj2 =new obj("Rimjhim");
console.log(obj2);
// let a = 175;
// c=170;
// b = a/5;
// console.log(b);
*/

console.log("This is tut 30");


const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

//This creates Rimjhim object
const Rimjhim = Object.create(proto);
Rimjhim.name = "Rimjhim";
Rimjhim.role = "Programmer";
// console.log(Rimjhim);

// This creates Rimjhim object
const rimjhim = Object.create(proto, {
    name: { value: "Rimjhim" },
    role: { value: "Programmer" },
});

rimjhim.changeName("Rimjhim2")
Rimjhim.changeName("Rimjhim3")
// console.log(rimjhim)
// console.log(Rimjhim)

// employee constructor
function employee(name, Salary, experience) {
    this.name = name;
    this.Salary = Salary;
    this.experience = experience;
}

// slogan 
employee.prototype.slogan = function () {
    return `This company is the best. Regards ${this.name}`;
}

// create an object from this constructor
let harry = new employee("Harry", 7873867, 55);
console.log(harry.slogan());

// another employee a programmer
function programmer(name, Salary, experience, language) {
    employee.call(this, name, Salary, experience);
    this.language = language;

}

// Inherit the prototype
programmer.prototype = Object.create(employee.prototype);

// Manually set the constructor
programmer.prototype.constructor = programmer;

let rohan = new programmer('Rohan', 2000, 0, "Javascript");
console.log(rohan);
// food (object) inherit krke cake bnana h floor class cake class