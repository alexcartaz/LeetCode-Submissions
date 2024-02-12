/**
 * @param {number[]} nums
 * @return {number}
 */

let majorityElement = (nums) => {
    
    if(nums.length == 1){
        return nums[0];
    }

    let occurences = {}

    for(i=0; i<nums.length; i++){
        if(!occurences[nums[i]]){
            occurences[nums[i]] = 1;
        }else{
            occurences[nums[i]]++;
            if(occurences[nums[i]] >= nums.length /2){
                return nums[i];
            }
        }
    }

};