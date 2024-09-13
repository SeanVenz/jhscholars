import emailjs from "emailjs-com";

emailjs.init("fyXPkUK0et9qP9fNq");

export const sendEmail = (discordId, email, message) => {
  const templateParams = {
    discordId,
    email,
    message
  };

  emailjs.send("service_c04rq66", "template_qy0n03u", templateParams).then(
    function (response) {},
    function (error) {
      console.error("Approval email delivery failed", error);
    }
  );
};
