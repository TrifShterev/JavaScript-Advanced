function notify(message) {
  let notified = document.querySelector('#notification');
  notified.textContent = message;
  notified.style.display = 'block';

  notified.addEventListener('click',(e) => {
    e.target.style.display='none'
  })

}