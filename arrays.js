let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newItem) {
  let newArray = [newItem,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, newItem){
  array.unshift(newItem);
  
}