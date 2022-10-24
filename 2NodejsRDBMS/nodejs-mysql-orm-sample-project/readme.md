https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
https://www.youtube.com/watch?v=X5PygyNG71g

!! Project Structure !!
-> package.json
-> server.js 
    -> /utilities/MysqlConnection.js 
    -> /models/tutorial.model.js 
    -> /routers/tutorial.router.js 
    -> /controllers/tutorial.controller.js

Project Setup:
> npm init

Project Dependency:
> npm install express sequelize mysql2 cors

Code Change on Auto Reload DEV dependency:
> npm install nodemon

Interpret & Run Javascript file using nodejs server:
> node .\server.js

Custom Script:
> npm start

Sample Postman Requests:
https://www.bezkoder.com/node-js-express-sequelize-mysql/

Postman:
    Retrieve all Tutorials:
       Get :: http://localhost:8880/api/tutorials
    Create a new Tutorial:
       Post :: http://localhost:8880/api/tutorials