/**
 * 
 * @param {array} jsonDataArr 
 * @param {string} findData 
 * @returns 
 */

function solve(jsonDataArr,findData){
    
let   keyValue = findData.split("-");
let [keyInput,valueInput] = keyValue;

let result =[];
for(let item of jsonDataArr){

  if(item.hasOwnProperty(keyInput) && item[keyInput] === valueInput) {
    
result.push(item);
  }

}

let resultati = [];
for(let item of result){

  resultati.push(`${result.indexOf(item)}. ${item[`first_name`]} ${item[`last_name`]} - ${item[`email`]}`);
}

return resultati.join("\n");
}


const criteria = `gender-Female`
const data = JSON.parse(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`);

  solve(data,criteria);