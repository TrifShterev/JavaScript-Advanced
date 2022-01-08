function solve(arr){
    let result = [];

for (const item of arr) {
    
    let tokens = item.split(' ');
    let [command, value] = tokens;


    switch (command) {
        case 'add':
            add(value);
            break;

            case 'remove':
            remove(value);
            break;

            case 'print':
            print();
            break;
    
        default:
            break;
    }
}

    function add(element){
        result.push(element);
        return result;
    }
    function remove(element){
       
        for (let i = result.length; i--; )
        {
            if (result[i] === element) {
                result.splice(i, 1);
            }
        }
        return result;
    }
    function print(){
        console.log(result);
    }

    return {
        add: add,
        remove: remove,
        print: print
    }
}

const array =['add hello', 'add again', 'remove hello', 'add again', 'print'];
solve(array);