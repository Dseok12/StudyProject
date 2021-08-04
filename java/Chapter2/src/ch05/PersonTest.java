package ch05;

public class PersonTest {

	public static void main(String[] args) {
		Person person01 = new Person();
		
		person01.tall = 183;
		person01.weight = "83Kg";
		person01.gender = "남성";
		person01.name = "정원석";
		person01.age = 30;
		
		person01.showPerson();
	}
	
}
