GraphQL underlying architecture is REST -> POST request with Query | Mutation | Subscription

- Steps: Project Creation
```
cmd:/> npm init -y
| or |
cmd:/>  npm init --yes
create server.js file 
cmd:/>  touch server.js
```

- Install project dependencies
``` 
cmd:/> npm install express 
cmd:/> npm install mongoose
cmd:/> npm install graphql @apollo/server
| or | - apollo graphql version : 4
cmd:/> npm install express mongoose graphql @apollo/server
| or | - apollo graphql version : 3
cmd:/> npm install express mongoose graphql apollo-server apollo-server-express
```

- Install development dependencies.
``` 
# nodemon for on-change reload automatically.
cmd:/> npm install --save-dev nodemon
```

- Create Custom Scripts in package.json.
``` 
#package.json
{
    "scripts": {
        "start:nodemon": "nodemon server3.js"
    }
}

---
cmd:/> npm start
| or |
cmd:/> node server.js
| or |
cmd:/> npm run start:nodemon
```

- ES-Modules: package.json => add below property to support import/export.
```
#package.json
{
    "type" : "module"
}

### Getting below error: ###

PS C:\nodejs-learning\6NodejsGraphql\nodejs-es6-import-graphql-backend-server> node server3.js
file:///C:/nodejs-learning/6NodejsGraphql/nodejs-es6-import-graphql-backend-server/Schema/Resolvers.js:1
         ^^^^^^^^
SyntaxError: The requested module '../data/FackData.js' does not provide an export named 'bookList'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:127:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:191:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Solutions:
1. Changed module.exports = {} to export {} for import syntax.
2. Change all require syntax to import for ES-Modules
```

- Tutorial Video Reference:
    [![SC2 Video](https://img.youtube.com/vi/xCzm1bbOpfw/0.jpg)](https://www.youtube.com/watch?v=xCzm1bbOpfw)

- JavaScript Learning & CommonJS Vs ES-Modules Import/Export and require/module.exports differences:
  
https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

[![SC2 Video](https://img.youtube.com/vi/UjPRIahS3Lc/0.jpg)](https://www.youtube.com/watch?v=UjPRIahS3Lc)

[![SC2 Video](https://img.youtube.com/vi/FDZIt1MDuBI/0.jpg)](https://www.youtube.com/watch?v=FDZIt1MDuBI&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG&index=12)

[![SC2 Video](https://img.youtube.com/vi/DOb6T0heqJQ/0.jpg)](https://www.youtube.com/watch?v=DOb6T0heqJQ)

[![SC2 Video](https://img.youtube.com/vi/vGEnYyO_r2g/0.jpg)](https://www.youtube.com/watch?v=vGEnYyO_r2g)

[![SC2 Video](https://img.youtube.com/vi/mQXFavXUcUo/0.jpg)](https://www.youtube.com/watch?v=mQXFavXUcUo)

[![SC2 Video](https://img.youtube.com/vi/1Jh5fUmk0U0/0.jpg)](https://www.youtube.com/watch?v=1Jh5fUmk0U0)