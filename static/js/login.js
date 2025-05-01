import { setHeader } from "./script.js";
import { getData } from "./query.js";

export const login = () => {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "static/css/login.css");
    setHeader(link);

    document.body.innerHTML = "";

    document.body.innerHTML = `
    <div id="custom-alert" class="alert alert-error" style="display: none;"></div>
    `

    let logincontainer = document.createElement("div");
    logincontainer.classList.add("login-container");

    let form = document.createElement("form");
    form.classList.add("login-form");
    let h1 = document.createElement("h1");
    h1.innerText = "Login";

    let name = document.createElement("div");
    name.classList.add("input-group");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "username");
    nameLabel.innerText = "Email or Username";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "username");
    nameInput.setAttribute("id", "username");
    nameInput.required = true;
    name.appendChild(nameLabel);
    name.appendChild(nameInput);

    let password = document.createElement("div");
    password.classList.add("input-group");
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.required = true;

    let toggleButton = document.createElement("button");
    toggleButton.type = "button";  
    toggleButton.classList.add("toggle-password"); 
    toggleButton.innerHTML = "👀"

    let inputWrapper = document.createElement("div");
    inputWrapper.classList.add("password-wrapper");
    inputWrapper.appendChild(passwordInput);
    inputWrapper.appendChild(toggleButton);

    password.appendChild(passwordLabel);
    password.appendChild(inputWrapper);

    toggleButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('visible');
    });

    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerText = "Login";

    form.appendChild(h1);
    form.appendChild(name);
    form.appendChild(password);
    form.appendChild(submit);
    logincontainer.appendChild(form);

    document.body.appendChild(logincontainer);

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const username = nameInput.value;
        const password = passwordInput.value;

        if (username === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        auth(username, password);
        form.reset();
    });
}

const auth = async (username, password) => {
    try {
        const response = await fetch("https://learn.zone01kisumu.ke/api/auth/signin", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${btoa(`${username}:${password}`)}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        sessionStorage.setItem("token", data);
        getData();
    } catch (error) {
        alert(`Error during sign-in: ${error}`);
    }
};

export const showAlert = (message, type = "error") => {
    const alertBox = document.getElementById("custom-alert");
    alertBox.className = `alert alert-${type} show`;
    alertBox.textContent = message;

    setTimeout(() => {
        alertBox.classList.remove("show");
        alertBox.style.display = "none";
    }, 4000);

    alertBox.style.display = "block";
}

