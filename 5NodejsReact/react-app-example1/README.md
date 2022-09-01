### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# we need to  uninstall create-react-app globally.
> npm uninstall -g create-react-app


### Step : 1 - Create React application using create-react-app template.
> npx create-react-app react-app-example1
> ![img_png](img1.PNG) ![img_png](img2.PNG)

> # React App Folder Structure: 
> application dependency [npm command] file : package.json \
> public page [Start] : public/index.html \
> application folder [root] : src \
> application Base [page] : src/index.js \
> application Base [component] : App.js

> Components are the building blocks of React Application. \
> Components are reusable and can be nested in other components 
> # 2 Types of components:
> - Functional components
> - class based components

> JSX - Javascript-XML Template Engine.
> # JSX Restrictions:
> - className we can't use because of javascript keyword.
> - 1 parent container should present for all JSX elements.
> - functional components are not needed explicitly import React class.

# Request Workflow from Client -To- Server
> npm run start \
> http://localhost:3000 \
>  ->   public/index.html (root div)\
>  -->  src\index.js (render App component into root div)\
>  ---> src\App.js ( Props, State, component events load/change/destroy, JSX template )

# Extension/Plugin: [React Component Code Snippets generater]
>    - ES7+ React/Redux/React-Native snippets

# Function based components 
> [ React State Hook using **Redux** ]

# class based components 
> [ React State ]

# Props
> Make Components Reusable via pass Properties

# React State Lifecycle Management:
![IMG](react_state_lifecycle.png)

# Event Handling 
> [ onClick, onChange, onMouseOver, onFocus ] \
> https://www.youtube.com/watch?v=lH92njo0RbM&list=PLStdkmnF3FJVuyAHpIFCGOsBXUWxuovQK&index=11

# 2 Way Data Binding

# Redux State Lifecycle Management:

# React State VS Redux State:
> 1. React State (Local State Store) and Redux State (Global State Store) 
> 2. React State Changes come from child to parant of parent's propagate but in Redux State We can directly propagate to Subscribe Components.

https://www.youtube.com/watch?v=kkuq0gTGRFQ

# Note:
 - Migration from class based components to Funtion based components, We have to change **state** --to--> **state Hook**.
 - Class based component used **state**
 - Function based component used **state Hook**
 - https://www.youtube.com/watch?v=OACngUCAvNU&list=PLStdkmnF3FJVuyAHpIFCGOsBXUWxuovQK&index=14