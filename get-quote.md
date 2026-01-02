---
layout: page
title: Get Quote
permalink: /get-quote/
---

<form action="/payment-page" method="POST">
  <fieldset>

    <!-- Row 1: Full Name / Phone -->
    <div class="form-row">
      <div class="form-field">
        <label for="full_name">Full Name *</label>
        <input type="text" id="full_name" name="full_name" placeholder="Your full name" required>
      </div>
      <div class="form-field">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" required>
      </div>
    </div>

    <!-- Row 2: Email / Zip -->
    <div class="form-row">
      <div class="form-field">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" required>
      </div>
      <div class="form-field">
        <label for="zip">Zip Code *</label>
        <input type="text" id="zip" name="zip" placeholder="972xx" required>
      </div>
    </div>

    <!-- Row 3: Dogs / Frequency -->
    <div class="form-row">
      <div class="form-field">
        <label for="dogs">How many dogs do you have? *</label>
        <select id="dogs" name="dogs" required>
          <option value="" disabled selected>Select number of dogs</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div class="form-field">
        <label for="frequency">How often would you like service? *</label>
        <select id="frequency" name="frequency" required>
          <option value="" disabled selected>Select service frequency</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="twice-weekly">Twice a Week</option>
        </select>
      </div>
    </div>

    <!-- Questions -->
    <div class="form-field">
      <label for="questions">Any questions or concerns?</label>
      <textarea id="questions" name="questions" placeholder="Anything we should know?" rows="4"></textarea>
    </div>

    <!-- Privacy -->
    <p class="privacy-text">
      By submitting, you acknowledge our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </p>

    <!-- CTA -->
    <button type="submit" class="cta-button">Get Free Quote</button>

  </fieldset>
</form>

<style>
/* ---------- Form Styling ---------- */
form fieldset {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: sans-serif;
  font-size: 0.9rem;
  padding: 0;
  border: none;
}

/* ---------- Flex rows for 2-column layout ---------- */
.form-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

/* Two-column layout for screens wider than 650px */
@media (min-width: 650px) {
  .form-row {
    flex-direction: row;
    gap: 16px;
  }
}

/* ---------- Inputs & Selects ---------- */
form input[type="text"],
form input[type="email"],
form input[type="tel"],
form select,
form textarea {
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  background-color: #d9f4cd; /* brand color */
  font-size: 0.9rem;
  box-sizing: border-box;
}

/* ---------- Textarea ---------- */
form textarea {
  resize: vertical;
}

/* ---------- Button ---------- */
.cta-button {
  background-color: #4CAF50;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #45a049;
}

/* ---------- Privacy text ---------- */
.privacy-text {
  font-size: 0.85rem;
  color: #555;
  margin-top: 8px;
}

.privacy-text a {
  color: #4CAF50;
  text-decoration: underline;
}
</style>
