function solve() {
    let divElements = document.querySelector('#container').children;

    let inputs = Array.from(divElements).slice(0, divElements.length - 1);
    let btnOnScreen = Array.from(divElements).slice(-1)[0];
    let ulArchive = document.querySelector('#archive ul');
    let btnClear = document.querySelector('#archive>button');    


function deleteCurrent(e){
e.target.parentNode.remove();


}

function clear(e) {
  let element =  e.target.parentNode.querySelector('ul');
  element.innerHTML='';
  
 
}

    function archive(e) {
        let multiplicator = e.target.previousSibling;
        
       let pricePerTicket = e.target.parentNode.querySelector('strong').textContent;
        let perTicket = Number(pricePerTicket);

        let title = e.target.parentNode.parentNode.querySelector('span').textContent;


        if (!Number(multiplicator.value)|| multiplicator.value==0) { return ; }

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = title;
        li.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = `Total amount: ${(perTicket * multiplicator.value).toFixed(2)}`;
        li.appendChild(strong);

        let btnDelete = document.createElement('button');
        btnDelete.textContent = `Delete`;
        btnDelete.addEventListener('click',deleteCurrent);
        li.appendChild(btnDelete);

        ulArchive.appendChild(li);

        let deleteLiFromMovieSection = e.target.parentNode.parentNode;
        deleteLiFromMovieSection.remove();
        

        
    }

    function addListItem(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (!name || !hall || !price) {
            return console.log('Please enter all values');
        }

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        let ul = document.querySelector('#movies>ul');

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);

        let div = document.createElement('div');
        let innerStrong = document.createElement('strong');
        innerStrong.textContent = price.toFixed(2);

        let inputInDiv = document.createElement('input');
        inputInDiv.setAttribute('placeholder', 'Tickets Sold');

        let btnArchive = document.createElement('button');
        btnArchive.textContent = `Archive`;
        btnArchive.addEventListener('click', archive);

        div.appendChild(innerStrong);
        div.appendChild(inputInDiv);
        div.appendChild(btnArchive);

        li.appendChild(div);
        ul.appendChild(li);


    }


    btnOnScreen.addEventListener('click', addListItem);
    btnClear.addEventListener('click', clear);
}