#include <iostream>
using namespace std;

class BOOK {
public :
	string name;
	string author;
	int total_page;
	int current_page;
	void Open();
	void Move(int);
	void Read();
	void PrintName();
	BOOK & Compare(BOOK &);
	BOOK(string, string, int);

private :
	double read_percent;
	void SetPercent();
};

BOOK::BOOK(string _name, string _author, int _total_page) {
	name = _name;
	author = _author;
	total_page = _total_page;
	current_page = 0;
	read_percent = 0;
	cout << "BOOK BOOK Called. " << endl;
	cout << "BOOK Name = " << name << endl;
	cout << "BOOK Author = " << author << endl;
	cout << "BOOK Total_page = " << total_page << endl;
	cout << "THIS : " << this << endl;
	SetPercent();
}

void BOOK::Open() {
	current_page = 0;
	cout << "BOOK Open called" << endl;
	SetPercent();
}

void BOOK::Move(int _page) {
	current_page = _page;
	cout << "BOOK Move called : current_page " << current_page << endl;
	SetPercent();
}

void BOOK::Read() {
	current_page++;
	cout << "BOOK Read called : " << current_page << "page" << endl;
	SetPercent();
}

void BOOK::PrintName() {
	cout << "BOOK Name is  : " << name << endl;
}

BOOK & BOOK::Compare(BOOK & _book) {
	if (current_page < _book.current_page){
		cout << "You Win :" << current_page << "-" << _book.current_page << endl;
		return _book;
	} else {
		cout << "MY Win :" << current_page << "-" << _book.current_page << endl;
		return *this;
	}
}

void BOOK::SetPercent()
{
	read_percent = (double) current_page / total_page * 100;
	cout << "BOOK SetPercent : " << read_percent << "%" << endl;

}

int main()
{
	BOOK mybook1(" Front Web Course !!", "SaeSsac", 100);
	BOOK mybook2("Math", "Pref. KIM", 500);
	mybook1.Open();
	mybook1.Read();
	mybook1.Read();
	mybook1.Read();
	mybook1.Read();
	mybook1.Move(45);
	for (int i=0; i<10; i++){
		mybook1.Read();
	}
	mybook2.Move(40);
	mybook2.Read();
	mybook1.Compare(mybook2).PrintName();

	return 0;
}
