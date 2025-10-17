document.addEventListener('DOMContentLoaded', function() {
  // WhatsApp redirect for JAMB form
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('studentName').value;
      const phone = document.getElementById('studentPhone').value;
      const email = document.getElementById('studentEmail').value;
      // WhatsApp number for foundation
      const waNumber = '2341234567890'; // Change to your real WhatsApp number
      const message = `Hello! My name is ${name}, phone: ${phone}, email: ${email}. I want to apply for JAMB sponsorship.`;
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = waUrl;
    });
  }
});
