import java.util.Stack;

public class StackEx {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        stack.push(5);
        stack.push(4);
       

        stack.pop();
        stack.pop();
        stack.pop();

         System.out.println(stack);//[5, 4]
    }
}
