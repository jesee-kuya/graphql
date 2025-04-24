const profile = (data) => {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "static/css/profile.css");
    setHeader(link);

    document.body.innerHTML = "";
}