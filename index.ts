
//arrays
let array1:number[]=[1,2,4]
let array2:string[]=["hello","fatima","sha"]
let array3=array2.map((e)=>{
    return e+ " world"
})
console.log(array3);
//tuples
let x:[number,string]= [5.6789,"hello"];
x[0].toPrecision(3)
x[1].toUpperCase

//enum
enum Size {Small =1, medium="hello", large="hi"}
let mysize:Size=Size.medium
console.log(mysize);

//function 
const ispalindrome =(palin:string):boolean=>{
    let reversedstr= palin.split("").reverse().join("");
    return reversedstr==palin
}
console.log(ispalindrome("123321"));

//objects
const person:{
   readonly  name:string;
    age:number;
    id?:number;
    address:{city:string; country:string}
    retire?:(date:Date)=>void
}={
    name:"Fatima",
    age:25,
    address:{city:"cairo",country:"india"}
}
console.log(person.address.city);
person.address.city="pune"
// person.addresss=123
console.log(person.address.city);

//aliases
type product={
    name:string;
    price:number;
    isAvailable:boolean
}
const product1:product={
    name:"macbook",
    price:2000,
    isAvailable:true


}
const product2:product={
    name:"phone",
    // @ts-ignore
    price:123, 
    isAvailable:false,
    
}

console.log(product2.isAvailable);

//eg2
type car=string;
const car1:car="fatima"



//unions
function calculatewgt(weight:string|number|boolean){
   console.log(` your weight is ok . you can eat more`);
}
calculatewgt(true)

//intersection
type employee={
    id:number;
    name:string;
    age?:number;
    height:(data:number)=>void
}
type manager=employee & {
    department?:string;
    }
    let manger1:manager={
        id:56789,
        name:'jack',
        age:24,
        height:(h:number)=>{console.log(`your height is ${h}`)} ,
        department:'IT'
        };
       manger1.height(180)
       type boss=employee & manager;
       let ceo:boss={
        id:123456,
        name:'Tom',
        age:56,
        height:(h:number)=>{
            return `${h*2}`
        },
            department:"HR",

       }
       //ceo.age = undefined ;
       console.log("CEO Height ",ceo.height(180))

       //nullable

       let nullableString: string | null = "Hello";
       nullableString = null; 

       //optional Chaining 
       const human = {
        name: "John",
        address: {
            city: "New York",
            zipCode: "10001"
        },
      
    };

// With Optional Chaining
const zipCode = human.address?.zipCode; // Safely handles null or undefined
console.log(zipCode); // Output: undefined (if 'address' is null or undefined)
    

//eg2
type Person = {
    name: string;
    address?: {
        city: string;
        zipCode?: string;
    };
};

const people: Person[] = [
    { name: "John", address: { city: "New York", zipCode: "10001" } },
    { name: "Jane", address: { city: "Los Angeles" } },
    { name: "Doe" }
];

// Using Optional Chaining to access zip codes
people.forEach(person => {
    const zipCode = person.address?.zipCode;
    console.log(`${person.name}'s zip code: ${zipCode || 'N/A'}`);
});

//generics
function identify<T>(value:T){
    return value;
}
let result1: number = identify(5);      // T is inferred as number
let result2: string = identify("hello"); // T is inferred as string
console.log(result1);
console.log(result2);
console.log(identify("uzma"));
console.log(identify(123));

//array Reverse Function with Generics:
function reverseArray<T>(arr: T[]) : T[]{
    return arr.reverse();
}
var reversedArr:number[]= reverseArray([1, 2 ,3]);
console.log(reversedArr);
let reversedarrayofstring:string[]=reverseArray(["apple","banana","orange"])
console.log(reversedArr);
console.log(reversedarrayofstring);

//keyof
// function getProperty(obj: Point, key: keyof Point): number {
//     return obj[key];
// }

// const point: Point = { x: 10, y: 20 };

// console.log(getProperty(point, "x")); // Output: 10
// console.log(getProperty(point, "y")); // Output: 20
// console.log(getProperty(point, "z")); // Error: Argument of type '"z"' is not assignable to parameter of type '"x" | "y"'
 
//never
// function errorFn(): never {
//     throw new Error('An error occurred');
//     }
//     try {   
//         errorFn();
//         } catch (e) {
//             console.error(e);
//             }
//             console.log(errorFn);





    

       
