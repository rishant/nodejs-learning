https://www.workfall.com/learning/blog/how-to-connect-to-mysql-database-and-run-crud-operations-in-node-js/
https://www.youtube.com/watch?v=Xl3msGMwPp0&list=PL2PkZdv6p7Zmu51_FBoNDcv8Bk8bXODvH&index=5
https://www.youtube.com/watch?v=VWpDN1eZUKU&t=126s
https://www.bezkoder.com/node-js-rest-api-express-mysql/
https://www.itsolutionstuff.com/post/node-js-crud-with-mysql-tutorial-exampleexample.html

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
        "code": "ER_NO_SUCH_TABLE",
        "errno": 1146,
        "sqlState": "42S02",
        "sqlMessage": "Table 'mysqltestdb.tutorials' doesn't exist",
        "sql": "SELECT * FROM tutorials"
    }
```