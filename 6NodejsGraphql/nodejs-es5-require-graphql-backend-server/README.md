GraphQL underlying architecture is REST -> POST request with Query|Mutation|Subscription

Steps: Project Creation
> npm init -y
| or |
> npm init --yes
> create server.js file

```
Install project dependencies
``` 
> npm install express 
> npm install mongoose
> npm install @apollo/server graphql

```
appollo graphql version : 3
``` 
> npm install express mongoose @apollo/server
> npm uninstall express mongoose @apollo/server

```
appollo graphql version : 4
``` 
> npm install express mongoose graphql apollo-server apollo-server-express

```
install development dependencies nodemon for on-change reload automatically.
``` 
> npm install --save-dev nodemon

package.json => add below property to support import
{
    "type" : "module"
}

Getting below error
PS C:\nodejs-learning\6NodejsGraphql\nodejs-graphql-backend-server> node server3.js
file:///C:/nodejs-learning/6NodejsGraphql/nodejs-graphql-backend-server/Schema/Resolvers.js:1
         ^^^^^^^^
SyntaxError: The requested module '../data/FackData.js' does not provide an export named 'bookList'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:127:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:191:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
    
> npm start
> | or |
> node server.js