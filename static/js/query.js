import { profile } from "./profile.js";

export const getData = async () => {
  const endpoint = "https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql";

  const query = `
  query {
    event(where: { id: { _eq: 75 } }) {
      object {
        attrs
      }
    }

    user {
      id
      profile
      campus
      login
      attrs

      results(order_by: { grade: desc }, limit: 5) {
        object {
          name
        }
        grade
      }

      transactions(where: { type: { _eq: "xp" } }) {
        amount
      }

      events(where: { eventId: { _eq: 75 } }) {
        level
      }

      xpHistory: transactions(
        where: { 
          _and: [
            { eventId: { _eq: 75 } },
            { type: { _eq: "xp" } }
          ]
        }
        order_by: { createdAt: asc }
      ) {
        amount
        createdAt
      }

      totalXP: transactions(
        where: { eventId: { _eq: 75 } },
        order_by: { createdAt: asc }
      ) {
        object {
          name
          attrs
          type
        }
        amount
        createdAt
        eventId
        path
        type
      }

      upTransactions: transactions(where: { type: { _eq: "up" } }) {
        amount
      }

      downTransactions: transactions(where: { type: { _eq: "down" } }) {
        amount
      }

      xpTimeline: transactions(
        where: { type: { _eq: "xp" } }
        order_by: { createdAt: asc }
      ) {
        amount
        createdAt
      }
    }
  }
`;




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
