mkdir src
npm init -y
touch .gitignore readme.md
cd src
touch index.js
mkdir db models routes controllers middlewares utils
cd ..
npm i express mongoose dotenv
npm i express-async-handler
npm i -D nodemon


"scripts" : {
    "dev": "nodemon src/index.js"
}

"type" : "module"
