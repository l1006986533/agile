exports.login=login
function login(username, password){
    if (username != "Iamuser" && password != "abc123") {
        throw Error('login fail')
    } else {
        return 'Login success.';
    }
}