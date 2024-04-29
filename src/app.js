console.log("Merhaba Kodlama.io")

//JS is not type safe!

let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)

const euroDun = 11.2
euroDun = 11 //mistake because it can not be changed

console.log(euroDun)

//array
//camelCasing - PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")       
}
console.log("</ul>")

