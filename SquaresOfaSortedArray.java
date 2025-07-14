
import java.lang.reflect.Array;
import java.util.Arrays;

public class SquaresOfaSortedArray {
    public int[] sortedSquares(int[] nums) {
       int left = 0;
       int right = nums.length-1;

       while(left <= right){
        

       }
        
    }
    public static void main(String[] args) {
        SquaresOfaSortedArray nums = new SquaresOfaSortedArray();
        int[] nums1 = {-4,-2,0,4,6,10};
        nums.sortedSquares(nums1);
        System.out.println(Arrays.toString(nums.sortedSquares(nums1)));

    }
}
