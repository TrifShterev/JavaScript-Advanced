function search() {
   // 1. Select  elements
   let textInputElement = document.querySelector('#searchText')
   //a.get all li's elements
   let listOfLiElements = Array.from(document.querySelectorAll('#towns li'));

   //2. Parse txt from input box
   let inputText = textInputElement.value;
   //3.Main logic:
   //a. clear the search box
   listOfLiElements.forEach(el=> {
      el.style.fontWeight = 'normal',
      el.style.textDecoration = 'none';
   })
   //b. filter all li elements which match the search textContent
   //c. bold and underline the maches
   let targetList = listOfLiElements.filter(el=> el.textContent.toLowerCase().includes(inputText.toLowerCase()))   
   .map(el=> {
      el.style.fontWeight = 'bold';
      el.style.textDecoration = 'underline';
   });

   //d. show number of matches in result div
   let result = document.getElementById('result');
   result.textContent = `${targetList.length} matches found`;

   
}
