package ch04;

public class Student {
	
	
	// 맴버 변수는 초기화가 된다.
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
		
		
		return studentName + "학생의 학번은 " + studentNumber + "이고, " + grade + "학년 입니다.";
	}
	
}
