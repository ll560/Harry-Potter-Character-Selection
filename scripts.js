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

// const addHouses = () => {
//     oldElement='description'
//     newClassName='p';
//    const oldElement = document.getElementsByClassName("description"); //get the classname and turns it to array
//    const houses = document.getElementsByClassName("houses")//selects the parent of the element to be replaced
//     houses.replaceChild(newClassName, oldElement);
// }

// document.querySelectorAll('.description') //Do I need to include the dot here or is that only in the console?

// Create a function called emphasize() with one parameter called house. When the user clicks the button labeled with one of the four Hogwarts houses, your function applies the CSS styling associated with the .emphasis class to both the paragraph that describes that house and the people listed below that belong to that house. Example: When you have the HTML file open in the browser, if the user clicks the Gryffindor button at the top, the description of the Gryffindor house and the people in Gryffindor from the list at the bottom will all have blue backgrounds and yellow borders around them. When the user clicks that Gryffindor button again, the styling should disappear. 

const emphasize = (house) => {
    let gryffindor_div= document.querySelector(".house");
    gryffindor_div.querySelector(".description").style.backgroundColor = "blue"; //is that the correct way to add background color?
    return emphasize;
}
