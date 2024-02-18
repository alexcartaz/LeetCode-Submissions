/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    nums.sort( (a,b) => {
        return b-a;
    });

    // Triangle Inequality Theorem: any 2 sides must always be > than the 3rd side
    for(let i=0; i<nums.length-2; i++){
        if(nums[i] < nums[i+1] + nums[i+2]) return nums[i] + nums[i+1] + nums[i+2]
    }

    return 0
};