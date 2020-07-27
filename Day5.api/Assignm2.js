console.log("OOPs concepts");


class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
	}
	

	// static greet(){
    //     console.log("Hello There");
    // }

	
	login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
	}
	addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
	}
	getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
	}
}

    

	class Moderator extends User{
		constructor(name,age,email,role){
			super(name,age,email);
			this.role = role;
		}
	
		deleteUser(user){
			users = users.filter(u =>{
				return u.email != user.email; 
			})
		}
	
	}

	class Admin extends Moderator{
		addCourse(user,course){
			user.courses.push(course);
			console.log(user);
		}
	 }

	 let user1 = new User('Dhanashree',22,'dhanashree@gmail.com')
let user2 = new User('Shital',22,'shital@gmai.com')
let mod = new Moderator('Sonali',22,'sonu@gmail.com','Moderator');
let admin = new Admin('Sayali',25,'sayali@gmail.com');
let users = [user1,user2,mod,admin];



User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python'); 

users.forEach(element => {
    console.log(element);
});

///mod.deleteUser(user1);
// console.log(users);
