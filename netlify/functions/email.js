import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { Email, Subject, Message, "Full name": FullName } = JSON.parse(event.body);

    if (!Email || !Subject || !Message || !FullName) {
      throw new Error("Missing required fields.");
    }

    const formData = {
      access_key: process.env.VITE_EMAIL_ACCESS_KEY,
      Email,
      "Full name": FullName,
      Subject,
      Message
    };

    console.log("Form submission attempt."); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Web3Forms API Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Web3Forms response status:", result.success); 

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error in sendEmail function:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
