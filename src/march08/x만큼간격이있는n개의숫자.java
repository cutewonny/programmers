package march08;

import java.util.Arrays;

// https://programmers.co.kr/learn/courses/30/lessons/12954?language=java
public class x만큼간격이있는n개의숫자 {
    public static void main(String[] args) {
        int x = 2;
        int n = 5;
        long[] result = Solution.solution(x, n);
        System.out.println(Arrays.toString(result));
    }
    static class Solution {
    public static long[] solution(int x, int n) {
        long[] answer = new long[n]; //길이로 초기화 선언
        for (int i = 0; i < n; i++) {
            answer[i] = (long) x * (i + 1);
            System.out.println("answer[i]>> "+answer[i]);
        }
        return answer;
    }
}

}

