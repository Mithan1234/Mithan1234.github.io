// ==============================================================================
// TELEGRAM DIRECT CONTACT FORM INTEGRATION
// ==============================================================================

const TELEGRAM_CONFIG = {
  botToken: "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc";
  chatId: "1923062857";
};

// ==============================================================================
// FORM SUBMISSION HANDLER
// ==============================================================================
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form-card");
  const submitButton = document.querySelector(".form-action-button");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if configuration has been set
    if (
      !TELEGRAM_CONFIG.botToken ||
      !TELEGRAM_CONFIG.chatId ||
      TELEGRAM_CONFIG.botToken === "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc";
    ) {
      alert("Setup required: Please configure your Telegram Bot Token and Chat ID in contact.js.");
      return;
    }

    // Collect input values
    const senderName = document.getElementById("user-name").value.trim();
    const senderEmail = document.getElementById("user-email").value.trim();
    const senderSubject = document.getElementById("user-subject").value.trim();
    const senderMessage = document.getElementById("user-message").value.trim();

    // Clean, bulletproof text without markdown parser dependency
    const plainText =
      "🔔 NEW PORTFOLIO CONTACT MESSAGE\n" +
      "------------------------------------\n" +
      "👤 Name: " + senderName + "\n" +
      "📧 Email: " + senderEmail + "\n" +
      "📌 Subject: " + senderSubject + "\n\n" +
      "💬 Message:\n" + senderMessage + "\n" +
      "------------------------------------\n" +
      "🕒 Sent: " + new Date().toLocaleString();

    // Update button state to loading
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Sending message...";
    submitButton.disabled = true;

    // Send data to Telegram Bot API
    fetch("https://api.telegram.org/bot" + TELEGRAM_CONFIG.botToken + "/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: plainText
      })
    })
      .then(function (response) {
        return response.json().then(function (data) {
          if (response.ok && data.ok) {
            alert("Thank you, " + senderName + "! Your message was sent directly to my Telegram. I will reply soon.");
            contactForm.reset();
          } else {
            console.error("Telegram API Error:", data);
            if (data.description && data.description.includes("chat not found")) {
              alert(
                "Telegram Notice: Please open your bot (@Mithan1234bot) in Telegram and click 'START' once so it has permission to message you."
              );
            } else {
              alert("Telegram Error: " + (data.description || "Could not send message."));
            }
          }
        });
      })
      .catch(function (error) {
        console.error("Network/Form Error:", error);
        alert("Connection error while sending to Telegram. Please check your internet connection.");
      })
      .finally(function () {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      });
  });
});
