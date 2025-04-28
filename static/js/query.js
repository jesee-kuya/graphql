import { profile } from "./profile.js";

export const getData = async () => {
    const endpoint = "https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql";

    let userId = sessionStorage.getItem("user_id");

    const query = `
    {
        user(where: {id: {_eq: "${userId}"}}) {
          # User Details
          id
          profile
          campus
          
          # Best Skills (Top 5 highest graded results)
          results(order_by: {grade: desc}, limit: 5) {
            object {
              name
            }
            grade
          }
          
          # XP Information
          transactions(where: {type: {_eq: "xp"}}) {
            amount
          }
          
          # Level Information (assuming stored in attrs)
          attrs
          
          # Audit Ratio Components
          upTransactions: transactions(where: {type: {_eq: "up"}}) {
            amount
          }
          downTransactions: transactions(where: {type: {_eq: "down"}}) {
            amount
          }
          
          # XP Progression Timeline
          xpTimeline: transactions(
            where: {type: {_eq: "xp"}}
            order_by: {createdAt: asc}
          ) {
            amount
            createdAt
          }
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
