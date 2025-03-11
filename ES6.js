const numbers = [89, 35, 98, 12] ;
const student = {
    name: 'Khan' , 
    age: 20 , 
    movies: ['king khan' , 'Jon']
}

//Template string 
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[3]} my mostly liked movie ${student.movies[0]}` ; 

console.log(about) ;

//2. arrow function 
const getFiftyFive = () => 55 ; 
const addSixtyFive = num => num + 65 ; 
const isEven = x => x%2==0 ;
const addThree = (x,y,z) => x+y+z ; 
const doMath = (num1 , num2 ) =>
{
    const sum = num1 + num2 ; 
    return sum ; 
} ;

// spread operator 
