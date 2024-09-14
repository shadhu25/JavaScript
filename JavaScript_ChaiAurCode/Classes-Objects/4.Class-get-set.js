class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
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
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(Object.getOwnPropertyDescriptor(hitesh, "email"));