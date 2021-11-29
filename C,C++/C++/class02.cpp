#include <iostream>
using namespace std;

class MEMBER {
public :
	string name;
	int age;
	static int member_count;
	MEMBER(string, int);
	~MEMBER();
};

MEMBER::MEMBER(string _name, int _age)
{
	name = _name;
	age = _age;
	member_count+=1;
	cout << "MEMBER name " << name << " age " << age << " COUNT :" << member_count << endl;
}

MEMBER::~MEMBER() {
	cout << "Destructor called !!" << endl;
}

int MEMBER::member_count = 0;

int main()
{	
	MEMBER a("TOM", 20);
	MEMBER b("John", 32);
	MEMBER C("Jane", 18);

	printf("member_count = %d\n", MEMBER::member_count);
	return 0;
}
