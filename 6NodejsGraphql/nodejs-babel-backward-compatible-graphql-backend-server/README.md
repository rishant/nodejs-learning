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
# added babel javascript compiler for convert latest ES-6/ES-5 code in to older javascript which will support by all browsers.
cmd:/> npm instal -D @babel/core @babel/cli @babel/node @babel/preset-env
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
- ES-Modules: package.json => add below property to support import/export.
```

Solutions:
1. Used babel compiler to support ES-5 and later Code together which will translate in old javascript syntax.
2. Using babel we can use import & require together in our project.
3. While run project we are using babel-node to transpiler code for backward compatible.
```

- Tutorial Video Reference:
    [![SC2 Video](https://img.youtube.com/vi/xCzm1bbOpfw/0.jpg)](https://www.youtube.com/watch?v=xCzm1bbOpfw)
    
    [![SC2 Video](https://img.youtube.com/vi/xUQ-hNRHCgs/0.jpg)](https://www.youtube.com/watch?v=xUQ-hNRHCgs)

    [![SC2 Video](https://img.youtube.com/vi/65Odh3u8Zf0/0.jpg)](https://www.youtube.com/watch?v=65Odh3u8Zf0)

    [![SC2 Video](https://img.youtube.com/vi/XfaPeimn2S8/0.jpg)](https://www.youtube.com/watch?v=XfaPeimn2S8)

    [![SC2 Video](https://img.youtube.com/vi/AE-TfB6jGtw/0.jpg)](https://www.youtube.com/watch?v=AE-TfB6jGtw)
    

- JavaScript Learning & CommonJS Vs ES-Modules Import/Export and require/module.exports differences:
  
https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

[![SC2 Video](https://img.youtube.com/vi/UjPRIahS3Lc/0.jpg)](https://www.youtube.com/watch?v=UjPRIahS3Lc)

[![SC2 Video](https://img.youtube.com/vi/FDZIt1MDuBI/0.jpg)](https://www.youtube.com/watch?v=FDZIt1MDuBI&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG&index=12)

[![SC2 Video](https://img.youtube.com/vi/DOb6T0heqJQ/0.jpg)](https://www.youtube.com/watch?v=DOb6T0heqJQ)

[![SC2 Video](https://img.youtube.com/vi/vGEnYyO_r2g/0.jpg)](https://www.youtube.com/watch?v=vGEnYyO_r2g)

[![SC2 Video](https://img.youtube.com/vi/mQXFavXUcUo/0.jpg)](https://www.youtube.com/watch?v=mQXFavXUcUo)

[![SC2 Video](https://img.youtube.com/vi/1Jh5fUmk0U0/0.jpg)](https://www.youtube.com/watch?v=1Jh5fUmk0U0)