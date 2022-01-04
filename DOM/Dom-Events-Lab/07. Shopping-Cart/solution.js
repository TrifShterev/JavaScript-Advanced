function solve() {
    //get the name and the price of the products
    let output = document.querySelector('textarea');
    let cart = [];
   //get the buttons and add event listeners 
  document.querySelector('.shopping-cart')
    .addEventListener('click', onClick);

  document.querySelector('.checkout')
      .addEventListener('click', checkout);
     

   output.value = '';

   function onClick(e) {
      if (e.target.tagName == 'BUTTON' && e.target.classList.contains('add-product')) {
         const product = e.target.parentNode.parentNode;

         const name = product.querySelector('.product-title').textContent;

         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         })
         //When ADD is clicked append the current product to the textarea
         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }

   }

   //When the button "Checkout" is clicked, calculate the total money 
   function checkout(e) {
      let products = new Set();
      cart.forEach(p => products.add(p.name));

      let total = cart.reduce((acc, pr) => acc + pr.price, 0);

      //Append the result to the textarea in the following format: "You bought {list} for {totalPrice}."
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`

      //After clicking over "Checkout" and every from above is done you should disable all buttons
      //TODO
e.target.removeEventListener("click",checkout);
   }


}