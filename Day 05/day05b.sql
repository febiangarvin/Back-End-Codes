-- mengaktifkan database
use wijaya_elektronik;

-- untuk menampilkan semua isi tabel
select * from karyawans;

--  untuk menampilkan column tertentu dengan kondisi
select nama, usia from karyawans where kota='solo';

-- melimitasi row yang tampil (angka  pertama menunjukan row ke berapa yang tampil setelah angka itu, 
-- angka kedua menunjukan berapa jumlah row yang tampil)
select * from karyawans limit 4,2;

-- membuat column baru dengan kondisi baru
select nama , 0.5 * berat as setengahBerat from karyawans;

-- membuat column baru dengan kondisi baru dengan mengurutkan tabel tersebut berdasarkan sebuah data/parameter
select kota , 0.5 * berat as setengahBerat from karyawans order by nama;

-- menampilkan data column dengan kondisi mengurutkan sebuah column data berdasarkan besar ke kecil
select kota from karyawans order by berat desc;

-- menampilkan data column dengan kondisi mengurutkan 2 column data berdasarkan kecil ke besar
-- namun dengan tambahan column data (maka, apabila telah diurutkan dengan column data pertama
-- masih ada yang sama, akan diurutkan lagi dengan data column kedua)
select * from karyawans order by usia, kota;

-- menampilkan data yang diurutkan berdasarkan field yang telah ditentukan
select* from karyawans order by field(kota, 'solo', 'bandung', 'lebak', 'medan', 'depok');

-- menampilkan seluruh data dengan kondisi tertentu (lebih besar, kecil, dll)
select * from karyawans where id > 2;

-- menampilkan seluruh data dengan 2 kondisi tertentu
select * from karyawans where id > 2 or berat > 70;

-- menampilkan seluruh data dengan 2 data tertentu
select * from karyawans where tahun in (1995, 2000);

-- menampilkan seluruh data dengan kondisi data tertentu dengan tulisan tertentu (yang di sortir huruf di depan %)
select * from karyawans where nama like 'bo%';

-- menampilkan seluruh data dengan kondisi data tertentu dengan tulisan tertentu (yang di sortir huruf di antara %)
select * from karyawans where nama like '%ri%';

-- menampilkan seluruh data dengan kondisi data tertentu dengan tulisan tertentu (yang di sortir huruf di belakang %)
select * from karyawans where nama like '%sa';

select kota, count(*) as jumlah_karyawan from karyawans group by kota;

select * from toko_cabang;

select * from karyawans join toko_cabang;

select * from toko_cabang join karyawans;