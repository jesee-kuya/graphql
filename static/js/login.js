import { setHeader } from "./script.js";

export const login = () => {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "static/css/login.css");
    setHeader(link);

    document.body.innerHTML = "";

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
    password.appendChild(passwordLabel);
    password.appendChild(passwordInput);

    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerText = "Login";

    form.appendChild(h1);
    form.appendChild(name);
    form.appendChild(password);
    form.appendChild(submit);
    logincontainer.appendChild(form);

    document.body.appendChild(logincontainer);
}

const auth = async (username, password) => {
    try {
        const credentials = isValidEmail(username)
            ? { email: username, password }
            : { username, password };

        const response = await fetch("https://learn.zone01kisumu.ke/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
};


const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}