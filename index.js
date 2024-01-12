var _a;
//arrays
var array1 = [1, 2, 4];
var array2 = ["hello", "fatima", "sha"];
var array3 = array2.map(function (e) {
    return e + " world";
});
console.log(array3);
//tuples
var x = [5.6789, "hello"];
x[0].toPrecision(3);
x[1].toUpperCase;
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size["medium"] = "hello";
    Size["large"] = "hi";
})(Size || (Size = {}));
var mysize = Size.medium;
console.log(mysize);
//function 
var ispalindrome = function (palin) {
    var reversedstr = palin.split("").reverse().join("");
    return reversedstr == palin;
};
console.log(ispalindrome("123321"));
//objects
var person = {
    name: "Fatima",
    age: 25,
    address: { city: "cairo", country: "india" }
};
console.log(person.address.city);
person.address.city = "pune";
// person.addresss=123
console.log(person.address.city);
var product1 = {
    name: "macbook",
    price: 2000,
    isAvailable: true
};
var product2 = {
    name: "phone",
    // @ts-ignore
    price: 123,
    isAvailable: false,
};
console.log(product2.isAvailable);
var car1 = "fatima";
//unions
function calculatewgt(weight) {
    console.log(" your weight is ok . you can eat more");
}
calculatewgt(true);
var manger1 = {
    id: 56789,
    name: 'jack',
    age: 24,
    height: function (h) { console.log("your height is ".concat(h)); },
    department: 'IT'
};
manger1.height(180);
var ceo = {
    id: 123456,
    name: 'Tom',
    age: 56,
    height: function (h) {
        return "".concat(h * 2);
    },
    department: "HR",
};
//ceo.age = undefined ;
console.log("CEO Height ", ceo.height(180));
//nullable
var nullableString = "Hello";
nullableString = null;
//optional Chaining 
var human = {
    name: "John",
    address: {
        city: "New York",
        zipCode: "10001"
    },
};
// With Optional Chaining
var zipCode = (_a = human.address) === null || _a === void 0 ? void 0 : _a.zipCode; // Safely handles null or undefined
console.log(zipCode); // Output: undefined (if 'address' is null or undefined)
var people = [
    { name: "John", address: { city: "New York", zipCode: "10001" } },
    { name: "Jane", address: { city: "Los Angeles" } },
    { name: "Doe" }
];
// Using Optional Chaining to access zip codes
people.forEach(function (person) {
    var _a;
    var zipCode = (_a = person.address) === null || _a === void 0 ? void 0 : _a.zipCode;
    console.log("".concat(person.name, "'s zip code: ").concat(zipCode || 'N/A'));
});
//generics
function identify(value) {
    return value;
}
var result1 = identify(5); // T is inferred as number
var result2 = identify("hello"); // T is inferred as string
console.log(result1);
console.log(result2);
console.log(identify("uzma"));
console.log(identify(123));
//array Reverse Function with Generics:
function reverseArray(arr) {
    return arr.reverse();
}
var reversedArr = reverseArray([1, 2, 3]);
console.log(reversedArr);
var reversedarrayofstring = reverseArray(["apple", "banana", "orange"]);
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
function errorFn() {
    throw new Error('An error occurred');
}
try {
    errorFn();
}
catch (e) {
    console.error(e);
}
console.log(errorFn);
