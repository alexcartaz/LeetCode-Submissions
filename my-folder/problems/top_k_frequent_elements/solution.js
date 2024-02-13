/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let occurences = {};

    nums.map(num => {
        if(!occurences[num]){
            occurences[num] = 1;
        }else{
            occurences[num]++;
        }
    });

    let arrayOfObjects = [];
    Object.entries(occurences).map( (obj) => {
        arrayOfObjects.push(obj)
    });

    arrayOfObjects = arrayOfObjects.sort(function (a, b) {
        return Object.values(b)[1] - Object.values(a)[1];
    });

    let ans=[];

    for(i=0; i<k; i++){
        ans.push( Number( arrayOfObjects[i][0] ) );
    }

    return ans;
};