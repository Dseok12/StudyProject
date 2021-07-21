package ch09;

public class LocalVariableInter {

	public static void main(String[] args) {
		var i = 10;
		var j =10.0;
		var str = "text";
		
		System.out.println(i);
		System.out.println(j);
		System.out.println(str);
		
		var str2 = str;
		System.out.println(str2);
		
		str = "Hello";
		// str = 3;은 안된다.
		System.out.println(str);
	}

}
