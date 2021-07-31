package ch16;

public class IfElseIfElse {

	public static void main(String[] args) {
		
		int age = 65;
		int charge;
		
		if( age < 8 ) {
			charge = 1000;
			System.out.println("미 취학 아동입니다.");
		} else if (age < 14) {
			charge = 1500;
			System.out.println("초등학생입니다.");
		} else if (age < 17) {
			charge = 2000;
			System.out.println("중학생입니다.");
		} else if (age < 20) {
			charge = 2500;
			System.out.println("고등학생입니다.");
		} else if (age > 64) {
			charge = 1500;
			System.out.println("노인입니다.");
		} else {
			charge = 3000;
			System.out.println("성인입니다.");
		}
		
		System.out.println("입장료는 " + charge + "원 입니다.");
	}

}
