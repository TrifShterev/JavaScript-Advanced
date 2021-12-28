//change heading
let elementHeading = document.getElementById('superhero-list-header')
//let addSuperheroElement = document.getElementById('superhero');
elementHeading.textContent += ' Marvel DC';

// show innerHtml or textContent
let section = document.getElementById('superheroes-section');
let sectionText = document.getElementById('superheroes-section');
console.log(section.textContent);
console.log(section.innerHTML);

//change Background
let siteWrapper = document.getElementById('wrapper');
siteWrapper.style.backgroundColor = 'lightblue';

//Add value from input 
function addSuperhero() {
let superHeroInputNameElement = document.getElementById('superhero-input')
let superheroName = superHeroInputNameElement.value;
console.log(superHeroInputNameElement.value);

//Add hero to list
 let superHeroListElement = document.getElementById('superhero-list');
superHeroListElement.innerHTML += `<li class="good">${superheroName}</li>`;

//Delete the value from the input field once we press "Add"
superHeroInputNameElement.value='';
}

//Targeting elements by class returns HtmlCollection
let goodHeroesLiElements = document.getElementsByClassName('good');
console.log(goodHeroesLiElements);
goodHeroesLiElements[0].textContent += ' The Strongest Avenger';//Here we modify the 1 element of the HtmlCollection

//Targeting elements by tag - takes all the elementsof the tag name
let allLiElements = document.getElementsByTagName('li');
console.log(allLiElements);

//Targeting elements by querySelectors returns NodeList
let returnsFirstLiElement = document.querySelector('li');
let returnsAllLiElements = document.querySelectorAll('li');
let returnsAllLiElementsByListIdAndThenClassName = document.querySelectorAll('#superhero-list .good');
console.log(returnsFirstLiElement)
console.log(returnsAllLiElements)
console.log(returnsAllLiElementsByListIdAndThenClassName)

let allSuperHeroesLiElements = document.querySelectorAll('#superhero-list li');

allSuperHeroesLiElements.forEach((x) =>{ //Doesn't work in JUDGE
    console.log(x.textContent)
} )

for (const hero of allSuperHeroesLiElements) {
    console.log('Superhero: ', hero.textContent);
}

//Convert HtmlCollection and NodeList to JS Array
let superheroesJsArray = Array.from(allSuperHeroesLiElements);
let superheroesJsArray2 = [...allSuperHeroesLiElements];

console.log(superheroesJsArray);

//Get parent element and change background 
let bodyElement =  siteWrapper.parentElement;
bodyElement.style.backgroundColor ='lightblue';

//Get child element - returns always HtmlCollection
let superheroListElement = document.getElementById('superhero-list');
let childrenElements = superheroListElement.children;
console.log('**ChildrenElements**');
console.log(childrenElements);

//Hide and show elements 
function toggleSuperHeroes() {
    let toggleBtnElement = document.getElementById('toggle-heroes-btn');

    if (superheroListElement.style.display=='none') {
        superheroListElement.style.display='block';
        toggleBtnElement.textContent='Hide';

    } else {
        superheroListElement.style.display='none';
        toggleBtnElement.textContent='Show'
    }  

}

//Take every second element (stripe style)

let evenHeroes = document.querySelectorAll('#superheroes-section li:nth-of-type(2n)');
for (const hero of evenHeroes) {
    hero.style.backgroundColor = 'lightgray';
}