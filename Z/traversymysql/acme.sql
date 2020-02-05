-- Buat Table dengan data berikut:
-- CREATE TABLE users(
-- id INT AUTO_INCREMENT,
--    first_name VARCHAR(100),
--    last_name VARCHAR(100),
--    email VARCHAR(50),
--    password VARCHAR(20),
--    location VARCHAR(100),
--    dept VARCHAR(100),
--    is_admin TINYINT(1),
--    register_date DATETIME,
--    PRIMARY KEY(id)
-- );

-- Untuk menampilkan semua data dari sebuah tabel
SELECT * FROM acme.users;

-- Untuk memasukan data dari query
INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) values ('Brad', 'Traversy', 'brad@gmail.com', '123456','Massachusetts', 'development', 1, now());
INSERT INTO users (first_name, last_name, email, password, location, dept,  is_admin, register_date) values ('Fred', 'Smith', 'fred@gmail.com', '123456', 'New York', 'design', 0, now()), ('Sara', 'Watson', 'sara@gmail.com', '123456', 'New York', 'design', 0, now()),('Will', 'Jackson', 'will@yahoo.com', '123456', 'Rhode Island', 'development', 1, now()),('Paula', 'Johnson', 'paula@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now()),('Tom', 'Spears', 'tom@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now());

-- Untuk menampilkan bebrapa row data
SELECT first_name, last_name FROM users;

-- Untuk menampilkan data berdasarkan kriteria tertentu
SELECT * FROM users WHERE location='Massachusetts';
SELECT * FROM users WHERE location='Massachusetts' AND dept='sales';
SELECT * FROM users WHERE is_admin = 1;
SELECT * FROM users WHERE is_admin > 0;

--  Untuk menghapus sebuah row berdasarkan kriteria tertentu
DELETE FROM users WHERE id = 6;

-- Untuk memperbarui isi sebuah row
UPDATE users SET email = 'freddy@gmail.com' WHERE id = 19;

-- Untuk membuat sebuah column data baru. Kemudian mengubah karakteristik column data tersebut (Varchar ke Integer)
ALTER TABLE users ADD age VARCHAR(3);
ALTER TABLE users MODIFY COLUMN age INT(3);

-- Untuk menampilkan data berdasarkan urutan column tertentu
SELECT * FROM users ORDER BY last_name ASC;
SELECT * FROM users ORDER BY last_name DESC;

-- Untuk menggabungkan 2 isi column menjadi sebuah row, dan data column yang sesuai
SELECT CONCAT(first_name, ' ', last_name) AS 'Name', dept FROM users;

-- Untuk menampilkan apa saja isi data pada sebuah column (tidak menampilkan data yang ganda)
SELECT DISTINCT location FROM users;
SELECT DISTINCT is_admin FROM users;

-- Untuk menampilkan data berdasarkan kriteria antara
SELECT * FROM users WHERE age BETWEEN 20 AND 25;

-- Untuk menampilkan data tertentu dengan urutan huruf tertentu
SELECT * FROM users WHERE dept LIKE 'd%';
SELECT * FROM users WHERE dept LIKE 'dev%';
SELECT * FROM users WHERE dept LIKE '%t';
SELECT * FROM users WHERE dept LIKE '%e%';

-- Untuk menampilkan data berdasarkan sebuah column, dan isi data tertentu
SELECT * FROM users WHERE dept IN ('design', 'sales');

-- Membuat index file baru, kemudian menghapusnya
CREATE INDEX LIndex On users(location);
DROP INDEX LIndex ON users;

-- Membuat table baru dengan kategorinya
CREATE TABLE posts(
id INT AUTO_INCREMENT,
   user_id INT,
   title VARCHAR(100),
   body TEXT,
   publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id),
   FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Memasukan data kedalam tabel
INSERT INTO posts(user_id, title, body) VALUES (1, 'Post One', 'This is post one'),(3, 'Post Two', 'This is post two'),(1, 'Post Three', 'This is post three'),(2, 'Post Four', 'This is post four'),(5, 'Post Five', 'This is post five'),(4, 'Post Six', 'This is post six'),(2, 'Post Seven', 'This is post seven'),(1, 'Post Eight', 'This is post eight'),(3, 'Post Nine', 'This is post none'),(4, 'Post Ten', 'This is post ten');

-- Menampilkan seluruh data tabel
SELECT * FROM posts;

-- Menghapus isi table berdasarkan column tertentu dengan keterangan antara
DELETE FROM posts WHERE id BETWEEN 11 AND 20;

-- Menggabungkan 4 column dari 2 tabel. Dimana row dicocokan berdasarkan id antara 2 column table, serta diurutkan berdasarkan column tertentu
SELECT
  users.first_name,
  users.last_name,
  posts.title,
  posts.publish_date
FROM users
INNER JOIN posts
ON users.id = posts.user_id
ORDER BY posts.title;

-- Membuat table baru dengan kategorinya
CREATE TABLE comments(
	id INT AUTO_INCREMENT,
    post_id INT,
    user_id INT,
    body TEXT,
    publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) references users(id),
    FOREIGN KEY(post_id) references posts(id)
);

-- Menampilkan seluruh isi data dari tabel
SELECT * FROM comments;

-- Memasukan data ke tabel dengan kategorinya
INSERT INTO comments(post_id, user_id, body) VALUES (1, 3, 'This is comment one'),(2, 1, 'This is comment two'),(5, 3, 'This is comment three'),(2, 4, 'This is comment four'),(1, 2, 'This is comment five'),(3, 1, 'This is comment six'),(3, 2, 'This is comment six'),(5, 4, 'This is comment seven'),(2, 3, 'This is comment seven');

-- Menggabungkan 2 tabel dengan metode left join (dimana seluruh isi column tabel yang dipanggil pertama akan tampil semua).
-- Dimana row dicocokan berdasarkan id antara 2 column table, serta diurutkan berdasarkan column tertentu
SELECT
comments.body,
posts.title
FROM comments
LEFT JOIN posts ON posts.id = comments.post_id
ORDER BY posts.title;

-- Menggabungkan 2 tabel dengan metode right join (dimana seluruh isi column tabel yang dipanggil kedua akan tampil semua).
-- Dimana row dicocokan berdasarkan id antara 2 column table, serta diurutkan berdasarkan column tertentu
SELECT
comments.body,
posts.title
FROM comments
RIGHT JOIN posts ON posts.id = comments.post_id
ORDER BY posts.title;

-- Menggabungkan 4 column dari 3 tabel. Dimana row dicocokan berdasarkan id antara column 2 table, serta diurutkan berdasarkan column tertentu
SELECT
comments.body,
posts.title,
users.first_name,
users.last_name
FROM comments
INNER JOIN posts on posts.id = comments.post_id
INNER JOIN users on users.id = comments.user_id
ORDER BY posts.title;

-- Menampilkan isi sebuah column berdasarkan modifikasi yang dibuat
SELECT COUNT(id) FROM users;
SELECT MAX(age) FROM users;
SELECT MIN(age) FROM users;
SELECT SUM(age) FROM users;
SELECT UCASE(first_name), LCASE(last_name) FROM users;

-- Menampilkan sebuah isi column dengan menghitung berapa jumlahnya (metode GROUP), dengan modifikasi tertentu
SELECT age, COUNT(age) FROM users GROUP BY age;
SELECT age, COUNT(age) FROM users WHERE age > 20 GROUP BY age;
SELECT age, COUNT(age) FROM users GROUP BY age HAVING count(age) >=2;
SELECT location, COUNT(location) FROM users WHERE location = 'New York' GROUP BY location;