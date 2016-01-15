//*****My code****
// function mergeSort(array){
// 	if(array.length<2){
// 		return array;
// 	}

// 	var half = Math.floor(array.length/2);
// 	var arr1 = array.slice(0,half);
// 	var arr2 = array.slice(half, array.length);

// 	if(array.length<5){
// 		var sortedArr1 = sort(arr1);
// 		var sortedArr2 = sort(arr2);
// 		return merge(sortedArr1, sortedArr2);
// 	}
// 	return merge(mergeSort(arr1),(mergeSort(arr2)));
// }


// function merge(arr1, arr2){
//     var output = [];
//     var i=0;
//     var j=0;
    
//     while(i < arr1.length || j < arr2.length){
//         if(arr1[i] > arr2[j] || arr1[i] === undefined){
// 			output.push(arr2[j]);
// 			j++;
// 		}
// 		else if(arr1[i] <= arr2[j] || arr2[j] === undefined){
// 			output.push(arr1[i]);
// 			i++;
// 		}
//     }
//     return output;
// }

// function sort(arr){
// 	if(arr.length === 1){
// 		return arr;
// 	}
// 	if(arr[1] < arr[0]){
// 		var b = arr[1];
// 		arr[1] = arr[0];
// 		arr[0] = b;
// 	}
// 	return arr;
// }

//***Video Code***

'use strict';

function mergeSort(array){
	if(array.length < 2){
		return array;
	}
	var splits = split(array),
		left = splits[0],
		right = splits[1];
	return merge(mergeSort(left), mergeSort(right));
}

function split(array){
	//You do not need to do Math.floor here, "slice" does it for you
	var half = array.length/2;
	var left = array.slice(0,half);
	var right = array.slice(half);
	return [left, right];
}

function merge(left, right){
	var merged = [],
		leftIndex = 0,
		rightIndex = 0,
		leftVal,
		rightVal;

	//Do not use .shift anywhere here because it becomes O(n^2)
	while(leftIndex < left.length || rightIndex < right.length){
		leftVal = left[leftIndex];
		rightVal = right[rightIndex];
		if(leftVal < rightVal || rightVal === undefined){
			merged.push(leftVal);
			leftIndex++;
		}
		else{
			merged.push(rightVal);
			rightIndex++;
		}
	}
	return merged;
}










