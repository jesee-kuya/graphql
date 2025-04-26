import { profile } from "./profile.js";

export const getData = async () => {
    const endpoint = "https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql";

    const query = `
        {
            user {
                id
                login
                campus
                attrs 
            }
    }
    `

    try {
        let response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify({ query }),
        })

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        profile(data);
    } catch (error) {
        alert(`Error during sign-in: ${error}`);
    }

}
