var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newItem) {
  let newArray = [newItem,...array];
}

function destructivelyAddElementToBeginningOfArray(array, newItem){
  array.unshift(newItem);
  
}

function addElementToEndOfArray(array, newItem){
  let newArray = [...array, newItem];
}

function destructiveAddElementToEndOfArray(array, newItem){
  array.push(newItem);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(){
  
}