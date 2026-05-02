// # TypeScript — 18 ta Topshiriq

// ---

// ## 1. Salom Dunyo

// `name` parametri `string` bo'lgan `greet` funksiyasini yoz. Funksiya `"Salom, [name]!"` qaytarsin.

// ```ts
// greet("Ali"); // "Salom, Ali!"
// greet("Vali"); // "Salom, Vali!"
// ```

function greet (name: string) : string {
    return `salom, ${name}!`
}
console.log(greet("ali"));
console.log(greet("vali"));


// ---

// ## 2. Yosh Tekshiruvi

// `age` parametri `number` bo'lgan `isAdult` funksiyasini yoz. Agar yosh 18 dan katta yoki teng bo'lsa `true`, aks holda `false` qaytarsin.

// ```ts
// isAdult(20); // true
// isAdult(15); // false
// ```

function isAdult(age:number) : boolean{
    return age >= 18
}
console.log(isAdult(16));
console.log(isAdult(22));


// ---

// ## 3. Shaxsiy Ma'lumot

// `name: string`, `age: number`, `city: string` maydonlari bo'lgan `Person` interfeysini yarat. Shu interfeys asosida bitta obyekt yoz va konsolga chiqar.

// ```ts
// // { name: "Jasur", age: 21, city: "Toshkent" }
// ```

interface Person {
    name:string
    age: number
    city:string
}

const person: Person = {
    name:"Jasur",
    age:21,
    city:"Toshkent",
}
console.log(person);


// ---

// ## 4. Ikki Sonni Qo'shish

// `add` funksiyasini yoz. Ikkita `number` qabul qilsin va ularning yig'indisini qaytarsin. Funksiyaning parametrlari va qaytarish turi aniq yozilgan bo'lsin.

// ```ts
// add(3, 5); // 8
// add(10, 2); // 12
// ```

function add(a:number, b:number) : number{
    return a +b
}
console.log(add(12, 8));


// ---

// ## 5. Mahsulot Narxi

// `Product` interfeysini yarat: `name: string`, `price: number`. Mahsulotlar massivini yozib, narxi 100 000 dan arzon mahsulotlarni filtrlash funksiyasini yoz.

// ```ts
// // [{ name: "Daftar", price: 5000 }, { name: "Qalam", price: 2000 }]
// ```

interface Product {
    name : string
    price: number
}

const products: Product[] = [
  { name: "Daftar", price: 5000 },
  { name: "Qalam", price: 2000 },
  { name: "Sumka", price: 150000 },
  { name: "Kitob", price: 80000 },
];

function productPrice(item : Product[]) : Product[] {
    return item.filter((products) => products.price < 100000)
}
console.log(productPrice(products));


// ---

// ## 6. Eng Katta Son

// `number[]` qabul qilib eng katta sonni qaytaradigan `getMax` funksiyasini yoz.

// ```ts
// getMax([3, 7, 1, 9, 4]); // 9
// getMax([10, 5, 8]); // 10
// ```

function getMax(numbers:number[]):number{
    return Math.max(...numbers)
}
console.log(getMax([1, 2, 6, 8, 9, 3]));

// ---

// ## 7. To'liq Ism

// `firstName: string` va `lastName: string` qabul qilib to'liq ismni qaytaradigan `getFullName` funksiyasini yoz.

// ```ts
// getFullName("Ali", "Karimov"); // "Ali Karimov"
// ```

function getFullName (firstName: string, lastName: string): string{
    return `${firstName} ${lastName}`
}
console.log(getFullName("Ali", "Karimov"));


// ---

// ## 8. Kvadrat va Kub

// `number` qabul qilib `{ square: number, cube: number }` qaytaradigan `getPowers` funksiyasini yoz.

// ```ts
// getPowers(3); // { square: 9, cube: 27 }
// getPowers(4); // { square: 16, cube: 64 }
// ```

function getPowers(num:number):{square:number, cube:number}{
    return{
        square:num ** 2,
        cube:num ** 3,
    }
}
console.log(getPowers(3));

// ---

// ## 9. Massiv Uzunligi

// `string[]` qabul qilib har bir so'zning uzunligini qaytaradigan `getLengths` funksiyasini yoz.

// ```ts
// getLengths(["ali", "vali", "salom"]); // [3, 4, 5]
// ```

function getLengths(words:string[]):number[]{
    return words.map(word => word.length)
}
console.log(getLengths(["ali", "vali", "salom"]));


// ---

// ## 10. Chegirma Hisoblash

// `price: number` va `discount: number` (foizda) qabul qilib chegirmadan keyingi narxni qaytaradigan `applyDiscount` funksiyasini yoz.

// ```ts
// applyDiscount(100000, 20); // 80000
// applyDiscount(50000, 10); // 45000
// ```

function applyDiscount(price: number, discount: number): number {
  return price - (price * discount) / 100;
}

console.log(applyDiscount(100000, 20)); 
console.log(applyDiscount(50000, 10)); 

// ---

// ## 11. Foydalanuvchi Kartasi

// `User` interfeysini yarat: `id: number`, `username: string`, `isActive: boolean`. Foydalanuvchilar massividan faqat `isActive: true` bo'lganlarini qaytaradigan funksiya yoz.

// ```ts
// getActiveUsers(users); // faqat faol foydalanuvchilar
// ```

interface User {
  id: number;
  username: string;
  isActive: boolean;
}

function getActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

const users: User[] = [
  { id: 1, username: "ali", isActive: true },
  { id: 2, username: "vali", isActive: false },
  { id: 3, username: "hasan", isActive: true },
];

console.log(getActiveUsers(users));

// ---

// ## 12. Harorat Konvertori

// Selsiyni Farengeytga aylantiruvchi `toFahrenheit` funksiyasini yoz.  
// Formula: `(celsius * 9/5) + 32`

// ```ts
// toFahrenheit(0); // 32
// toFahrenheit(100); // 212
// ```

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

console.log(toFahrenheit(0));
console.log(toFahrenheit(100));

// ---

// ## 13. So'zni Teskari Yozish

// `string` qabul qilib uni teskari qaytaradigan `reverseString` funksiyasini yoz.

// ```ts
// reverseString("salom"); // "molas"
// reverseString("typescript"); // "tpircseypt"
// ```

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("salom"));
console.log(reverseString("typescript"));

// ---

// ## 14. Talaba Bahosi

// `score: number` qabul qilib harfli baho qaytaradigan `getGrade` funksiyasini yoz.

// ```
// 90-100 → "A"
// 70-89  → "B"
// 50-69  → "C"
// 0-49   → "F"
// ```

// ```ts
// getGrade(95); // "A"
// getGrade(72); // "B"
// getGrade(40); // "F"
// ```

function getGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 70) return "B";
  if (score >= 50) return "C";
  return "F";
}

console.log(getGrade(95));
console.log(getGrade(72));
console.log(getGrade(40));

// ---

// ## 15. Juft Sonlar

// `number[]` qabul qilib faqat juft sonlarni qaytaradigan `getEvenNumbers` funksiyasini yoz.

// ```ts
// getEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
// ```

function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// ---

// ## 16. Ism Formatlash

// `string` qabul qilib har bir so'zning birinchi harfini katta qiladigan `capitalize` funksiyasini yoz.

// ```ts
// capitalize("ali karimov"); // "Ali Karimov"
// capitalize("toshkent shahri"); // "Toshkent Shahri"
// ```

function capitalize(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("ali karimov"));
console.log(capitalize("toshkent shahri"));

// ---

// ## 17. Kontakt Daftari

// `Contact` interfeysini yarat: `name: string`, `phone: string`, `email: string`. Kontaktlar massividan isim bo'yicha qidiruv funksiyasini yoz. Topilmasa `null` qaytarsin.

// ```ts
// findContact(contacts, "Ali"); // { name: "Ali", ... }
// findContact(contacts, "Nodir"); // null
// ```

// ---

// ## 18. Xarid Savatchasi

// `CartItem` interfeysini yarat: `name: string`, `price: number`, `quantity: number`. Savatchadagi barcha mahsulotlarning umumiy narxini hisoblaydigan `getTotalPrice` funksiyasini yoz.

// ```ts
// getTotalPrice([
//   { name: "Kitob", price: 30000, quantity: 2 },
//   { name: "Qalam", price: 5000, quantity: 5 },
// ]);
// // 30000*2 + 5000*5 = 85000
// ```
