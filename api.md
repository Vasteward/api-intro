## APIs, Fetch, & Postman
* What is an API?

* Getting started with fetch
* POST request syntax
    -What is each part doing?
* Using postman to make requests

+ API(Application Programming Interface)
     - on the webs 
     - interact iwht it using HTTP requests
        - server sends HTTP responses
+ A way to interact with a program
    - a way to write code that interacts with other programs
    - DOm is an application web interface
+ APi gives you access to databases
+ Fetch is how we interact with those webAPIs in our JavaScript
    - Built into the browser
+ 

 <script> 
    const url = "website address" //don't have to throw the url into a variable
    fetch(url, {options}); //says "hey mr. browser, please make a git request to that url"(laymans terms) "make a request against" (coder language)
    .then(response => response.json)//a way to call the function to evaluate when the data is ready
    //when you get the response, turn response into json, then get access to the json and then log it belows
    console.log(json);//cosnole will say promise saying it will give it when it has it

    const list = document.querySelector('#posts');
    const url = "https://www.random.com/.jsonwwwwww"

    fetch(url)
        .then(parseJson)
        .then(logResult);

    function parseJson(response){
        return response.json();
    }

    function logResult(result){
        const children = result.data.children;

        children.forEach((child) => {
            const li = document.createElement('li');
            li.textContent = child.data.title;
        })
    }
        
</script>

<script>
//we want to listen for when the form is submited
//add an event listern to the form to say , "when thtis form is submitted, make this request" so create a script file 
    <form>
        <label for= "message">Message</label>
        <input type= 'text' name='message' id='message' value=''>
        <buttton type="submit" name="button">Send</button>
    </form>{
    const form = document.querySelector('form');
    console.log(form)

    form.addEvnetListeneer('submit', formSubmitted);

    function formSubmitted(event){
        event.preventDefault(); //to prevent the page from refreshing you will have to prevent the default
        console.log('formSubmitted')

//formData is an object and built into browser(new just indicates taht we are creating an instance of it)
        const formData = new FormData(form); //where we get the data from the form; a way to extract data from the form 
        //must be inthe function so it can have access to the events occuring withing the formSubmitted portion
        const message = formData.get('message')//pass in a name from the form; comes from the html --name must exist for this to work because we know they have submitted into the form
    
        //we need to post an object ot the server that has a message property with some message in it
        
        //will vary depending onthe api
        //ultimately this is the data we are sending to the api
        const data = {
            message
        };
        //create a post request
        sendMessage(data){

        }
        //where we make the fetch request
        function sendMessage(data){
            const url = ""//define url-where we're sending the information
            // const body = JSON.stirnigfy (data)//stringified version of the object-we need to send the stringified version to the server, not the object so it can parse it
            fetch(url, ) {//making a fetch against the url
                method: 'POST',//we are sending data
                body: JSON.stringify(data) //what we are sending to the server
                headers: {
                    'content-type': 'application/json'//server needs to know what we're sending it, the header indicates what it is so it can parse it as the type it is

                }
            }//we want to get a response so we will 
            .then(parseJson).then(showResponse)
        }
        functions parseJson(response){
            return response.json();
        }
        function showResponse(result){
            console.log(result);
        }
    }

</script>
