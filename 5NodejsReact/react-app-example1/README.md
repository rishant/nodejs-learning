# We need to  uninstall create-react-app globally.
> npm uninstall -g create-react-app

```
Note that the development build is not optimized.
To create a production build, use ***npm run build***.

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment
```
# React production build deployment on Nginx Server.

**Nginx Setup on Windows**

    copy nginx*.zip into some directory and add that path into system variables.
    Goto that path and Run below command's for Start/Stop server.

**Start Server**

    cmd:/> nginx.exe

**Stop Server**

    cmd:/> nginx.exe -s quit
    | or |
    cmd:/> wmic process where name='nginx.exe' delete


| React-App basic working: | |
| ----------- | ----------- |
| [![SC2 Video](https://img.youtube.com/vi/42xdvj-hPX8/0.jpg)](https://www.youtube.com/watch?v=42xdvj-hPX8) | [![SC2 Video](https://img.youtube.com/vi/aBIR4suUbV4/0.jpg)](https://www.youtube.com/watch?v=aBIR4suUbV4&list=PL-6FWL4WVVWUR5BZKA1qn7WZ-7u9Z9Q5K) |

### Sample github project using create-react-app:
> https://github.com/Sanjeev-Thiyagarajan/node-docker \
> https://github.com/Sanjeev-Thiyagarajan/docker-node-practice

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
> - Class based components

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
> [ React Props & React Hooks -or- **Redux** ]

# Class based components 
> [ React Props & State ]

# Props
> Make reusable component using :: Parent -> to -> Child parameter (variable|object|function) parssing.

# React State Lifecycle Management:
![IMG](react_state_lifecycle.png)

# Component Event Handling or State Management.
# 2 Way Data Binding.
# React Lifecycle Management.
# Redux State Lifecycle Management.

# React State VS Redux State:
> 1. React State (Local State Store) and Redux State (Global State Store) 
> 2. React State Changes come from child to parant of parent's propagate but in Redux State We can directly propagate to Subscribe Components.

[![SC2 Video](https://img.youtube.com/vi/kkuq0gTGRFQ/0.jpg)](https://www.youtube.com/watch?v=kkuq0gTGRFQ)

# Migration from class based components to Funtion based components:

[![SC2 Video](https://img.youtube.com/vi/OACngUCAvNU/0.jpg)](https://www.youtube.com/watch?v=OACngUCAvNU&list=PLStdkmnF3FJVuyAHpIFCGOsBXUWxuovQK&index=14)

# Create ReactWebApp without using 'npx create-react-app' from Scratch: 

||||
| ----------- | ----------- | ----------- |
| [![SC2 Video](https://img.youtube.com/vi/WDpxqopXd9U/0.jpg)](https://www.youtube.com/watch?v=WDpxqopXd9U) | [![SC2 Video](https://img.youtube.com/vi/h3LpsM42s5o/0.jpg)](https://www.youtube.com/watch?v=h3LpsM42s5o) | [![SC2 Video](https://img.youtube.com/vi/aT1rkp1UJ00/0.jpg)](https://www.youtube.com/watch?v=aT1rkp1UJ00) |

# React + Express Communication: 

|||
| ----------- | ----------- |
| [![SC2 Video](https://img.youtube.com/vi/JSUGAttC1e0/0.jpg)](https://www.youtube.com/watch?v=JSUGAttC1e0) | |
