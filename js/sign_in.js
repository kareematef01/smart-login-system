var signInEmail = document.getElementById("signinEmail")
var signInPassword = document.getElementById("signinPassword")
var loginBtn= document.getElementById("loginBtn")

loginBtn.addEventListener('click', function () {
    login()
})

console.log(users);

function login() {
    for (let i = 0; i < users.length; i++) {
        if (signInEmail.value == users[i].email && signInPassword.value == users[i].password) {
            localStorage.setItem('userName', users[i].name);
            window.location.href = "home.html"
            return;
        }
    }
    window.alert("Incorrect email or password");
}