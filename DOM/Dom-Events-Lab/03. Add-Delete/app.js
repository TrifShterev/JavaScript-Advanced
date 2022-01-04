function addItem() {
    //Take the necessary item from the DOM
    let inputElement = document.getElementById('newItemText');
    let text = inputElement.value;
    inputElement.value= '';
    //Create new element and insert the value from the input element
    let newElement = document.createElement('li');
    newElement.textContent = text;

    //Create the new a-link element and append it to the LI element
    let button = document.createElement('a');
    button.textContent= '[Delete]';
    button.href= '#';
    newElement.appendChild(button);

    button.addEventListener('click',deleteItem);
    //append the new element to the DOM
    let list = document.querySelector('ul');
    list.appendChild(newElement);

    function deleteItem(event) {
       event.target.parentNode.remove();
    }
}