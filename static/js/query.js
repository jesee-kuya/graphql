const endpoint = "https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql";

const query = `
    {
        user {
            id}
}
`


fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
    }
})