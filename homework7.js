function ids(val) {
    let id = []
    for (let i = 1; i <= val; i++) {
        user_id = '_' + Math.random().toString(36).substr(2, 9) + i;
        id.push(user_id)
    }
    return id
}



function createUserName(num) {
    let userName = []
    let user_name = ''
    for (let k = 1; k <= num; k++) {
        user_name = 'username' + k
        userName.push(user_name)
        
    }
    return userName
}



function createEmail(val) {
    let userName = createUserName(val)
    let email = []
    for (let l = 0; l < val; l++) {
        email.push(userName[l] + '@gmail.com')
    }
   return email
}


function password(num) {
    let pass = []
    for (let t = 0; t < num; t++) {
        pass.push(Date.now() + Math.floor(Math.random() * 1000))
    }
    return pass
}


function make(num) {
    let user = []
    let id = ids(num)
    let user_name = createUserName(num)
    let email = createEmail(num)
    let pass = password(num)
    
    // console.log(id);
    // console.log(user_name);
    // console.log(email);
    // console.log(pass);

    let alldata = []

    for (let i = 0; i <num; i++) {
       user = {
           id: id[i],
           username: user_name[i],
           email: email[i],
           password: pass[i]
       }
       alldata.push(user)
    }
    return alldata
}






console.log(make(10));
