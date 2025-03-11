//1.JSON

const student = {
    name: 'Khan' , 
    age: 20 , 
    movies: ['king khan' , 'Jon']
}
const studentJSON = JSON.stringify(student); 
console.log(student);
console.log(studentJSON); 

const studentOj = JSON.parse(studentJSON) ; 
console.log(studentOj); 

//2.fetch 
fetch('url')
.then(res => res.json())
.then(data => console.log(data)); 

// keys , values
const keys = Object.keys(student) ; 
const values = Object.values(student) ; 

//for 
const numbers = [1, 2,3,4,5,6,9]
numbers.forEach(num => console.log(num)) ; 
numbers.map(num => num*2)  ; 

//for of on array like object 
// loop on an object using for in 


//add or remove from an array 
const products = [

    { name: 'Laptop', price: '133000', brand: 'Lenovo', color: 'Black' },
    { name:'Watch', price: '3000', brand:'Casio', color: 'Red'},
    { name:'Phone', price: '13000', brand:'Samsung', color: 'golden'},
    { name:'Belt', price: '4000', brand:'Easy', color: 'Gray'},
    { name:'Sunglass', price: '300', brand:'Ray', color: 'Silver'},
] ; 
const newProducts = {name:'camera' , price: '12000', brand:'ok'}; 

//copy product array and add newProduct 
const newProduct = [...products, newProducts] ; 

//create a new array without one specific item 
// remove phone means create a new array without the  the phone 
const remaining = products.filter(p => p.name !== 'Phone')
console.log(remaining) ; 
