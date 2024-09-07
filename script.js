// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you could send the form data to a server or show a confirmation
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // For now, just show an alert
  alert("Thank you for your message!");
});
