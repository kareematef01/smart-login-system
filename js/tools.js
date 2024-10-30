var users = [];
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"))
}