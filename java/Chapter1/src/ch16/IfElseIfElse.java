package ch16;

public class IfElseIfElse {

	public static void main(String[] args) {
		
		int age = 65;
		int charge;
		
		if( age < 8 ) {
			charge = 1000;
			System.out.println("�� ���� �Ƶ��Դϴ�.");
		} else if (age < 14) {
			charge = 1500;
			System.out.println("�ʵ��л��Դϴ�.");
		} else if (age < 17) {
			charge = 2000;
			System.out.println("���л��Դϴ�.");
		} else if (age < 20) {
			charge = 2500;
			System.out.println("����л��Դϴ�.");
		} else if (age > 64) {
			charge = 1500;
			System.out.println("�����Դϴ�.");
		} else {
			charge = 3000;
			System.out.println("�����Դϴ�.");
		}
		
		System.out.println("������ " + charge + "�� �Դϴ�.");
	}

}
