---
layout: page
title: Get Quote
permalink: /get-quote/
---

<style>
/* Form container styling */
.quote-form fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

/* Row container for 2-column layout */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* space between columns */
  margin-bottom: 15px; /* space below row */
}

/* Individual form field */
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

/* Labels styling */
.quote-form label {
  margin-bottom: 6px;
  font-weight: 500;
}

/* Inputs, selects, textarea styling */
.quote-form input,
.quote-form select,
.quote-form textarea {
  background-color: #d9f4cd; /* brand color */
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

/* Textarea resize */
.quote-form textarea {
  resize: vertical;
}

/* CTA button */
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

/* Privacy text */
.privacy-text {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 5px;
}

/* Add side padding for small screens */
@media (max-width: 768px) {
  form input,
  form select,
  form textarea {
    padding-left: 12px;   /* adjust as needed */
    padding-right: 12px;  /* adjust as needed */
    box-sizing: border-box; /* ensures padding doesn’t break width */
  }

  form {
    padding-left: 12px;   /* optional extra padding on the form container */
    padding-right: 12px;
  }
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
