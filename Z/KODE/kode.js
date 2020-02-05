// //========== BELAJAR EXPORT FUNCTION DAN MODULE ======================================================// //

// var calculator = require('./calculator') // //cara memmangil module dari data lain

// var a = 13, b = 6 // //menuliskan variable sesuai yang diinginkan

// console.log("Hasil jumlah :" + calculator.add(a, b)); // //menuliskan rumus nya dengan function dari module yang dipanggil
// console.log("Hasil kali :" + calculator.multiply(a, b));
// console.log("Hasil kurang :" + calculator.subtract(a, b));
// console.log("Hasil bagi :" + calculator.divide(a, b));

// //========== BELAJAR EXPORT FUNCTION DAN MODULE DI SATU JS ===========================================// //

// var fs = require('fs') // //memanggil salah satu module default dari node.js

// fs.printMessages = function (str) { // //membuat function dengan sebuah isi console
//     console.log('New messages');
//     console.log(str);
// }

// module.exports = fs // //meng-export module yang dibuat

// fs.printMessages('Success') // //mencetak hasil untuk function

// //========== BELAJAR DELETE FUNCTION (OVERIDE) =======================================================// //

// var fs = require('fs')

// delete fs['readFile'] // //berguna untuk menhapus sebuah function

// fs.readFile = function (str) {
//     console.log('New function from overide');
//     console.log(str);
// }

// module.exports = fs

// fs.readFile('kode.txt')

// //========== BELAJAR EXPORT EMIT DENGAN KONDISI ======================================================// //

// const EventEmitter = require('events').EventEmitter

// class Dog extends EventEmitter { } // //buat class dengan module

// class Food { } // //buat class kosong yang nantinya akan didefinisikan kembali

// let myDog = new Dog() // //buat variable yang merujuk kepada sebuah class yang sudah dibuat

// myDog.on('chew', item => { // //buat function dengan 2 parameter
//     if (item instanceof Food) { // //buat sebuah kondisi
//         console.log('Good Dog');
//     }
//     else {
//         console.log(`Time to buy another ${item}`);
//     }
// })

// myDog.emit('chew', 'shoe') // //buat hasil dari kondisinya
// const bone = new Food() // //buat variable dari class kosong yang telah dibuat
// myDog.emit('chew', bone)

// //========== BELAJAR MEMBUAT EVENT EMITTER DENGAN FUNCTION HAPUS =====================================// //

// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter { }

// var emitter = new MyEmitter()

// emitter
//     .on('message', function () { // //buat kondisinya
//         console.log('Satu pesan emitter');
//     })
//     .on('message', function () {
//         console.log('Pesan false');
//     })
//     .on('data', function () {
//         console.log('Pesan untuk data');
//     })

// console.log(emitter.eventNames());
// emitter.removeAllListeners('data') // //buat function yang bertujuan menghapus kondisi yang bernama 'data'
// console.log(emitter.eventNames());

// //========== BELAJAR MEMBUAT BUFFER DENGAN BERBAGAI KONDISINYA =======================================// //

// const buffer = Buffer.allocUnsafe(100) // //buat variable buffer dengan mengalokasikan jumlah isinya

// const length = buffer.write('Hello World') // //variable yang berisi sebuah string

// console.log('Octens written :' + length); // //mendefinisikan berapa jumlah huruf string yang tekah dibuat

// const buffer = Buffer.allocUnsafe(26)

// for (var i = 0; i < 26; i++) { // //buat looping untuk menentukan berapa banyak isinya
//     buffer[i] = i + 97
// }

// console.log(buffer.toString('ascii')); // //menampilkan semua isi alfabet
// console.log(buffer.toString('ascii', 0, 8)); // //membatasi isi alfabet (angka pertama; start awal isi dan angka kedua; batas akhir isi)
// console.log(buffer.toString('utf8', 0, 8));
// console.log(buffer.toString(undefined, 0, 8));

// //========== BELAJAR MEMBUAT BUFFER DENGAN MERUBAH KE FORMAT JSON ====================================// //

// const buffer = new Buffer('We are learning node js')

// const json = buffer.toJSON(buffer) // //merubah isi variable awal ke dalam bentuk JSON

// console.log(json);

// //========== BELAJAR MEMBUAT STREAM DENGAN KONDISI MEMBACA =======================================// //

// var fs = require('fs')

// var data = "" // //buat variable dengan isi kosong

// var readerStream = fs.createReadStream('kode.txt') // //mengambil isi data dari file luar

// readerStream.setEncoding('UTF8') // //buat default encoding

// readerStream.on('data', function (chunk) { // //memanggil data yang tekah dibuat
//     data += chunk
// })

// readerStream.on('end', function () { // //jika dalam kondisi telah usai
//     console.log(data);
// })

// readerStream.on('error', function () { // //jika kondisnya error
//     console.log(err.stack);
// })

// console.log('Program finished');

// //========== BELAJAR MEMBUAT BUFFER DENGAN KONDISI MENULIS (TIMPA) ===================================// //

// var fs = require('fs')

// var data = "This is a new text with write stream" // //buat tulisan nya

// var writerStream = fs.createWriteStream('kode.txt') // //gunakan function write

// writerStream.write(data, 'UTF8')

// writerStream.end()

// writerStream.on('finish', function () { // //jika kondisinya telah usai
//     console.log('Write completed');
// })

// writerStream.on('error', function (err) { // //jika kondisinya error
//     console.log(err.stack);
// })

// console.log('Program has ended, check your .txt file');

// //========== BELAJAR MEMBUAT BUFFER DENGAN KONDISI MEMBACA DAN MENULIS (TIMPA) ========================// //

// var fs = require('fs')

// var readerStream = fs.createReadStream('kode.txt') // //membaca isi dari data

// var writerStream = fs.createWriteStream('output.txt') // //menuliskan isi dari data

// readerStream.pipe(writerStream) // //function menghubungkan antara 2 data

// console.log('Program has ended');

// //========== BELAJAR MEMBUAT BUFFER DENGAN KONDISI MEMBACA DAN MENULIS (TIMPA) DENGAN MEMBUAT ZIP UNZIP // //

// var fs = require('fs')

// var zlib = require('zlib') // //gunakan module default dari node.js

// // fs.createReadStream('kode.txt') // //membaca data dari file luar
// //     .pipe(zlib.createGzip()) // //membuat file zip
// //     .pipe(fs.createWriteStream('kodebaru.txt.gz')) // //menuliskan nama zip baru tersebut

// fs.createReadStream('kode.txt.gz') // //membuka isi zip
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('kodebaru.txt'))

// console.log('File Compressed');