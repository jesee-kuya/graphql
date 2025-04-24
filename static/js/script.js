import { login } from './login.js';

document.addEventListener('DOMContentLoaded', function() {
    login();
});

export const setHeader = (link) => {
    document.head.innerHTML = "";
    let title = document.createElement("title");
    title.innerText = "GraphQL";
    document.head.appendChild(title);
    document.head.appendChild(link);
    let script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("src", "static/js/script.js");
    document.head.appendChild(script);
    let meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(meta);
    let meta2 = document.createElement("meta");
    meta2.setAttribute("charset", "utf-8");
    document.head.appendChild(meta2);
}