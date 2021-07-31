package ch18;

import java.util.Scanner;

public class DoWhileTest {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		int input;
		int sum = 0;
		
//		input = scanner.nextInt();
		
		do {
			input = scanner.nextInt();
			sum += input;
			input = scanner.nextInt();
			
		} while (input != 0);
		System.out.println(sum);
		
	}

}
