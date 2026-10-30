const form = document.getElementById("contact-form");
const send = document.getElementById("send");

if (form && send) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("n");
    const email = document.getElementById("e");
    const message = document.getElementById("m");

    const fields = [name, email, message];
    const valid = fields.every((field) => field && field.value.trim() !== "");

    if (!valid) {
      send.textContent = "Please complete all fields";
      send.disabled = false;
      return;
    }

    if (email && !email.value.includes("@")) {
      send.textContent = "Please enter a valid email";
      return;
    }

    send.textContent = "Thanks, we will be in touch";
    form.reset();
  });
}
