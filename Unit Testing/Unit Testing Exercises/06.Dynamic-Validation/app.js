function validate() {
    let input = document.getElementById('email');
    let pattern = /^\w+@\w+.\w+$/gm;

    input.addEventListener('change',(e)=>{

        if (!pattern.test(input.value)){
            e.target.classList.add('error')
        }else{
            e.target.removeAttribute('class')
        }
    })
}