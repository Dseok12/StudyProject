package ch03;

public class StudentTest {

	public static void main(String[] args) {
		
		Student studentLee = new Student();
		
		studentLee.studentID = 12345;
		studentLee.setStudentName("Lee Jeong Jea");
		studentLee.address = "서울 강남구";
		
		studentLee.showStudentInfo();
		
		Student studentJeong = new Student();
		
		studentJeong.studentID = 2011528;
		studentJeong.setStudentName("Jeong Won Seok");
		studentJeong.address = "서울 중랑구";
		
		studentJeong.showStudentInfo();
		
	}

}
