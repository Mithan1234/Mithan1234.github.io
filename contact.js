// ==============================================================================
// TELEGRAM DIRECT CONTACT FORM INTEGRATION
// ==============================================================================
// HOW TO CONFIGURE IN 1 MINUTE:
// 1. Open Telegram, message @BotFather, send /newbot, and copy your BOT TOKEN.
// 2. Message @userinfobot to get your personal numeric CHAT ID.
// 3. Paste both values below between the quotes:
// ==============================================================================

const TELEGRAM_CONFIG = {
  botToken: "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc", // e.g. "7123456789:AAHqXXXXXXXXXXXXXXXXXXXXX"
  chatId: "1923062857"      // e.g. "123456789"
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
      TELEGRAM_CONFIG.botToken === "YOUR_TELEGRAM_BOT_TOKEN_HERE" ||
      TELEGRAM_CONFIG.chatId === "YOUR_TELEGRAM_CHAT_ID_HERE"
    ) {
      alert(
        "Setup required: Please open 'contact.js' and paste your Telegram Bot Token and Chat ID to start receiving messages!"
      );
      return;
    }

    // Collect input values
    const senderName = document.getElementById("user-name").value.trim();
    const senderEmail = document.getElementById("user-email").value.trim();
    const senderSubject = document.getElementById("user-subject").value.trim();
    const senderMessage = document.getElementById("user-message").value.trim();

    // Format message text for Telegram
    const formattedText = 
      "🔔 *New Message from Your Portfolio Website*\n\n" +
      "👤 *Name:* " + senderName + "\n" +
      "📧 *Email:* " + senderEmail + "\n" +
      "📌 *Subject:* " + senderSubject + "\n\n" +
      "💬 *Message:*\n" + senderMessage + "\n\n" +
      "🕒 *Timestamp:* " + new Date().toLocaleString();

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
        text: formattedText,
        parse_mode: "Markdown"
      })
    })
      .then(function (response) {
        if (response.ok) {
          alert("Thank you, " + senderName + "! Your message was sent directly to my Telegram. I will reply soon.");
          contactForm.reset();
        } else {
          throw new Error("Telegram API rejected the request.");
        }
      })
      .catch(function (error) {
        console.error("Telegram Form Error:", error);
        alert(
          "Could not send your message via Telegram. Please check your bot token/chat ID in contact.js or reach out via direct email."
        );
      })
      .finally(function () {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      });
  });
});
