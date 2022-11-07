//2. Declare a class of SortedArray
//- Input : a list of numbers
//- Output : 
//  - Declare a class which has a constructor that accepts a list of numbers as arguments 
//  - Sort the list automatically
//  - Provides 2 member functions to use
//    - sorted() : get sorted array
//    - reversed() : get a reversed array without changing the sorted list.
//- Condition : 
//  - WITHOUT using any official functions like sort() assort() reverse()...
//  - Use OOP to declare a class with member functions
//  - The size of the list could be millions of elements
//  - Fewer steps and less code is better
//- Checkpoints 
//  -  sorting algorithm

class SortedArray {
    constructor (list) {
    this.list = this.autoSort(list);
    }
    
    autoSort(arr) {
        let finish = false;
        while (!finish) {
            finish = true;
            for (let i = 0, n = 1; n < arr.length; i++, n++) {
                if (arr[i] > arr[n]) {
                    finish = false;
                    let savePos = arr[i];
                    arr[i] = arr[n];
                    arr[n] = savePos;
                }
            }
        }
        return arr;
    }

    sorted() {
        return this.list
    }

    reversed() {
        let output = [];
        for (let i = this.list.length -1; i > 0; i--) {
            output.push(this.list[i]);
        }
        return output;
    }
};

//let myList = new SortedArray([5,2,7,1]);
//let myList2 = new SortedArray([1,18,44,321,58,11]);
//let negativeList = new SortedArray([15,-18,-1,0,-1000,131,558]);

//console.log(myList);
//console.log(myList2);
//console.log(myList2.reversed())
//console.log(negativeList);
//console.log(negativeList.reversed())
//console.log(negativeList.sorted())
