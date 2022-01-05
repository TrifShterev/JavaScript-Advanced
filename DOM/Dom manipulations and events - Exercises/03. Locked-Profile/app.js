function lockedProfile() {
    //get the toggle('Show more') button and add event listeners to it
    // Array.from(document.querySelectorAll('button')).forEach(button=> button.addEventListener('click', onClick));
    //OR use delegation
    document.querySelector('#main').addEventListener('click', onClick);
    //make function to hide and show the buttons
    function onClick(event) {

        if (event.target.tagName === 'BUTTON') {
            let parent = event.target.parentNode;
            //Check ther radio buttons and if its LOCK - lockout the menu
            const isActive = parent.querySelector('input[type="radio"][value="unlock"]').checked;
           
            if (isActive) {
                if (event.target.textContent === 'Show more') {

                    //change the textContent of the <buttov>
                    event.target.textContent = 'Hide it';

                    parent.querySelector('div').style.display = 'block';

                } else {
                    event.target.textContent = 'Show more';
                    parent.querySelector('div').style.display = '';
                }
            }
        }
    }
//disable the radio button when locked
   const radio =  Array.from(document.querySelectorAll('input[type="radio"]'));
  
    for (const input of radio) {
        input.addEventListener('click', onLockToggle);
    }

    function onLockToggle(e){
        const button = e.target.parentElement.querySelector('button');
console.log(e.target.value);
        if (e.target.value == "lock") {
            
            button.disabled = true;

        } else {
            
            button.disabled= false;
        }
    }


}