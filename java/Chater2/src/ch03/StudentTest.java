package ch03;

public class StudentTest {

	public static void main(String[] args) {
		
		Student studentLee = new Student();
		
		studentLee.studentID = 12345;
		studentLee.setStudentName("Lee Jeong Jea");
		studentLee.address = "���� ������";
		
		studentLee.showStudentInfo();
		
		Student studentJeong = new Student();
		
		studentJeong.studentID = 2011528;
		studentJeong.setStudentName("Jeong Won Seok");
		studentJeong.address = "���� �߶���";
		
		studentJeong.showStudentInfo();
		
	}

}
