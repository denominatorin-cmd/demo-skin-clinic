// ===== CONFIG =====
// WhatsApp number: country code + number, digits only. Placeholder below.
const CLINIC_WHATSAPP = "910000000000";
// ==================
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(this));
  const text = `Hi Lumière Skin Clinic, I'd like to book an appointment.\nName: ${d.name}\nPhone: ${d.phone}\nConcern: ${d.service || "-"}\nPreferred date: ${d.date || "-"}\nPreferred time: ${d.time || "-"}` + (d.message ? `\nMessage: ${d.message}` : "");
  window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  document.getElementById("formNote").textContent = "Thanks! WhatsApp should open with your details. (Sample site)";
  this.reset();
});
