function create(words) {
   //Get the element from the DOM by ID 
   const content = document.getElementById('content');

   for (const word of words) {
      //create Div element and P element in it.
      const div = document.createElement('div');
      const p = document.createElement('p');

      //set <p> contents
      p.textContent = word;
      //configure <p> elementto be hidden (display: none)
      p.style.display = 'none';
      //add p to div and add div to page/Dom
      div.appendChild(p);

      //cofigure event div listeners 
      div.addEventListener('click', showContent);
      content.appendChild(div);

   }

   function showContent(e) {
      e.currentTarget.children[0].style.display = '';// It can be also p.style.display= 'block'
   }


}