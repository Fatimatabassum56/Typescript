//Write  a  generic  function  in  TypeScript  that  takes  an  array  of 
// any  type  and  returns  the  reversed version  of  that  array
console.log("1st");

function reversearray<T>(arr:T[]):T[]{
    return arr.reverse()
}
let numArray:number[]=reversearray([1,2,3,4,5])
console.log("reverse of Number Array",numArray);
let strArray:string[]=reversearray(["apple","banana","pineapple"])
console.log("reverse of string array",strArray);

//  Implement  a  function  that  accepts  either  a  string  or  a  number  and  returns
//  the  length  if  it's  a string,  and  the  square  if  it's  a  number.  Use  union  types  to  handle  both  scenarios

console.log("2nd");

function strandnumber(value:string|number){
    if (typeof value === "string"){
        return value.length
}
else{
    return value**2
}


}
console.log("length of string",strandnumber("fatimaTabassum"));
console.log("square of 4",strandnumber(4));

//  Design  a  function  that  takes  either  an  array  of  strings 
// or  an  array  of  numbers  and  returns  the concatenated  string  or  the  sum  of  numbers  accordingly.
// Function that handles both string and number arrays
console.log("3rd");
function concatenateOrSum(input: (string | number)[]): string | number{
    // Check if the array is empty
    if (input.length === 0) {
      return 'Invalid input: Array is empty';
    }
  
    // Check the type of the first element
    if (typeof input[0] === 'string') {
      // Concatenate if the first element is a string
      return input.reduce((accumulator, currentString) => accumulator + String(currentString), '');
  }
  else{
    return input.reduce((current,next)=>{
        return (typeof current ==='number'?current:0)+(typeof next ==='number'? next:0)
    },0)
  }
 

}
  
  // Example usage:
  const stringResult = concatenateOrSum(['Hello', ' ', 'World']);
  const numberResult = concatenateOrSum([1,2,3,4,5])
  console.log('Concatenated String:', stringResult);
  console.log('sum of numbers ',numberResult);

  //  Create  an  interface  for  a  person  with  name  and  age  properties.  Then,  
  //define  another interface  for  a  worker  with  jobTitle  and  salary.  Finally,  
  //create  a  new  type  that  represents  a person  who  is  also  a  worker  using  intersection  types.
  console.log("4th");

  interface person{
    name : string;
    age : number;
  }
  interface worker{
    jobtitle:string;
    salary:number
  }
  type employees=person&worker;
  let employeeI:employees={
    name:"fatima",
    age:22,
    jobtitle:"developer",
    salary:50000
  }
  console.log(employeeI);

  //Write  a  function  that  takes  two  objects  as  parameters,  one  representing  a  person 
//    and  the other  representing  a  worker.  Use  intersection  types  to  ensure  the  
// function  works  with  both types.
// Define types for objects
console.log("5th");
type Person1 = {
    name: string;
    age: number;
  };
  
  type Worker1 = {
    jobTitle: string;
    salary: number;
  };
  
  // Function that takes two objects as parameters
  function processPersonAndWorker2(person: Person1, worker: Worker1): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Job Title: ${worker.jobTitle}`);
    console.log(`Salary: ${worker.salary}`);
  }
  
  // Example usage
  const fatima: Person1 = { name: 'John', age: 30 };
  const engineer: Worker1 = { jobTitle: 'Engineer', salary: 50000 };
  
  processPersonAndWorker2(fatima, engineer);

  //using intersection
  // Define types
  console.log("2nd way");
type Person2 = {
    name: string;
    age: number;
  };
  
  type Worker2 = {
    jobTitle: string;
    salary: number;
  };
  
  // Define intersection type
  type PersonAndWorker = Person2& Worker2;
  
  // Function that works with both types
  function processPersonAndWorker(personAndWorker: PersonAndWorker): void {
    console.log(`Name: ${personAndWorker.name}`);
    console.log(`Age: ${personAndWorker.age}`);
    console.log(`Job Title: ${personAndWorker.jobTitle}`);
    console.log(`Salary: ${personAndWorker.salary}`);
  }
  
  // Example usage
  const persons: Person2= { name: 'shaista', age: 23 };
  const worker: Worker2 = { jobTitle: 'Engineer', salary: 50000 };
  
  const personAndWorker: PersonAndWorker = { ...persons, ...worker };
  
  processPersonAndWorker(personAndWorker);
  

  //Develop  a  type  guard  function  that  checks  if  a  given  variable  is  a  string.  
  //Use  this  type  guard to  conditionally
  //  capitalize  the  string  or  perform  a  different  action  if  the  variable  is  not  a  string
  // Type guard function to check if a variable is a string
  console.log("6th");

  // Type guard function to check if a variable is a string
function isString(variable: any): variable is string {
    return typeof variable === 'string';
  }
  
  // Function that conditionally capitalizes the string or performs a different action
  function processVariable(variable: any): void {
    if (isString(variable)) {
      // Capitalize the string if it's a string
      const capitalizedString = variable.toUpperCase();
      console.log(`Capitalized String: ${capitalizedString}`);
    } else {
      // Perform a different action if it's not a string
      console.log('Not a string. Performing a different action.');
    }
  }
  
  // Example usage
  const stringValue = 'hello';
  const numberValue = 42;
  
  processVariable(stringValue); // Outputs: Capitalized String: HELLO
  processVariable(numberValue); // Outputs: Not a string. Performing a different action.
  
  



  //Implement  a  function  that  handles  both  strings  and  numbers.  Use  a  type  guard  to 
  // differentiate between  the  two  types  and  perform  specific  operations  based  on  the  type
  console.log("7th");

  type varb=string|number;

function disp(input:varb){
 if(typeof input === 'string'){
    return input.toUpperCase();
 } 
 else{
    return input*2;
 }

}
console.log(disp('appple'));
console.log(disp(23));

  