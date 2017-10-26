DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
	department_name VARCHAR(45) NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro", "Electronics", 1200.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter and the Philosophers Stone", "Books", 13.00, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Awesome Poster", "Posters", 6000.00, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Pit", "Yard and Garden", 87.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pancake Mix", "Food", 3.00, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouse", "Electronics", 29.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Outdoor Christmas Lights", "Yard and Garden", 15.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plate Set", "Home", 18.00, 380);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", 999.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kombucha Starter", "Bacteria", 10.00, 10);
