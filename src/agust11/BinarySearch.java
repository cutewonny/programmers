//기준 클래스
//클래스 내부 메서드를 호출한다.



public class BinarySearch {
    // https://leetcode.com/problems/binary-search/

    //main 메서드
    public static void main(String[] args) {
        int[] num = {-1,0,3,5,9,12};
        // int target = 9;//4

        int target = 2;//-1

        int result = search(num,target);
        System.out.println(result);
    }

    
// static을 메서드에 달아줘야 main에서 호출이 가능하다
// 클래스 내부 메서드는 객체를 생성하지 않고 사용 가능
    public static int search(int[] nums, int target) {
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
