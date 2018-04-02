## Promises
* Define and describe asynchrounous
* Define and describe promises


- What are they
    -then
-How and when to use them?
-How are the related to callbacks?
-Why do we need them?



* Define and describe asynnchronous
-happens one at a time


+ Asynchronous means that the code runs one at a time;
    + outside the normal order of things
    + something gthat happens after something else happens, and not exactly in that order
        - something specific = ajax, db, setTimeout or any long running operation
+ doesn't run from top to bottom
+ with AJAX requests, it is not done immediately and takes time
+ thus a promise/callback function waits for the thing to be done and the code in the funciton will be carried out
+ 

+ Proises are built into browsers and makes dealing with callbacks nicer
+ Promises represents a value that will be resolved in the future
    - write the promise and then write .then as what you would like it ot do when the request is resolved

    .catch()= if the promise had an error it would be seen in the .catch
    when using promises, alwasy do a .catch()