// ==============================================================================
// TELEGRAM DIRECT CONTACT FORM INTEGRATION
// ==============================================================================
<<<<<<< HEAD

const TELEGRAM_CONFIG = {
  botToken: "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc";
  chatId: "1923062857";
=======
// HOW TO CONFIGURE IN 1 MINUTE:
// 1. Open Telegram, message @BotFather, send /newbot, and copy your BOT TOKEN.
// 2. Message @userinfobot to get your personal numeric CHAT ID.
// 3. Paste both values below between the quotes:
// ==============================================================================

const TELEGRAM_CONFIG = {
  botToken: "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc", // e.g. "7123456789:AAHqXXXXXXXXXXXXXXXXXXXXX"
  chatId: "1923062857"      // e.g. "123456789"
>>>>>>> 981d4154e28a00353d59aa3f71a8fc37291544c1
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
<<<<<<< HEAD
      !TELEGRAM_CONFIG.botToken ||
      !TELEGRAM_CONFIG.chatId ||
      TELEGRAM_CONFIG.botToken === "8843228862:AAHaEcnMzCZeztRo-fCoYbQe0dNKJhweZTc";
    ) {
      alert("Setup required: Please configure your Telegram Bot Token and Chat ID in contact.js.");
=======
      TELEGRAM_CONFIG.botToken === "YOUR_TELEGRAM_BOT_TOKEN_HERE" ||
      TELEGRAM_CONFIG.chatId === "YOUR_TELEGRAM_CHAT_ID_HERE"
    ) {
      alert(
        "Setup required: Please open 'contact.js' and paste your Telegram Bot Token and Chat ID to start receiving messages!"
      );
>>>>>>> 981d4154e28a00353d59aa3f71a8fc37291544c1
      return;
    }

    // Collect input values
    const senderName = document.getElementById("user-name").value.trim();
    const senderEmail = document.getElementById("user-email").value.trim();
    const senderSubject = document.getElementById("user-subject").value.trim();
    const senderMessage = document.getElementById("user-message").value.trim();

<<<<<<< HEAD
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
=======
    // Format message text for Telegram
    const formattedText = 
      "🔔 *New Message from Your Portfolio Website*\n\n" +
      "👤 *Name:* " + senderName + "\n" +
      "📧 *Email:* " + senderEmail + "\n" +
      "📌 *Subject:* " + senderSubject + "\n\n" +
      "💬 *Message:*\n" + senderMessage + "\n\n" +
      "🕒 *Timestamp:* " + new Date().toLocaleString();
>>>>>>> 981d4154e28a00353d59aa3f71a8fc37291544c1

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 981d4154e28a00353d59aa3f71a8fc37291544c1
      })
      .finally(function () {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      });
  });
});
