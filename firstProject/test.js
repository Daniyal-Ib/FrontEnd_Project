let numbers = [1,2,3,4,5,6]

numbers.forEach(double);
numbers.forEach(display)

function double(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}