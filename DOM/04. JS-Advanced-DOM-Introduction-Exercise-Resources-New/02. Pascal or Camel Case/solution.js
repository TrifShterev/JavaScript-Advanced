function solve() {
  let textElement = document.getElementById('text').value;


  let conventionElement = document.querySelector('#naming-convention');

  let convention = conventionElement.value;

  let result = document.getElementById('result');

  if (convention === 'Camel Case') {
    let text = textElement.toLowerCase()
    .split(' ')
    .map((x,i)=> x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
    .join('');

    result.textContent = text;

  } else if (convention === 'Pascal Case'){
   let text = textElement.toLowerCase()
    .split(' ')
    .map(x=>x[0].toUpperCase() + x.slice(1))
    .join('');

    result.textContent = text;

  }
   else {
    result.textContent = 'Error!';
  }
}