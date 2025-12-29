(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Sending…";

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    )
    .then(() => {
      status.textContent = "Message sent successfully.";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Something went wrong. Please try again.";
    });
});
