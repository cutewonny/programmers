public class SolutionFirstBadVersion{
    public static void main(String[] args) {
        int n = 5, bad = 4;
        int result = firstBadVersion(n);
    }

    public static int firstBadVersion(int n) {

        int start = 1;
        int end = n;
    
        while(start <= end){
            int mid = start + (end-start)/2;
            if(isBadVersion(mid)){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        return start;
    }

    public static boolean isBadVersion(int mid){

        return false;
    }
}

