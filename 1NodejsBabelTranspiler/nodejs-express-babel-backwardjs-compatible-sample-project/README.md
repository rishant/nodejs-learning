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

# 9. Build, Run and container-execute-bash docker image
    cmd:/> docker build --pull --rm -f "dockerfile" -t sample-nodejs-project:latest "." 
    cmd:/> docker run -p 3000:3000 -d --name nodejs-babel-container sample-nodejs-project:latest
    cmd:/> docker exec -it nodejs-babel-container bash
    | or | --> direct deploy bash to verify docker container file structure.
    cmd:/> docker run --rm -it -p 3000:3000 -d --name nodejs-babel-container sample-nodejs-project:latest bash

# 10. Run docker image with volume mappping
    - Linux:
        terminal:$> sudo docker run -v $(pwd):/app -p 3000:3000 -d --name nodejs-babel-container sample-nodejs-project:latest
    - windows:
	    cmd:/> docker run -v %cd%:/app -p 3000:3000 -d --name nodejs-babel-container sample-nodejs-project:latest
    -- Issue with docker container volume mapping is not reloaded to file changes, So we have to follow below package.json update.
    
    -- package.json
    {
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node index.js",
            "start:dev": "nodemon --exec node index.js",
            "start:babel-node": "babel-node index.js",
            "start:nodemon-babel-node": "nodemon --exec babel-node index.js"
        }
    }

    -- Change to below
    {
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node index.js",
            "start:dev": "nodemon -L --exec node index.js",
            "start:babel-node": "babel-node index.js",
            "start:nodemon-babel-node": "nodemon -L --exec babel-node index.js"
        }
    }

    -- Issue: if we delete node_modules folder from our local then docker container volume mapping is not able to find that folder so thatw we have to create diffent volume mount for node_modules in docker-run.

	cmd:/> docker run -v %cd%:/app -v /app/node_modules -p 3000:3000 -d --name nodejs-babel-container sample-nodejs-project:latest
    -- Solution: above docker-run will treat /app/node_modules as separate-volume which will not impact on -v %cd%:/app

# 11. Pass Environments Variables in 2 ways:
    -- By --env 
    cmd:/> docker run -v %cd%:/app --env PORT=5000 -p 3000:5000 -d --name nodejs-babel-container sample-nodejs-project:latest

    -- By --env-file
    cmd:/> docker run -v %cd%:/app --env-file ./.env -p 3000:5000 -d --name nodejs-babel-container sample-nodejs-project:latest

# 12. docker-compose.yml file for easy deployment:
    -- Issue: Rebuild image if any changes in "dockerfile" and image is already exist in docker-engine locally.

    cmd:> docker compose  -f "docker-compose.yml" up -d --build sample_project_build_run_container

    -- Solution: Use "--build" attribute for rebuild image using docker-compose build and create/run Container.

# 13. docker-compose for different deployment environments:
    1. docker-compose.dev.yml
    2. docker-compose.prod.yml

- Tutorial Video Reference:
    [![SC2 Video](https://img.youtube.com/vi/9zUHg7xjIqQ/0.jpg)](https://www.youtube.com/watch?v=9zUHg7xjIqQ)
