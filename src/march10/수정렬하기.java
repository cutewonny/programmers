package march10;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Arrays;
// https://www.acmicpc.net/problem/2750
public class 수정렬하기 {
    public static void main(String[] args) throws Exception {
        InputStream is = System.in;//바이트 기반, 키보드 연결 스트림
        // InputStream 또는 FileInputStream is = new FileInputStream("C:/Temp/file.txt");//바이트 기반, 파일 연결 스트림
        Reader reader = new InputStreamReader(is);//리더: 문자 기반, 보조스트림 : 바이트 -> 문자로 읽음
        int readCharNo;
        // while ((readCharNo = reader.read()) != -1) {
        //     System.out.println(readCharNo);
        // }
        readCharNo = reader.read();
        System.out.println("readCharNo>> "+readCharNo);
        /*
        InputStreamReader
        reader, writer는 문자 단위로 입출력
        바이트 기반보다 편리
        다양한 문자를 입출력
        */
		BufferedReader br = new BufferedReader(reader);//BufferedReader: 향상된 속도로 사용할 수 있다.
		int N = Integer.parseInt(br.readLine());//BufferedReader의 readLine 메서드는 한줄 단위로 읽을 수 있다. return String이라 null로 검사한다
		int[] arr = new int[N];
		for(int i =0; i<N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
            System.out.println(arr[i]);
		}
		
		Arrays.sort(arr);
		StringBuilder sb = new StringBuilder();
        for (int a : arr) {
            sb.append(a).append("\n");
        }
        System.out.println("결과는");
		System.out.println(sb.toString());
	}
}