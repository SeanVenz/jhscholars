import emailjs from "emailjs-com";

emailjs.init("PLDfHlTUdbwb7KrUe");

export const sendEmail = (discordId, email, message) => {
  const templateParams = {
    discordId,
    email,
    message
  };

  return emailjs.send("service_c04rq66", "template_qy0n03u", templateParams)
    .then(function (response) {
      console.log("Email successfully sent!", response);
      return response;
    })
    .catch(function (error) {
      console.error("Approval email delivery failed", error);
    });
};
