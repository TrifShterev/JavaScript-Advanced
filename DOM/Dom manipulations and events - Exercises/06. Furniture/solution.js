function solve() {

/* # cofigure event listeners # */
//first button -#table generation#
//second button -#buy furniture#
const table = document.querySelector('table.table tbody');

const[input, output] = Array.from(document.querySelectorAll('textarea'));
const[generatBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

generatBtn.addEventListener('click', generate);
buyBtn.addEventListener('click', buy);

  /* # table generation # */
  function generate(e){
    //read input JSON and parse it 
const data = JSON.parse(input.value);

for (const item of data) {
  const row = document.createElement('tr');

  row.appendChild(createCell('img',{src: item.img}));
  row.appendChild(createCell('p',{}, item.name));
  row.appendChild(createCell('p',{}, item.price));
  row.appendChild(createCell('p',{}, item.decFactor));
  row.appendChild(createCell('input',{type: 'checkbox'}));

  table.appendChild(row);
}
  }
  
  //from every element from the JSON, this function create table row.
function createCell(nestedTag, props, content){

  const cell = document.createElement('td');
  const nested = document.createElement(nestedTag);

  for (const prop in props) {
    
     nested[prop] = props[prop];    
    
  }

  if (content) {
    nested.textContent = content;
  }

  cell.appendChild(nested);

  return cell;
}

  /*# buy furniture # */
  function buy(e){

    //select all checkboxes.
    //filter only selected checkboxes.

    const furniture = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
      //repeat for every checkbox:
      //--select parent row 
      //--read item information 
      .map(b => b.parentElement.parentElement)
      .map(row => ({
        name: row.children[1].textContent,
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent)
      }));

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (const item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }


    //--print output
    const result =`Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactor / furniture.length}`

    output.value = result;
  }
}