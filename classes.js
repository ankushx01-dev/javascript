class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    createId(){
        return 123
    }
}
class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const achu =new teacher('ankush','xyz@gmail.com')
achu.logMe()
