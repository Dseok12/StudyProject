package ch05;

public class Person {

	public int tall;
	public String weight;
	public String gender;
	public String name;
	public int age;
	
	public void showPerson() {
		System.out.println("키가 " + tall + "이고, 몸무게가 " + weight + "인 " + gender + "이 있습니다. 이름은" + name + "이고, 나이는 " + age + "세 입니다.");
	}
	
}
