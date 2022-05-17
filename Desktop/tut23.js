console.log("This is tutorial 23");
let x = 2;
let y = 5;
let z;
z=x-y;
z=x/y;
z=Math;
z=Math.PI;
z=Math.E;

z=Math.ceil(4.3);//upr phochana....
z=Math.round(4.3);//normally roundoff
z=Math.floor(-4.9);//floor p lana
z=Math.abs(-7);//-ve ko positive krdo or +ve ko positive rhnedo
z=Math.sqrt(49);//finds square root
z=Math.pow(2,4);//finds power
z=Math.min(56,7657,8787,34,76,-7689);//finds minimun value
z=Math.max(65,7,78,8978);//finds maximum value
z=Math.random();
z= Math.ceil(50+(100-50)*Math.random());
console.log();

let today = new Date();
// console.log(typeof today);
let otherdate = new Date('8-4-2003 04:56:09');//can be written as 'June 13 2003' or 'mm/dd/yyyy'
// console.log(otherdate);
let a;
a = otherdate.getDay();//shows days
a = otherdate.getDate();
a = otherdate.getMinutes();
a = otherdate.getHours();
a = otherdate.getSeconds();
a = otherdate.getTime();//ye us date se leke aj tk k no.of seconds btayega
a = otherdate.getMilliseconds();
a = otherdate.getMonth();

console.log(a);
otherdate.setDate(30);
otherdate.setMonth(7);
otherdate.setFullYear(1980);//setseconds,minutes,hours
console.log(otherdate);