const string = 'apple, banana, kiwi';

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
// -- Энд кодоо бичнэ үү!
function toUpperCase(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            result += String.fromCharCode(string.charCodeAt(i) - 32);
        }else {
            result += string.charAt(i);
        }
    }
    return result;
}

// console.log(toUpperCase('hello')) // HELLO
// console.log(toUpperCase('hello world')) // HELLOWORLD

// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
// -- Энд кодоо бичнэ үү!


const array = ['d', 'e', 'c', 'a', 'b'];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
// -- Энд кодоо бичнэ үү!

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
// -- Энд кодоо бичнэ үү!

// 5. Өгсөн array - ын эхний элемэнтийг устага
// -- Энд кодоо бичнэ үү!
// function cutFromArray(arr, from, to) {
//     let myArray = []

//     for (i = 0; i < array.length; i++) {
//         for (let j = from; j < to; i++) {
//             myArray.push(arr[j])
//         }
//     }
//     return 
// }


// function cutFromArray
// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(cutFromArray(arr, 2, 6));


// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
