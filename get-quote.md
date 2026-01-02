---
layout: page
title: Get Quote
permalink: /get-quote/
---

<style>
/* ===== System font stack for conversions ===== */
.quote-form,
.quote-form input,
.quote-form select,
.quote-form textarea,
.quote-form label,
.cta-button {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* ===== Form container styling ===== */
.quote-form {
  max-width: 600px;      /* limits the total width of the form */
  margin: 0 auto;        /* center the form on the page */
  padding-left: 24px;    /* padding inside form */
  padding-right: 24px;
  box-sizing: border-box;
}

.quote-form fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

/* ===== Row container for 2-column layout ===== */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* space between columns */
  margin-bottom: 15px; /* space below row */
}

/* ===== Individual form field ===== */
.form-group {
  flex: 1 1 100%; /* full width by default */
  display: flex;
  flex-direction: column;
}

/* Two columns on larger screens */
@media (min-width: 650px) {
  .form-group {
    flex: 1 1 calc(50% - 10px); /* two columns with gap */
  }
}

/* ===== Labels styling ===== */
.quote-form label {
  margin-bottom: 6px;
  font-weight: bold;  /* labels are now bold */
  font-size: 14px;
}

/* ===== Inputs, selects, textarea styling ===== */
.quote-form input,
.quote-form select,
.quote-form textarea {
  background-color: #d9f4cd; /* brand color */
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;   /* optimized for conversions */
  width: 100%;       /* fields fill the container width */
  box-sizing: border-box;
  line-height: 1.5;
}

/* ===== Textarea resize ===== */
.quote-form textarea {
  resize: vertical;
}

/* ===== CTA button ===== */
.cta-button {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #45a049;
}

/* ===== Privacy text ===== */
.privacy-text {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 5px;
}

/* ===== Mobile adjustments ===== */
@media (max-width: 768px) {
  .quote-form {
    max-width: 90%;   /* form shrinks a bit on mobile */
    padding-left: 20px;
    padding-right: 20px;
  }

  .quote-form input,
  .quote-form select,
  .quote-form textarea {
    padding-left: 14px;
    padding-right: 14px;
  }
}

/* ===== Hide header section if present ===== */
.header-section {
  display: none;
  height: 0;
  margin: 0;
  padding: 0;
}
</style>

<form action="/payment-page" method="POST" class="quote-form">
  <fieldset>

    <div class="form-row">
      <div class="form-group">
        <label for="full_name">Full Name *</label>
        <input type="text" id="full_name" name="full_name" placeholder="Your full name" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" required>
      </div>
      <div class="form-group">
        <label for="zip">Zip Code *</label>
        <input type="text" id="zip" name="zip" placeholder="972xx" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
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
      <div class="form-group">
        <label for="frequency">How often would you like service? *</label>
        <select id="frequency" name="frequency" required>
          <option value="" disabled selected>Select service frequency</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="twice-weekly">Twice a Week</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label for="questions">Any questions or concerns?</label>
      <textarea id="questions" name="questions" placeholder="Anything we should know?" rows="4"></textarea>
    </div>

    <p class="privacy-text">
      By submitting, you acknowledge our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </p>

    <button type="submit" class="cta-button">Get Free Quote</button>
  </fieldset>
</form>
