//how to declare a variable using let and const

const fatherName = 'Shohrab' ; 
let  season = 'Winter ';
season = 'Rainy';

// 6 basic condition: .,<, ===,!==,>=, <= 
// multiple condition: && , || 
if(fatherName === 'Shohrab')  
{
   console.log 
} ;
else if (season === 'Winter' )
{

};
else {

};

// 3. Array
// index 
//length , push  
//

const numbers = [89, 35, 98, 12] ;
numbers[0] = 56 ; 

//4. Loop = for, while 
for(let i=0 ; i<numbers.length;i++)
{
    const number = numbers[i] ;
    console.log(number) ;  
}

// 6. object
// 3 ways to access property by name 

const student = {
    name: 'Shojjoti hossen' , 
    age: 20 , 
    movies: ['king khan' , 'jolphoddo']
}
const myVariable = 'age' ; 
console.log(student.age); //direct access by property 
console.log(student['age']) ; //direct access via  name string
console.log(student[myVariable]); //access via property name in a variable   