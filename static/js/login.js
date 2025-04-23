export const login = () => {
    document.head.innerHTML = "";
    let title = document.createElement("title");
    title.innerText = "GraphQL";
    document.head.appendChild(title);
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "static/css/login.css");
    document.head.appendChild(link);
    let script = document.createElement("script");
    script.setAttribute("src", "static/js/script.js");
    document.head.appendChild(script);
    let meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(meta);
    let meta2 = document.createElement("meta");
    meta2.setAttribute("charset", "utf-8");
    document.head.appendChild(meta2);
    
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
    nameLabel.innerText = "Username/Email";
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