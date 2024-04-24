import { isConstructorDeclaration } from "typescript";


//equality and inequality test 1
console.log("equality test with strings :", "apple"==="apple");

//equality and inequality test 2
console.log("inequality test with strings :", ("apple" as string)!="orange");

//tests using the lower case function 3
console.log("lower case function test:  ", "HELLO". toLocaleLowerCase()==="hello");
//numerical tests involving equality 4
console.log("equality test with numbers:", 26===26);
//numerical test involving inequality 5
console.log("inequality test with numbers:",(26 as number) !=25)
//greater than test  6
console.log("greater than test:", 10>5);
//less than test 7
console.log("less than test:",4<6);
//greater than or equal to 8
console.log("greater than and equal to:",10>=10);
//less than and equal to 9
console.log("less than and equal to",5<=10)
//test using and operator 10
console.log("and operator test",5===5 && 10>5 );
//test using or operator 11
console.log("or operator test",5===5 || false );
//test whether an item is in a array
const fruits :string[]=["mango",'banana','papaya'];
console.log('test "mango" in the array:',fruits.includes("mango"));
//test whether an item is not in the array
console.log('test if"apple"is not in the array',!fruits.includes('apple'));
