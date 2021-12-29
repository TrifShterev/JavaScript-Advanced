function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // 1. Select  elements
      let searchField = document.querySelector('#searchField');
let searchFieldText = searchField.value;

      let tableRowElements = Array.from(document.querySelectorAll('tbody tr'));

      // 2. Clear previous search styles
      tableRowElements.forEach(el=> el.className = '');

      // 3. Find matching row elements to text search
      //    and Modify style for matching row
      let filteredRows = tableRowElements.filter(el=> {
         let childrenElements = Array.from(el.children);
         if (childrenElements.some(child => child.textContent.includes(searchFieldText))){
            el.className = 'select';
         }
      })
      //Clear the text search box
      searchField.value = '';

   }
}