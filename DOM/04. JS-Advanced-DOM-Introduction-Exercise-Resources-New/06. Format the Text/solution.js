function solve() {
  // 1. Select  elements
let textAreaElement = document.getElementById('input');
let resultDiv = document.getElementById('output');
  // 2. Extract txt from text area
  let text = textAreaElement.value;

  // 3. Split text by '.'
  let sentencesArr = text.split('.').filter(x=>x !== '').map(x=>x +'.');

  // 4. Group sentences by 3 in paragraph
  let paragrapRoof = Math.ceil(sentencesArr.length / 3);

  for (let index = 0; index < paragrapRoof; index++) {
 
    // 5. Insert paragraphs into DOM
    resultDiv.innerHTML +=`<p>${sentencesArr.splice(0,3).join('')}</p>`;
  } 
  
}