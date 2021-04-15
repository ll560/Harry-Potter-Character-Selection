const addTitle = () => { //why is this whole function showing in the console log
    
    let title = document.querySelector("h1")
    title.textContent= "Harry Potter Character Selection"
} 
 addTitle();




// Create a function called flexIt(), which should find the first element with the class called 'needFlex' and add the class flexIt to that element and then toggle the flexIt class on and off each time that function is called by the user clicking the button that says "Flex houses".


const flexIt = () => {
    let allElements = document.getElementsByClassName("needFlex");
    allElements[0].classList.toggle("flexIt");
} 
flexIt();



// Create a function called addHouses(), which will find all the paragraphs that have a class called "description" and will set (replace) another class name. The new class name should be the name of the Hogwarts house the text is describing. Example: If the paragraph is about Ravenclaw, find that paragraph and set the class attribute to include ravenclaw as the 2nd class.

const addHouses = () => {
   let oldElement = document.querySelectorAll(".description");

   oldElement[0].setAttribute("class","gryffindor");
   oldElement[1].setAttribute("class","hufflepuff");
   oldElement[2].setAttribute("class","ravenclaw");
   oldElement[3].setAttribute("class","slytherin");
   console.log(oldElement)
    
}

addHouses();


//this how to write it as a for loop. New element would need to be created 
// let newElement= oldElement[i]
//   
//for (let i=0; i<oldElement.length; i++){
    // oldElement[i].classList.add(newElement[i])
    //another way to replace class oldElement[i].classList.add(newElement[i])



// Create a function called emphasize() with one parameter called house. When the user clicks the button labeled with one of the four Hogwarts houses, your function applies the CSS styling associated with the .emphasis class to both the paragraph that describes that house and the people listed below that belong to that house. Example: When you have the HTML file open in the browser, if the user clicks the Gryffindor button at the top, the description of the Gryffindor house and the people in Gryffindor from the list at the bottom will all have blue backgrounds and yellow borders around them. When the user clicks that Gryffindor button again, the styling should disappear. 


// //1. create function to emphasize the paragraph and characters
const emphasize = () => {
    //select the houses   

    let newHouses =document.getElementsByClassName("gryffindor", "hufflepuff", "ravenclaw", "slytherin");
    
    console.log(newHouses)
    //let newHouses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"]-----> why does this not work?
    // console.log(house)
   
    //turn on emphasis for that house 
   
for (let i=0; i<newHouses.length; i++)
newHouses[i].classList.toggle("emphasis");


}
emphasize();