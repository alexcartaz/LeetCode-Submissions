/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if(nums.length == 1) return nums[0] 

    // init
    let maxSum = -Infinity, currSum=0;

    // iterate over whole array keeping track of current maximum contiguous subarray sum
    for(let i=0; i<nums.length; i++){
        currSum += nums[i];
        if (maxSum < currSum) {
            maxSum = currSum
        }
        
        if(currSum < 0){
            currSum = 0
        }

    }

   //console.log(maxSum)
   return maxSum;
};