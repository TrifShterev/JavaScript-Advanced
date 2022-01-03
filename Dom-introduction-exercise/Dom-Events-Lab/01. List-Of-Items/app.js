function addItem() {
   //Take the necessary item from the DOM
   let inputElement = document.getElementById('newItemText');
   let text = inputElement.value;
   inputElement.value= '';
   //Create new element and insert the value from the input element
   let newElement = document.createElement('li');
   newElement.textContent = text;
   //append the new element to the DOM
   let list = document.querySelector('ul');
   list.appendChild(newElement);

   
}