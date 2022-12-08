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

- CommonJS: package.json => Default NodeJS supports CommonJS and no need to add below property to support require/module.exports.
```
#package.json
{
    "type" : "CommonJS"
}

### Getting below error: ###

PS C:\nodejs-learning\6NodejsGraphql\nodejs-es5-require-graphql-backend-server> node server3.js
(node:21508) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
C:\nodejs-learning\6NodejsGraphql\nodejs-es5-require-graphql-backend-server\server3.js:1
import { ApolloServer } from '@apollo/server';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1032:15)
    at Module._compile (node:internal/modules/cjs/loader:1067:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
PS C:\nodejs-learning\6NodejsGraphql\nodejs-es5-require-graphql-backend-server>

Solutions:
1. Changed export {} to module.exports = {} for require syntax.
2. Change all import syntax to require for CommonJS.
```

- Tutorial Video Reference:
    [![SC2 Video](https://img.youtube.com/vi/xCzm1bbOpfw/0.jpg)](https://www.youtube.com/watch?v=xCzm1bbOpfw)
    
    [![SC2 Video](https://img.youtube.com/vi/xUQ-hNRHCgs/0.jpg)](https://www.youtube.com/watch?v=xUQ-hNRHCgs)

- JavaScript Learning & CommonJS Vs ES-Modules Import/Export and require/module.exports differences:
  
https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

[![SC2 Video](https://img.youtube.com/vi/UjPRIahS3Lc/0.jpg)](https://www.youtube.com/watch?v=UjPRIahS3Lc)

[![SC2 Video](https://img.youtube.com/vi/FDZIt1MDuBI/0.jpg)](https://www.youtube.com/watch?v=FDZIt1MDuBI&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG&index=12)

[![SC2 Video](https://img.youtube.com/vi/DOb6T0heqJQ/0.jpg)](https://www.youtube.com/watch?v=DOb6T0heqJQ)

[![SC2 Video](https://img.youtube.com/vi/vGEnYyO_r2g/0.jpg)](https://www.youtube.com/watch?v=vGEnYyO_r2g)

[![SC2 Video](https://img.youtube.com/vi/mQXFavXUcUo/0.jpg)](https://www.youtube.com/watch?v=mQXFavXUcUo)

[![SC2 Video](https://img.youtube.com/vi/1Jh5fUmk0U0/0.jpg)](https://www.youtube.com/watch?v=1Jh5fUmk0U0)