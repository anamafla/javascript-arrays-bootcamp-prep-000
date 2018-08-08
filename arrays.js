var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  let newArray = [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  
}

function addElementToEndOfArray(array, newItem){
  let newArray = [...array, newItem];
}

function destructivelyAddElementToEndOfArray(array, newItem){
  array.push(newItem);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0,1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

