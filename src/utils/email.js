import emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_PUBLIC_KEY);

export const sendEmail = (discordId, email, message) => {
  const templateParams = {
    discordId,
    email,
    message
  };

  return emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams)
    .then(function (response) {
      console.log("Email successfully sent!", response);
      return response;
    })
    .catch(function (error) {
      console.error("Approval email delivery failed", error);
    });
};
