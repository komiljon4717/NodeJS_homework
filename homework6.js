// homework

function User(firstName, lastName, email, password, phone, status) {
    return{
        user_id: function ID() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },
        firstName,
        lastName,
        email,
        password: function hidePass() {
            let hide = ''
            for (let i = 0; i < password.length; i++) {
                if (Math.floor(password.length / 2) === i+1) {
                    hide = hide.concat(firstName)
                }
                hide += password[i]
            }
            console.log(hide);
        },
        phone: function where() {
            let char = ''
            for (let k = 0; k < phone.length; k++) {
                char += phone[k]
            }
            if (char === '+998') {
                return phone
            }
            else{
                console.log('Dang');
            }
        },
        status: function isEqual() {
            if (status === 'user' || status === 'admin' || status === 'moderator') {
                return status
            }
        }
    }
}


const user1 = User('Komiljon', 'Nosirov', 'komiljon4717@gmail.com', '9804717', '1083474', 'admin')
user1.password
// console.log(user1);










