const fs = require('fs')

// //========== BELAJAR MEMBACA FILE DENGAN MODULE FILE SYSTEM ==========================================// //

// fs.readFile('./file/kode.txt', { encoding: 'utf8' }, (err, content) => { // //buat function untuk membaca file
//     if (err) return console.log('error');

//     console.log(content);
// })

// //========== BELAJAR MENULIS DATA FILE DENGAN MODULE FILE SYSTEM =====================================// //

// const data = 'Write a file' // //isi data

// fs.writeFile('./file/output.txt', data, (err) => { // //buat function untuk menulis data kepada suatu file
//     if (err) return console.log(err);
// })

// //========== BELAJAR MENULIS DATA FILE DENGAN MODULE FILE SYSTEM SECARA SYNCHRONUS ===================// //

// try {
//     // //tuliskan isi data pada function
//     fs.writeFileSync('./file/output.txt', 'Menulis dengan write file synchronus', { mode: 0o755 })
// }
// catch (err) {
//     console.log(err);
// }

// //========== BELAJAR MENULIS DATA DENGAN BUFFER FILE DENGAN MODULE FILE SYSTEM =======================// //

// var buffer = new Buffer([0x48, 0x65]) // //isi data dengan class buffer (isi data menggunakan binary code)

// fs.writeFile('./file/output.txt', buffer, function (err) {
//     if (err) return console.log(err);
// })

// //========== BELAJAR MELIHAT PERUBAHAN PADA FILE DENGAN MODULE FILE SYSTEM ===========================// //

// const watcher = fs.watch('./file') // //gunakan function watch dari module fs

// watcher.on('change', function (event, filename) { // //buatkan functionnya dengan parameter event serta file yang dilakukan event tersebut
//     console.log(`${event} on file ${filename}`);
// })

// //========== BELAJAR MEMBUAT HTTP DAN MEMBERIKAN DATA =================================================// //

// const http = require('http') // //masukan module yang diperlukan untuk membuat http (module bawaan node js)

// http.createServer(function (req, res) { // //buat function untuk membuat server dengan 2 parameter, request dan response
//     res.writeHead(200, { 'Content-Type': 'text/html' }) // //200 menandakan server berjalan. Kemudian buatkan jenis content yang akan dibuat
//     res.write('Code is running on this browser') // //isi data untuk server
//     res.end()
// }).listen(9000) // //angka (random) untuk localhost, yang akan dibuka pada web browser