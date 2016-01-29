describe('Bubble Sort', function(){

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function(){
    	expect(bubbleSort([4])).toEqual([4]);
    });

    it('handles an array with two items', function(){
    	expect(bubbleSort([4,6])).toEqual([4,6]);
    	expect(bubbleSort([6,4])).toEqual([4,6]);
    });

    it('handles an array with many items', function(){
    	expect(bubbleSort([8,3,5,0,1,4,6,3])).toEqual([0,1,3,3,4,5,6,8]);
    });

//Do we not check for this? t=6m30s
//No, this was the wrong way to determined a bubble sort I guess
    // it('is a bubble sort and doesn\'t call itself more times than needed to sort the array', function(){
    // 	spyOn(window, 'bubbleSort').and.callThrough()
    // 	sortedArr = bubbleSort([1,2,20,15,4,12,3]);
    // 	expect(bubbleSort.calls.count()).toEqual(5);
    // });
//

    function generateArray(size, lower, upper){
        var randomArray = [];
        while(size--){
            var randomNum = Math.floor(lower + Math.random() * upper);
            randomArray.push(randomNum);
        }
        return randomArray;
    }

    for(var i=2; i<103; i+=20){
        it('sorts an array of ' + i + " random items", function(){
            var arr = generateArray(i, 0, 100);
            var sorted = arr.slice(0).sort(function(a,b){return a-b});
            expect(bubbleSort(arr)).toEqual(sorted);
        })
    }

    it('compares the expect number of times', function(){
        spyOn(window, 'inOrder').and.callThrough();
        bubbleSort([4,6,5,1]);
        expect(inOrder.calls.count()).toEqual(10);
    })

    it('compares the expect number of times', function(){
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([4,6,5,1]);
        expect(swap.calls.count()).toEqual(4);
    })
});

//What is spyOn?

// function spyOn(obj, method){
//     var counter = 0;
//     var spy = function(){
//         counter++;
//     }
//     obj[method] = spy;
//     spy.call ={
//         count: function(){ return counter;}
//     }
// }

