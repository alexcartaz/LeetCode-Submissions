/**
 * @param {number[]} nums
 * @return {number}
 */

// very inelegant solution

var maxStrength = function(nums) {
    if(nums.length === 1) return nums[0]
    let zero = false, neg = [], pos = []
    nums.map( n => {
        if( n === 0 ) zero = true
        else if ( n < 0 ) neg.push(n)
        else pos.push(n)
    })
    if( zero === true && neg.length <= 1 && pos.length === 0) return 0
    if( neg.length > 1){
        neg.sort( (a, b) => {
            return a - b;
        });
        if(neg.length%2 != 0) neg.length = neg.length - 1;
    }
    if( neg.length === 1) neg.length = 0
    return pos.concat(neg).reduce( (prod, n) => { return prod * n }, 1);
};