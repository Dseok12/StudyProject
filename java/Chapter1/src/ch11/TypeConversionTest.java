package ch11;

public class TypeConversionTest {

	public static void main(String[] args) {
		
//		byte bNum = 125;
		int iNum = 255;
		byte bNum = (byte)iNum;
		
		System.out.println(iNum);
		
		
		/*
		double dNUm = 3.14;
		int iNum = (int)dNum;
		
		System.out.println(iNum);
		*/
		
		double dNum = 1.2;
		float fNum = 0.9F;
		
		int iNum1 = (int)dNum + (int)fNum;
		int iNum2 = (int)(dNum + fNum);
		
		System.out.println(iNum1);
		System.out.println(iNum2);

		int myNum = 10;
		int yourNum = 20;
		
//		myNum = myNum + yourNum;
		myNum += yourNum;
		System.out.println(myNum);
	}

}
