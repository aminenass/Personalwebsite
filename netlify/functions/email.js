import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { Email, Subject, Message, "Full name": FullName } = JSON.parse(event.body);

    // Ensure all required fields exist
    if (!Email || !Subject || !Message || !FullName) {
      throw new Error("Missing required fields.");
    }

    // Create FormData
    const formData = new URLSearchParams();
    formData.append("access_key", process.env.VITE_EMAIL_ACCESS_KEY); 
    formData.append("Email", Email);
    formData.append("Full name", FullName);
    formData.append("Subject", Subject);
    formData.append("Message", Message);

    console.log("FormData:", Object.fromEntries(formData)); // Debugging logs

    // Send data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {  "Content-Type": "application/json",
                  "Accept": "application/json"
     },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Web3Forms API Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Web3Forms Response:", result);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
