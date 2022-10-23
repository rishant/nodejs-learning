// ###########################################
// Single database with all tables.
// ###########################################

mysql> CREATE DATABASE IF NOT EXISTS mysqltestdb;
mysql> USE mysqltestdb;
mysql> CREATE TABLE `items` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

mysql> CREATE TABLE IF NOT EXISTS `tutorials` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255),
  `published` BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

mysql> CREATE TABLE IF NOT EXISTS `products` (
   `product_id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `product_name` VARCHAR(50),
   `retail_price`  DOUBLE
) ENGINE = InnoDB;

// ###########################################
// Multiple databases with single table.
// ###########################################
// 1. different databases in mysql server.
// 2. different databases in different db servers, Such as MySQL, MariaDB, PostgresSQL, etc.

mysql> CREATE DATABASE itemdb;
mysql> USE itemdb;
mysql> CREATE TABLE `itemdb`.`items` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
mysql> ALTER TABLE `itemdb`.`items` ADD PRIMARY KEY (`id`);
mysql> ALTER TABLE `itemdb`.`items` MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
mysql> INSERT INTO `itemdb`.`items` (`id`, `title`, `body`) VALUES
(1, 'Title 1', 'Body 1'),
(2, 'Title 2', 'Body 2'),
(3, 'Title 3', 'Body 3'),
(4, 'Title 4', 'Body 4');
mysql> SELECT * FROM `itemdb`.`items`;

mysql> CREATE DATABASE tutorialdb;
mysql> USE tutorialdb;
mysql> CREATE TABLE IF NOT EXISTS `tutorialdb`.`tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
mysql> INSERT INTO `tutorialdb`.`tutorials` (`title`, `description`, `published`) VALUES
('Java 8', 'Java 8 Features'),
('Node 16', 'NodeJS javascript engine'),
('ExpressJS', 'NodeJS Web Application Framework'),
('Springboot 2.x', 'Java Web Application Framework');
mysql> SELECT * FROM `tutorialdb`.`tutorials`;

mysql> CREATE DATABASE my_shop;
mysql> USE my_shop;
mysql> CREATE TABLE IF NOT EXISTS `my_shop`.`products` (
    product_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    retail_price  DOUBLE
) ENGINE = InnoDB;
mysql> INSERT INTO products (product_name, retail_price) values ('LEATHER BELT', 18.45);
mysql> INSERT INTO products (product_name, retail_price) values ('BLUETOOTH SPEAKER', 75.95);
mysql> INSERT INTO products (product_name, retail_price) values ('RECHARGEABLE TORCH', 35.85);
mysql> SELECT product_id, product_name, retail_price FROM products;