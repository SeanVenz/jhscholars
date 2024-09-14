import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init("fyXPkUK0et9qP9fNq");

// Function to send email with proper error handling
export const sendEmail = (discordId, email, message) => {
  const templateParams = {
    discordId,
    email,
    message
  };

  // Return the emailjs.send promise so it can be handled in the component
  return emailjs.send("service_c04rq66", "template_qy0n03u", templateParams)
    .then(function (response) {
      // You can return a response here if needed
      console.log("Email successfully sent!", response);
      return response;
    })
    .catch(function (error) {
      // Reject the promise if there's an error
      console.error("Approval email delivery failed", error);
    });
};
