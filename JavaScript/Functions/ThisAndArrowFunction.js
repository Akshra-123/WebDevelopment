// this keyword - used to refer to current context

const user = {
    username: "Alia",
    password: 1234,

    welcome_message: function() {
        console.log(`${this.username} , Welcome Sir/Mam`)
    }
    }

console.log(user.welcome_message())


