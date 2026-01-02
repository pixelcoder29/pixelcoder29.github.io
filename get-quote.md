---
layout: page
title: Get Quote
permalink: /get-quote/
---

<style>
/* ===== System font stack (best for conversions) ===== */
.quote-form,
.quote-form input,
.quote-form select,
.quote-form textarea,
.quote-form label,
.cta-button {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* ===== Shrink unused header space ===== */
.header-section {
  height: 25px;
  margin: 0;
  padding: 0;
}

/* ===== Form container ===== */
.quote-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}

.quote-form fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

/* ===== Layout ===== */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 650px) {
  .form-group {
    flex: 1 1 calc(50% - 10px);
  }
}

/* ===== Labels ===== */
.quote-form label {
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
}

/* ===== Inputs ===== */
.quote-form input,
.quote-form select,
.quote-form textarea {
  background-color: #d9f4cd;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.5;
}

.quote-form textarea {
  resize: vertical;
}

/* ===== Error styles ===== */
.error-message {
  color: #d93025;
  font-size: 12px;
  margin-top: 4px;
  display: none;
}

input:invalid,
select:invalid {
  outline: 2px solid #d93025;
}

/* ===== CTA ===== */
.cta-button {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
  font-size: 16px;
}

.cta-button:hover {
  background-color: #45a049;
}

/* ===== Privacy ===== */
.privacy-text {
  font-size: 12px;
  margin-top: 10px;
}
</style>

<form action="/payment-page" method="POST" class="quote-form" novalidate>
  <fieldset>

    <div class="form-row">
      <div class="form-group">
        <label for="full_name">Full Name *</label>
        <input type="text" id="full_name" name="full_name" required>
      </div>

      <div class="form-group">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" maxlength="14" required>
        <small class="error-message" id="phone-error"></small>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" required>
        <small class="error-message" id="email-error"></small>
      </div>

      <div class="form-group">
        <label for="zip">Zip Code *</label>
        <input type="text" id="zip" name="zip" placeholder="97201" maxlength="5" required>
        <small class="error-message" id="zip-error"></small>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="dogs">How many dogs do you have? *</label>
        <select id="dogs" name="dogs" required>
          <option value="" disabled selected>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>

      <div class="form-group">
        <label for="frequency">Service Frequency *</label>
        <select id="frequency" name="frequency" required>
          <option value="" disabled selected>Select</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="twice-weekly">Twice a Week</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label for="questions">Any questions?</label>
      <textarea id="questions" name="questions" rows="4"></textarea>
    </div>

    <p class="privacy-text">
      By submitting, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </p>

    <button type="submit" class="cta-button">Get My Free Quote</button>

  </fieldset>
</form>

<script>
/* ===== Phone auto-format ===== */
const phone = document.getElementById('phone');
const zip = document.getElementById('zip');
const email = document.getElementById('email');

phone.addEventListener('input', e => {
  let x = e.target.value.replace(/\D/g, '').substring(0,10);
  let f = x;
  if (x.length > 6) f = `(${x.slice(0,3)}) ${x.slice(3,6)}-${x.slice(6)}`;
  else if (x.length > 3) f = `(${x.slice(0,3)}) ${x.slice(3)}`;
  else if (x.length > 0) f = `(${x}`;
  e.target.value = f;
});

/* ===== ZIP: digits only ===== */
zip.addEventListener('input', () => {
  zip.value = zip.value.replace(/\D/g, '').substring(0,5);
});

/* ===== Inline validation messages ===== */
phone.addEventListener('blur', () => {
  const err = document.getElementById('phone-error');
  const digits = phone.value.replace(/\D/g, '');
  err.style.display = digits.length !== 10 ? 'block' : 'none';
  err.textContent = 'Please enter a valid 10-digit phone number.';
});

zip.addEventListener('blur', () => {
  const err = document.getElementById('zip-error');
  err.style.display = zip.value.length !== 5 ? 'block' : 'none';
  err.textContent = 'ZIP code must be 5 digits.';
});

email.addEventListener('blur', () => {
  const err = document.getElementById('email-error');
  err.style.display = email.checkValidity() ? 'none' : 'block';
  err.textContent = 'Please enter a valid email address.';
});
</script>
