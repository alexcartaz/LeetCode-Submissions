/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let ans = [];
    let occurences = {};

    for(i=0; i<nums.length; i++){
        if(!occurences[nums[i]]){
            occurences[nums[i]] = 1;
        }else{
            occurences[nums[i]]++;
        }
        if(occurences[nums[i]] > nums.length / 3){
            if(ans.indexOf(nums[i]) == -1){
                ans.push(nums[i]);
            }
        }
    }

    return ans;
};