const User = {
    _email: 'h@hc.com',
    _password: "abc",

    // this code not work
    // Object.defineProperty(this, 'email', {
    //     get: function(){
    //         return this._email.toUpperCase()
    //     },
    //     set: function(value){
    //         this._email = value
    //     }
    // })
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
User.prototype.mmm = function(){
    console.log("hiii");
}

const tea = Object.create(User)
console.log(tea.email);