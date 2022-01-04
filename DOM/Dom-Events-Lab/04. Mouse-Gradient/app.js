function attachGradientEvents() {
   let gradient = document.getElementById('gradient');
   gradient.addEventListener('mousemove', onMouseOver);
   let result = document.getElementById('result');

   function onMouseOver(e) {
       let box = e.target;
       let offset = Math.floor(e.offsetX / box.clientWidth * 100);

      
       result.textContent =`${offset}%`
   }
}