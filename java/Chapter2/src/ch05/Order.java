package ch05;

public class Order {

	public int orderNumber;
	public int phoneNumber;
	public String address;
	public int date;
	public int time;
	public int price;
	public int menuNumber;
	
	public Order() {}
	
	public Order(int orderNumber, int phoneNumber, String address, int date, int time, int price, int menuNumber) {
		this.orderNumber = orderNumber;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.date = date;
		this.time = time;
		this.price = price;
		this.menuNumber = menuNumber;
	}
	
	public String showOrderInfo() {
		return "주문 접수 번호 : " + orderNumber + "|n 주문 핸드폰 번호 : " + phoneNumber +
				"주문 집 주소 : " + address + "주문 날짜 : " + date + "주문 시간 : " + time + "주문 가격 : " + price + "메뉴 번호 : " + menuNumber;
	}
	
}
