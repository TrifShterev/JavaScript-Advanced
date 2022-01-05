//Selecting Dom Elements
const element = document.getElementById('selectedId');
document.querySelector('#selectedId');//we can use all methods on the events as well Example: event.target.querySelector('p') will return the first child <p> from the tag where the event is triggered or event.target.children - will return collection of the childs elements.
document.querySelectorAll('ul li'); //will select <ul> and his <li> childs

//Get/Set contents of selected elements
element.textContent = 'setContentOnSomeTag';
const getValueFromInputOrTextareaTag = element.value;

//Traversing Dom Elements
element.parentElement;//OR element.parentNode;
element.children; // OR element.childNodes; Both returns colection of all children

//Create DOM Element
const paragraph = document.createElement('p');

//Adding to DOM Element
element.appendChild(paragraph);

//Removing from DOM Element
paragraph.remove();

//Events
element.addEventListener('click', onClick);

function onClick(event) {
    console.log(event.target);
    event.target.removeEventListener('click', onClick);//this will remove the event listener once the click event is clicked(the event will be triggered only once)
}