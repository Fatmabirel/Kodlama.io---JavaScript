function addToCart(quantity,productName = "Elma"){
    console.log("Sepete eklendi: ürün : " + productName + " adet: " + quantity)
}

addToCart(10);

let sayHello = () => {
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart3(product){
    console.log("Ürün: " + product.productName + " fiyat: " + product.unitPrice + " adet: " + product.quantity)
}

let product1 = {productName: "Elma", unitPrice: 10 , quantity:5}
let product2  = {productName: "Elma", unitPrice: 10 , quantity:5}
let product3 = {productName: "Elma", unitPrice: 10 , quantity:5}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)
addToCart3(product1)


function addToCart4 (x) {
    console.log(products)
}

let products = [
    {productName: "Kiraz", unitPrice: 10 , quantity:5},
    {productName: "Elma", unitPrice: 10 , quantity:5},
    {productName: "Erik", unitPrice: 10 , quantity:5}
]

addToCart4(products)

function add(...numbers){
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
        console.log(total)    
    }
}

add(20,30)

let numbers = [30,10,40,25,68]
console.log(Math.max(...numbers))

let [marmara,karadeniz,doguAnadolu,[marmaraSehirleri]] = [
    {name: "Marmara", population:"20M"},
    {name: "Karadeniz", population:"20M"},
    {name: "Doğu Anadolu", population:"20M"},
    [
        ["Bursa","Edirne"],
        ["Sinop","Samsun"],
        ["Mardin","Gaziantep"],
    ]
]

console.log(marmara.name)
console.log(karadeniz.population)
console.log(marmaraSehirleri)

let productName, unitPrice, quantity
let product4 = {productName: "Elma", unitPrice: 10 , quantity:5}

