Step: 1 - Create nodejs project:
cmd> npm init

Step: 2 - Install project dependency.
cmd> npm install express cors mysql2
cmd> npm install nodemon

Step:3 - start application.
>node server.js
>nodemon server.js
or 
Step:3 - start application using custom script "package.json".
>npm start

Notes:
```
    Database Query Errors:
    {
        code: 'ER_BAD_DB_ERROR',
        errno: 1049,
        sqlState: '42000',
        sqlMessage: "Unknown database 'teama'",
        sql: undefined
    }

    {
        code: 'ER_NO_SUCH_TABLE',
        errno: 1146,
        sqlState: '42S02',
        sqlMessage: "Table 'teama.items' doesn't exist",
        sql: 'SELECT * FROM items'
    }
```

CREATE database if not exists teamA;
USE teamA;
CREATE TABLE `items` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `tutorials` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255),
  `published` BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `products` (
   `product_id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `product_name` VARCHAR(50),
   `retail_price`  DOUBLE
) ENGINE = InnoDB;
