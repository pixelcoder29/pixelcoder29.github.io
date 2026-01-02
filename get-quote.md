---
layout: page
title: Get Quote
hide-title: true
permalink: /get-quote/
---

# Get Your Free Quote

A cleaner yard starts here — just tell us a few details and we'll provide your free quote.  

<form action="/payment-page" method="POST">
  <fieldset>
    <label for="full_name">Full Name *</label>
    <input type="text" id="full_name" name="full_name" placeholder="Your full name" required>

    <label for="email">Email *</label>
    <input type="email" id="email" name="email" placeholder="example@example.com" required>

    <label for="phone">Phone *</label>
    <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" required>

    <label for="zip">Zip Code *</label>
    <input type="text" id="zip" name="zip" placeholder="972xx" required>

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

    <label for="frequency">How often would you like service? *</label>
    <select id="frequency" name="frequency" required>
      <option value="" disabled selected>Select service frequency</option>
      <option value="weekly">Weekly</option>
      <option value="bi-weekly">Bi-Weekly</option>
      <option value="twice-weekly">Twice a Week</option>
    </select>

    <label for="questions">Any questions or concerns?</label>
    <textarea id="questions" name="questions" placeholder="Anything we should know?" rows="4"></textarea>

    <p class="privacy-text">
      By submitting, you acknowledge our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </p>

    <button type="submit" class="cta-button">Get Free Quote</button>
  </fieldset>
</form>
