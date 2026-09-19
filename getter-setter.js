class user{
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
    get password(){
        return `${this._password}acuuuu`
    }
    set password(value){
        this._password=value

    }
}
const user1 = new user('achu','xyz@gmail.com','acxx')
console.log(user1.password);
console.log(user1.email);

