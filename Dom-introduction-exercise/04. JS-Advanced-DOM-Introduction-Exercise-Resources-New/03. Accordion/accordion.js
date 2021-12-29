function toggle() {
    let btn = document.getElementsByClassName('button')[0];   

    let text = document.getElementById('extra');

    if (text.style.display == 'none') {
        text.style.display = 'block';
        btn.textContent = 'Less'
        
    } else {
        text.style.display = 'none';
        btn.textContent = 'More';
    }

    //Second solution with ternary operator:
    // btn.textContent = 'More' ? 'Less' : 'More';
    // text.style.display = text.style.display == 'block' ? 'none' : 'block';
}