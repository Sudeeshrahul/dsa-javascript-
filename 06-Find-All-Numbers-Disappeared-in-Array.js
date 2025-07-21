function disapperNumbers(nums){
    for (let i = 0; i <= nums.length-1; i++)
    {
        let index = Math.abs(nums[i])-1;
        if (nums[index] > 0)
        {
            nums[index] = -nums[index];
        }
    }

    let result = [];
    for (let i = 0; i <= nums.length-1; i++)
    {
        if (nums[i] > 0)
        {
            result.push(i + 1);
        }
    }
    return result;
}

let nums = [4,3,2,7,8,2,3,1];
console.log(disapperNumbers(nums));
