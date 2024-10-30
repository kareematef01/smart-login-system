var userName = localStorage.getItem('userName');
var logoutBtn = document.querySelector('#logout')
if (userName) {
    document.getElementById("welcomeMessage").textContent = "Welcome, " + userName;
}

logoutBtn.addEventListener('click', function(){
    logout()
})

function logout() {
    localStorage.removeItem('userName');
    window.location.href = "index.html";  
}