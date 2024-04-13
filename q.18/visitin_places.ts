//store the places in an array
let places:string[]=[Uk, America, Canada, Germany, india];
//print the array in orignal order
console.log('orignal ' + places);
//print the array in alphabetical order without modifying the orignal list.
console.log('copy '+ [...places].sort());
//show that the array is still in its orignal order by printing it.
console.log('orignal ' + places);
//print the array in reverse alphabetical order without changing the order of the orignal list.
console.log( 'copy '+ [...places].sort().reverse());
//show that the array is still in its orignal order by printing it again.
console.log('orignal ' + places);
//reverse the order of the list. print the array to show that its order has changed.
console.log('orignal '+ places.reverse());
//reverse the order of your list again.print the list to show that its again back to its orignal order.
console.log('orignal '+ places.reverse());
//sort your array so it is stored in alphabetical order.print the array to show that its order has been changed.
console.log('orignal ' + places.sort());
//sort to change your array so it is stored in reverse alphabetical order.print the list to show that its order has changed.
console.log('orignal ' +places.sort().reverse());
