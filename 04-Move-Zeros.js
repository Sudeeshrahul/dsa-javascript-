// Given an integer array nums, move all 0's to the end of it while maintaining
//  the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

function moveZeros(nums){
    let start = 0;

    for (let j = 0; j <= nums.length-1; j++)
    {
        if (nums[j] !== 0)
        {
            let temp = nums[start];
            nums[start] = nums[j];
            nums[j] = temp;
            start++;
        }
    }
    console.log(nums);
}

let nums = [0,1,0,3,12];
let res = moveZeros(nums);
