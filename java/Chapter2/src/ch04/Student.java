package ch04;

public class Student {
	
	
	// �ɹ� ������ �ʱ�ȭ�� �ȴ�.
	public int studentNumber;
	public String studentName;
	public int grade;
	
	public Student() {}
	
	public Student(int studentNumber, String studentName, int grade) {
		
		this.studentNumber = studentNumber;
		this.studentName = studentName;
		this.grade = grade;
		
	}
	
	public String showStudentInfo() {
		
		
		return studentName + "�л��� �й��� " + studentNumber + "�̰�, " + grade + "�г� �Դϴ�.";
	}
	
}
