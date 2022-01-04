function deleteByEmail() {
    //Get the elements needed to delete
    let elements = Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    let result = document.getElementById('result');
    //get the text from the input
    let emailField = document.querySelector('input[name="email"]');
    let emailText = emailField.value;
   

   
    //Delete the tag which contains the matches
    for (const element of elements) {
        
       if (emailText==element.textContent) {
           result.textContent='Deleted'
           element.parentNode.remove();
           return;

       } else {
           result.textContent='Not found.'
       }
    }
}