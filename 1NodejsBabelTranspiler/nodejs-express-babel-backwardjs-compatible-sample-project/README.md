# 1. Create React project using node-package-manager
    cmd:> npm init -y

# 2. Add nodemon development dependency for auto change reload.
    cmd:> npm install -D nodemon
    | or |
    cmd:> npm install --save-dev nodemon

# 3. Add babel transpiler development dependency for support New and Old javascript feature together without any issue. @babel will translate New javascript syntax in old source-code format.
    cmd:> npm install -D @babel/core @babel/cli @babel/node @babel/preset-env
    | or |
    cmd:> npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

# 4. Add babel config file name as .babelrc
    1. Create .babelrc file in project root folder.
    2. Add configurations based on you project need.

# 5. Add custom script for run babel with node application.
    package.json file
    {
        "scripts" : {
            "start" : "nodemon --exec babel-node index.js"
        }
    }

# 6. Added sample express server dependency for test code.
    cmd:> npm install express

# 7. Run project with different different scripts.
    cmd:> npm start
    cmd:> npm run start:dev
    cmd:> npm run start:babel-node
    cmd:> npm run start:nodemon-babel-node

# 8. Added Docker support.
    1. Created dockerfile for build image.
    2. added .dockerignore file for skip file/folder in container image.
    cmd:> docker build --pull --rm -f "dockerfile" -t sample-nodejs-project:latest "." 