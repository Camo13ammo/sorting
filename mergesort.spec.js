// function generateArray(size, lower, upper){
//     var randomArray = [];
//     while(size--){
//         var randomNum = Math.floor(lower + Math.random() * upper);
//         randomArray.push(randomNum);
//     }
//     return randomArray;
// }

// for(var i=2; i<103; i+=20){
//     it('sorts an array of ' + i + " random items", function(){
//         var arr = generateArray(i, 0, 100);
//         var sorted = arr.slice(0).sort(function(a,b){return a-b});
//         expect(bubbleSort(arr)).toEqual(sorted);
//     })
// }

describe('Merge', function(){
	it('combines two equal length sorted arrays into a single sorted array', function(){
		expect(merge([1,2],[2,4])).toEqual([1,2,2,4]);
		expect(merge([10,15],[0,13])).toEqual([0,10,13,15]);
		expect(merge([0,5],[1,10])).toEqual([0,1,5,10]);
	});

	it('combines two different length sorted arrays into a single sorted array', function(){
		expect(merge([1],[6,15])).toEqual([1,6,15]);
		expect(merge([5,7,10],[4,7,9,15])).toEqual([4,5,7,7,9,10,15]);
		expect(merge([4,5,10,11],[0,3,7])).toEqual([0,3,4,5,7,10,11]);

	});
})

// describe('Sort', function(){
// 	it('sorts an array of length 1 or 2', function(){
// 		expect(sort([5])).toEqual([5]);
// 		expect(sort([5,7])).toEqual([5,7]);
// 		expect(sort([7,5])).toEqual([5,7]);
// 	});
// })

describe('Merge Sort', function(){
	it('can handle a blank array', function(){
		expect(mergeSort([])).toEqual([]);
	});

	it('can handle an array of one element', function(){
		expect(mergeSort([5])).toEqual([5]);
	});

	it('can sort a small even or array', function(){
		expect(mergeSort([5,0,1,10])).toEqual([0,1,5,10]);
		expect(mergeSort([10,3,11])).toEqual([3,10,11]);
	});

	it('can sort a large even or odd array', function(){
		expect(mergeSort([5,0,1,10,6,3,11,0])).toEqual([0,0,1,3,5,6,10,11]);
		expect(mergeSort([3,7,0,-5,11,3,5,12,-1])).toEqual([-5,-1,0,3,3,5,7,11,12]);
	});

	// it('was sorted using a merge sort', function(){
	// 	expect
	// })

});  