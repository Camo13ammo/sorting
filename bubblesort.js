'use strict'

//My solution
// function bubbleSort(array){
// 	if(array.length > 1){
// 		var swapped = false;
// 		for(var i=0; i<array.length-1;i++){
// 			var a = array[i];
// 			var b = array[i+1];
// 			if(a > b){
// 				array[i] = b;
// 				array[i+1] = a;
// 				swapped = true;
// 			}
// 		}
// 		if(swapped){
// 			var biggest = array.pop();
// 			return bubbleSort(array).concat(biggest);
// 		}
// 	}
// 	return array;
// }


//Video solution
function bubbleSort(array){
	var sorted = false;
//we can actually label loops in javascript and
//can do things to those names but rarely used
// i.e. break passes will kill both loops 
	for(var end = array.length; end > 0 && !sorted; end--){
		sorted = true;
		for (var j = 0; j < end; j++) {
			if (!inOrder(array, j)) {
				swap(array, j);
				sorted = false;
			}
		};
	}
	return array
}

function inOrder(array, index){
	if(index === array.length-1) return true;
	return array[index] < array[index + 1];
}

function swap (array, index){
	var oldLeftValue = array[index];
	array[index] = array[index +1];
	array[index +1] = oldLeftValue;
}



