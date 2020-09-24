CREATE DATABASE middo_naito; 

USE `middo_naito`;

CREATE TABLE users(
id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
first_name VARCHAR(150) NOT NULL,
last_name VARCHAR(150) NOT NULL,
email VARCHAR(200) NOT NULL UNIQUE,
password VARCHAR(200) NOT NULL,
province VARCHAR(150),
location VARCHAR(150),
birthdate VARCHAR(50),
gender VARCHAR(20),
image VARCHAR(200),
alt VARCHAR(200),
admin BOOLEAN NOT NULL,
register_date VARCHAR(50)
); 

CREATE TABLE categories(
id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NOT NULL,
description VARCHAR(150) NOT NULL
); 

CREATE TABLE products (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(500) NOT NULL,
	category_id INT NOT NULL,
    price FLOAT,
    image VARCHAR(200),
    alt  VARCHAR(200),
    FOREIGN KEY (category_id) REFERENCES categories(id)
); 
DELIMITER //
CREATE TRIGGER delete_carts_by_prod BEFORE DELETE ON products FOR EACH ROW 
BEGIN
	DELETE FROM carts WHERE product_id = OLD.id;
	DELETE FROM products_sizes WHERE product_id = OLD.id;
END; //
DELIMITER ;


CREATE TABLE sizes (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(3)
); 

CREATE TABLE products_sizes (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_id INT,
	size_id INT,
    stock INT NOT NULL,
    FOREIGN KEY (size_id) REFERENCES sizes(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
); 
CREATE UNIQUE INDEX idx_ps_si ON products_sizes (product_id, size_id);

CREATE TABLE carts (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    size_id INTEGER,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (size_id) REFERENCES sizes(id)
); 
CREATE UNIQUE INDEX idx_cart_userxproduct ON carts (user_id, product_id);

CREATE TABLE tokens (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
	name VARCHAR(200) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
); 

DELIMITER //
CREATE TRIGGER delete_carts_by_users BEFORE DELETE ON users FOR EACH ROW 
BEGIN
	DELETE FROM carts WHERE user_id = OLD.id;
END; //
DELIMITER ;






