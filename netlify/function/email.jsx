import fetch from "node-fetch";

export async function handler(event) {
  const { email, subject, message } = JSON.parse(event.body);

  const formData = new URLSearchParams();
  formData.append("access_key", process.env.EMAIL_ACCESS_KEY);  // Use the secret environment variable
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
