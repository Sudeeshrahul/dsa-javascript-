function rotatrElements(nums,k){
    k %= nums.length;

    // const revers = (start, end) => {
    //     while(start < end){
    //         [nums[start],nums[end]] = [nums[end],nums[start]];
    //         start++;
    //         end--;
    //     }
    // }

    //optimised revers function
    const revers = (nums,start, end) => {
        while(start < end){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    } 

    revers(nums,0,nums.length-1);
    revers(nums,0,k-1);
    revers(nums,k,nums.length-1);

    return nums;
}

let nums = [1,2,3,4,5,6,7];
console.log(rotatrElements(nums,3));
