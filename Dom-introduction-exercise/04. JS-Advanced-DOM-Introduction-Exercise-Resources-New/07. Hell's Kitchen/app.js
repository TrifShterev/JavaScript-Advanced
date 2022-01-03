function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // 1. Select  elements for inputs
      let textAreaElement = document.querySelector('#inputs textarea');

      // 2. Extract/Parse data 
      let text = textAreaElement.value;
      let inputArr = JSON.parse(text);


      // 3. Add object to keep restourant and workers data
      let restourants = {};

      // 4. Fill the restourant object with data from the input
      for (let index = 0; index < inputArr.length; index++) {

         let [restourantName, workersString] = inputArr[index].split(' - ');

         let inputWorkers = workersString.split(', ').map(worker => {
            let [name, salary] = worker.split(' ');
            return { name, salary: Number(salary) };
         });

         if (!restourants[restourantName]) {
            restourants[restourantName] = {
               workers: [],
               restourantName: restourantName,
               getAverageSalary: function() {
                  return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length;
               }
            }
         }
         restourants[restourantName].workers = restourants[restourantName].workers.concat(inputWorkers);
      }

      // 5. Calculate best restourant
      let sortedRestourants = Object.values(restourants)
      .sort((a, b) =>b.getAverageSalary() - a.getAverageSalary());      

      let bestRestourant = sortedRestourants[0];
      let averageSalary = bestRestourant.workers.reduce((acc, el) => acc + el.salary, 0) / bestRestourant.workers.length;

      let sortedWorkers = bestRestourant.workers.sort((a, b) => b.salary - a.salary);
      let bestSalary = sortedWorkers[0].salary.toFixed(2);

      let topRestourantString = `Name: ${bestRestourant.restourantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary}`;

      let workersString = sortedWorkers.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

      // 6. Insert best restourant and workers data into DOM
      let bestRestourantElement = document.querySelector('#bestRestaurant p');
      bestRestourantElement.textContent = topRestourantString;

      let workersElement = document.querySelector('#workers p');
      workersElement.textContent = workersString;

   }
}