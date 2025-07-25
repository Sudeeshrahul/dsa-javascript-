// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
function optimizeSubArray(nums){
    if(nums.length = 0) return nums[0];

    let currentCounter = nums[0];
    let globMax = nums[0];

    for(let i = 1; i <= nums.length; i++)
    {
        currentCounter = Math.max(nums[i], currentCounter+nums[i]);
        globMax = Math.max(globMax,currentCounter);
    }
    return globMax;
}

function maxSubArray(nums){

    let tMax = nums[0];
    let total = 0;

    for(let n of nums)
    {
        if(total < 0){
            total = 0;
        }
            total += n;
            tMax = Math.max(tMax,total);
    }
    return tMax;
}

let array = [-2,1,-3,4,-1,2,1,-5,4];
let result = maxSubArray(array)
 console.log(result);

