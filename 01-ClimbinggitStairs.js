// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbingStairs(n){
    //base case if n less than 2 then return n
    if(n<=2) return n;

    //considering extra var for behind base case 
    let pre1 = 2; pre2 = 1;

    //for loop will iterate when n >> 3
    for(let i = 3; i <= n; i++)
    {
        const current = pre1 + pre2;
        pre1 =  pre2;
        pre2 = current;
    }

    return pre2;
}

const steps = 10;
console.log(climbingStairs(steps));
