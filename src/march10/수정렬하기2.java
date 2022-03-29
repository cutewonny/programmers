package march10;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;

public class 수정렬하기2 {
    public static void main(String[] args) throws Exception {
        InputStream is = System.in;
        InputStreamReader reader = new InputStreamReader(is);
        //리더: 문자기반, 보조스트림: 바이트 -> 문자로 입출력
        BufferedReader br = new BufferedReader(reader);
        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
            // System.out.println(arr[i]);
        }

        Arrays.sort(arr);// 1,2,5,11,123
        StringBuilder sb = new StringBuilder();
        for (int a : arr) {
            sb.append(a).append("\n");
        }
        System.out.println("결과는:  \n"+sb.toString());
    }
}
