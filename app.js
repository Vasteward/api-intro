const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')
const characterAttributes = document.querySelector('.attributes')

// Write a function that GETs information about Luke Skywalker and add his name to the page
getLuke()

//Modify the getLuke Function to also add
  //Luke's hair color
  //Luke's height

function getLuke() {
//Promise chain
  fetch(baseUrl + 'people/1')
    .then(function(response){//then functions as a promise stating that when the information is ready/available, the functin will run and respond with the infromation requested
      console.log(response)
      return response.json()//string of text that presented as an object; turns the response into a meaningful json object
      //when you're making a fetch request, you'll almost always have to turn the initial response into json(which is just an object that is easy for coders to write and machines to read)
    })
    .then(function(data){ //parameter of the function
      var name = data.name;
      var hairColor = data.hair_color;
      var height = data.height;
      console.log(name)//where the meat of what we can do lives
    //create an h2 that has the text of Luke's name
    let luke = document.createElement('h2');
    luke.textContent = name;
    console.log(name)
    characterSection.appendChild(luke)
// Modify the getLuke function to also add:
  // Luke's hair color
  // Luke's height
    // Append these attributes as text in a <li>
    // to the ul with the class of 'attributes'
    let hair = document.createElement('li');
    hair.textContent = hairColor;
    console.log(hairColor)
    characterAttributes.appendChild(hair)

    let heightLuke = document.createElement('li');
    heightLuke.textContent = height;
    console.log(height);
    characterAttributes.appendChild(heightLuke);
    })
}





// Uh oh, Luke's attributes are ABOVE his name!?
  // Explain why this happened
  
  // Modify the getLuke function to ensure Luke's attributes are below his name


// Write a function called getCharacters that:
  // Makes a fetch request to the baseUrl + '/people/ endpoint
  // console.log the resulting response


// Modify the getCharacters function to loop through the results
  // console.log each character in the array
    // (see what you're working with)
  // Capture each character's attributes in variables:
    // name
    // hair color
    // height
  // console.log each variable


// Modify the getCharacters function to append a section for each character
  // Container element (<div> or <section>)
  // <h3> with the character's name
  // <ul> with  <li>s for hair color and height