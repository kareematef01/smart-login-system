var signUpName = document.getElementById("signupName")
var signUpEmail = document.getElementById("signupEmail")
var signUpPassword = document.getElementById("signupPassword")
var btnSignUp = document.querySelector("#btnSignUp")
var validate = false
var msgUsedName = document.querySelector("#alertUsedName")
var msgUsedEmail = document.querySelector("#alertUsedEmail")
var used = false
var successSignIn = document.querySelector("#successSignIn")
var regexOkArr = {
    signupName: false,
    signupEmail: false,
    signupPassword: false
}


btnSignUp.addEventListener("click", function () {
    signUp();
})

signUpName.addEventListener('focusout', function () {
    isvalidate(signUpName)
});

signUpEmail.addEventListener('focusout', function () {
    isvalidate(signUpEmail)
});

signUpPassword.addEventListener('focusout', function () {
    isvalidate(signUpPassword)
});


function signUp() {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        window.alert("please enter all inputs ")
        return
    }
    if (used) {
        window.alert("email or name used ")
        return
    }
    if (regexOkArr.signupName == false || regexOkArr.signupEmail == false || regexOkArr.signupPassword == false) {
        window.alert("please enter all inputs correctly")
        return
    }

    var user = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    users.push(user)
    updateLocalStorage()
    clear()
    successSignIn.classList.remove("d-none")
    used = true

}


function updateLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users))
}

function isvalidate(element) {

    var regex = {
        signupName: /^[A-Za-z0-9_-]{3,15}$/,
        signupEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        signupPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,}$/
    }

    if (regex[element.id].test(element.value) == true) {
        element.nextElementSibling.classList.add("d-none")
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        regexOkArr[element.id] = true
    } else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.remove("d-none")
        regexOkArr[element.id] = false
    }

    successSignIn.classList.add("d-none")
    isExist();
}
console.log(users);


function isExist() {

    for (var i = 0; i < users.length; i++) {

        if (signUpName.value.toLowerCase() == users[i].name.toLowerCase()) {
            msgUsedName.classList.remove("d-none")
            signUpName.classList.add("is-invalid")
            used = true
            return;
        } else {
            msgUsedName.classList.add("d-none")
            used = false
        }

        if (signUpEmail.value.toLowerCase() == users[i].email.toLowerCase()) {
            msgUsedEmail.classList.remove("d-none")
            used = true
            signUpEmail.classList.add("is-invalid")
            return;
        } else {
            msgUsedEmail.classList.add("d-none")
            used = false
        }

    }
}


function clear() {
    signUpName.value = null
    signUpEmail.value = null
    signUpPassword.value = null
    signUpName.classList.remove("is-valid")
    signUpEmail.classList.remove("is-valid")
    signUpPassword.classList.remove("is-valid")
}