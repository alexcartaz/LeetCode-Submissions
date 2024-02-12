/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let maxFreq = 1;
    let ans = -1;
    let occurences = {};

    nums.map(num => {
        if(num%2===0){
            if(!occurences[num]){
                occurences[num] = 1;
            }else{
                occurences[num]++;
            }
            if(occurences[num] > maxFreq){
                maxFreq = occurences[num];
                ans = num
            }else{
                if(occurences[num] == maxFreq){
                    if(num < ans || ans === -1){
                        ans = num;
                    }
                }
            }
        }
    });

    return ans;
};