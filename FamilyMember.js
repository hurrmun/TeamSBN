class FamilyMember
{
	//attributes
	name = null;
	age = 0;
	gender = 0;
	//male = 0, female = 1
	activeLvl = 0;
	//0 - 2, 0 least active (1.2, 1.55, 1.72)
	weight = null;
	height = null;
	//constructor to create a family member.
	constructor(name, age, gender, activeLvl, weight, height)
	{
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.activeLvl = activeLvl;
		this.weight = weight;
		this.height = height;
	}
	//calculate required ammount of calories.
	calCount()
	{
		var bee = null;
		if (this.gender == 0)
		{
			bee = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
		}
		else
		{
			bee = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
		}
		var calNeeds = null;
		if (this.activeLvl == 0)
		{
			calNeeds = bee * 1.2;
		}
		else if (this.activeLvl == 1)
		{
			calNeeds = bee * 1.55;
		}
		else
		{
			calNeeds = bee * 1.72;
		}
		return calNeeds;
	}
	//getter methods
	getName()
	{
		return this.name;
	}
}