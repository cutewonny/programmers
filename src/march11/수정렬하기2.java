package march11;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;

// https://www.acmicpc.net/problem/2751
public class 수정렬하기2 {

    public static void main(String[] args) throws IOException{
        InputStream is = System.in;
        InputStreamReader reader = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(reader);
        
        int N = Integer.parseInt(br.readLine());
        Integer[] arr = new Integer[N];
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(arr, Collections.reverseOrder());
        StringBuilder sb = new StringBuilder();
        for (int a : arr) {
            sb.append(a).append("\n");
        }
        System.out.println("결과는:  \n"+sb.toString());
    }
}
