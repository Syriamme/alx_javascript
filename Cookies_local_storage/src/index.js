//usr/bin/node
//Create basic cookie


function setCookies() {
    const firstNameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;

    document.cookie = "firstname=" + firstNameValue;
    document.cookie = "email=" + emailValue;
}


function showCookies() {
    let cookiesArray = document.cookie.split(';');
    let firstnameCookie = "";
    let emailCookie = "";

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        let cookieParts = cookie.split('=');
        let cookieName = cookieParts[0].trim();
        let cookieValue = cookieParts[1];

        if (cookieName === "firstname") {
            firstnameCookie = cookieValue;
        }
        if (cookieName === "email") {
            emailCookie = cookieValue;
        }
    }

    let paragraph = document.createElement("p");

    paragraph.innerHTML = "Cookies:<br>Firstname: " + firstnameCookie + "<br>Email: " + emailCookie;

    document.body.appendChild(paragraph);
}
