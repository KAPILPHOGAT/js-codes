let score = "45";

console.log(typeof score);
console.log(typeof score);
let valuenumber = Number(score);
console.log(typeof valuenumber);
// "45"=45
// "45abd"=NaN
// true=>1,false=>0

let booleanform = 2;

console.log(typeof booleanform);
console.log(typeof booleanform);
let isloggedin = Boolean(booleanform);
console.log(typeof isloggedin);
console.log(isloggedin);
// 1=>true,0=>false;
// ""=>false;
// "kapil"=>false
/************operations ***************/
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it  doesnot allows you to change its data type


console.log("2" === 2);
console.log(9*((9*2)+5));
console.log(+true);
console.log(+"");
// primitve

// 7types :string,number,symbol,booolean,null,undefinefd,big int
// reference-array,objects,functions 
const heors=["kapil","shakit","manav"]
console.log(typeof heors);