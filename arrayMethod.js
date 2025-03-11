const products = [

    { name: 'Laptop', price: '133000', brand: 'Lenovo', color: 'Black' },
    { name:'Watch', price: '3000', brand:'Casio', color: 'Red'},
    { name:'Phone', price: '13000', brand:'Samsung', color: 'golden'},
    { name:'Belt', price: '4000', brand:'Easy', color: 'Gray'},
    { name:'Sunglass', price: '300', brand:'Ray', color: 'Silver'},
]

//1.map
console.log("After using map operation : ");
const brands= products.map(product => product.brand)
console.log(brands);
const prices = products.map(product =>product.price) ; 
console.log(prices); 

//2.foreach
console.log("After using foreach operation : ");
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.price));

//3.filter
const cheap = products.filter(product => product.price <=5000) ; 
console.log("Cheapest Product: ");
console.log(cheap) ; 

//4.find 
const finding = products.find(product => product.price <=5000) ;


