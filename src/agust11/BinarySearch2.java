//외부 클래스
class Solution {
    public int search(int[] nums, int target) {
        int start = 0;
        int end = (nums.length)-1;//5
        int mid =0;
        
        while(start <= end){
            System.out.println("start="+start+"   end="+end+"   mid="+mid);

            mid = start + (end-start)/2;
            System.out.println("first mid>> "+mid);// 1
            if(target == nums[mid]){
                return mid;
            }
            else if(target<nums[mid]){
                end = mid-1;// 왼쪽으로 탐색해

            }else{
                start = mid+1;// 오른쪽으로 탐색해
            }
        }
        return -1;
    }
}

//외부 클래스를 객체를 생성해서 함수를 호출한다
//기준 클래스
public class BinarySearch2 {
    // https://leetcode.com/problems/binary-search/
    public static void main(String[] args) {
        int[] num = {-1,0,3,5,9,12};
        int target = 9;//4
        Solution sol = new Solution();
        int result = sol.search(num,target);
        System.out.println(result);
    }
    
}
