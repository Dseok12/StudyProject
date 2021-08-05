package ch10;

public class TakeTransTest {

	public static void main(String[] args) {
		
		Student studentJ = new Student("정원석", 100000000);
		Student studentD = new Student("똘마니", 100000);
		
		Bus bus100 = new Bus(100);
		Bus bus500 = new Bus(500);
		
		studentJ.takeBus(bus100);
		
		
		Subway greenSubway = new Subway(2);
		studentJ.takeSubway(greenSubway);
		
		studentJ.showInfo();
		studentD.showInfo();
		
		bus100.showBusInfo();
		bus500.showBusInfo();
		greenSubway.showSubwayInfo();
		
	}

}
