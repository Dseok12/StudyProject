package ch03;

public class Student {

	public int studentID;
	public String studentName;
	public String address;
	
	public void showStudentInfo() {
		System.out.println( studentID + "�й� �л��� �̸��� " + studentName + "�̰�, �ּҴ� " + address + "�Դϴ�." );
	}
	
	public String getStudnetName() {
		return studentName;
	}
	
	public void setStudentName(String name) {
		studentName = name;
	}

}
