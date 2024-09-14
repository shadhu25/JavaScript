function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    // this code does not work
    // get email(){
    //     return this._email.toUpperCase()
    // }
    // set email(value){
    //     this._email = value
    // }
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
    
}
User.prototype.jjj = function(){
    console.log("hiii");
}
function User1(email, password){
    super(email, password);
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    // this code does not work
    // get email(){
    //     return this._email.toUpperCase()
    // }
    // set email(value){
    //     this._email = value
    // }
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
Object.setPrototypeOf(User, User1)
const chai = new User("chai@chai.com", "chai")
const chai1 = new User1("chai@chai.com", "chai")
chai.jjj =  function(){
    console.log("jjjjjj");
}
console.log(chai);
chai.jjj()
chai1.jjj()
// chai.mmm = function(){
//     console.log("hiii");
// }
// // chai.mmm();