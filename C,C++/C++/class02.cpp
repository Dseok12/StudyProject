#include <iostream>
using namespace std;

class MEMBER {
public :
	string name;
	int age;
	static int member_count;
	static int member_max;
	static void set_max();
	MEMBER(string, int);
	~MEMBER();
};

void MEMBER::set_max()
{
	member_max = 100;	
	cout << "Member Max " << member_max << endl; 
}

MEMBER::MEMBER(string _name, int _age)
{
	name = _name;
	age = _age;
	member_count+=1;
	cout << "MEMBER name " << name << " age " << age << " COUNT :" << member_count << endl;
}

MEMBER::~MEMBER() {
	cout << "Destructor called !! " << name << endl;
}

int MEMBER::member_count = 0;
int MEMBER::member_max = 0;

int main()
{	
	MEMBER::set_max();
	
	MEMBER a("TOM", 20);
	MEMBER b("John", 32);
	MEMBER C("Jane", 18);

	printf("member_count = %d\n", MEMBER::member_count);
	printf("member_max = %d\n", MEMBER::member_max);
	
	return 0;
}