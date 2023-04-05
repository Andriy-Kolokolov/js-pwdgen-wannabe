// // soluzione prompt password insicura
// const name = prompt("Enter your name > ");
// const surname = prompt("Enter you surname > ");
// const favoriteColor = prompt("Enter you favorite color > ");
//
// window.alert("Your new password is : " + name + surname + favoriteColor + "23");
//


// Soluzione con password un po' piu' sicura
const btnGeneratePass = document.getElementById("btn-generate-pass");
const btnCopyPass = document.getElementById("btn-copy-pass");
const newPassField = document.getElementById("new-pass-field");

btnGeneratePass.addEventListener("click", function (event) {
    // preventDefault to not make reload page on click
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const favoriteColor = document.getElementById("favorite-color").value;
    newPassField.innerText = getGeneratedPass(name, surname, favoriteColor);
    btnCopyPass.innerText = "Copy"
})

btnCopyPass.addEventListener("click", function (event) {
    event.preventDefault();
    const password = newPassField.innerText;
    navigator.clipboard.writeText(password);
    btnCopyPass.innerText = "Copied!";
})

function getGeneratedPass(name, surname, favoriteColor) {

    const symbols = "!@#$%^&*()_+";
    let password = "";

    // remove white spaces if name or surname 2 words and more
    name.replace(/\s/g, "");
    surname.replace(/\s/g, "");

    password += name + surname + favoriteColor;
    // add symbol
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    // add rand int
    password += Math.floor(Math.random() * 90 + 10);
    // shuffle
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}