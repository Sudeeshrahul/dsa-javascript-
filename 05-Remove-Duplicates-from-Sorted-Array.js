// Given an integer array nums sorted in non-decreasing order, remove the duplicates 
// in-place such that each unique element appears only once. The relative order of the 
// elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in 
// the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicate(nums){
    let i = 1;
    for(let j = 1; j <= nums.length-1; j++)
    {
        if (nums[j] !== nums[i-1])
        {
            nums[i] = nums[j];
            i++;
        }

    }
    console.log(i);
    
}

let nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicate(nums)