# jsonTester
It tests for valid json and returns response or error accordingy

#Running and deploying:
- Download the repository in zip format or just clone it.
- Hit 'npm install' inside the repo to download all the dependencies for the module.
- 'npm start' or just 'nodemon' starts the script.
- 'npm test' runs the test script.

#Basic knowledge
- Express was used as the main mediator for the backend.
- Gulp as main task scheduler.
- Mocha and Chai as main unit testers.
- Postman as request response handler.

#Testing:
 - It was normally used for basic testing in localhost using postman.
 - Unit testing done using 'mocha' and 'chai', the test script can be found at build/tests or src/tests
 - The test scripts are pure javascript, no ecmascript involved.
 
 #Code linting and compiling.
 - Various parts of the code were also written using ecmascript. Babel transpiler was used for transpiling to pure javascript code.
 - ESlint was used in all the files except test files for code linting.
 
'Gulp' was used for all tasks including 'Code linting' and 'Code transpiling' 

As a very good code explains itself not much comments have been used in the application. 
Read the code for yourself to explore the depths.

Application starts at port 3000 unless a PORT environment is fed while starting the system.
Note: The test scripts always test port 3000, change the tests script's 'host' if port or host was changed.
