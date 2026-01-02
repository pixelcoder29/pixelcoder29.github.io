---
layout: page
title: "Get a Quote"
permalink: /get-quote/
---

# Get Your Quote – Yard Guards PDX

A cleaner yard starts here — just tell us a few details!

<form action="/getquote-step2/" method="POST">
  <div>
    <label for="full_name">Full Name *</label><br>
    <input type="text" id="full_name" name="full_name" placeholder="Your full name" required>
  </div>

  <div>
    <label for="email">Email Address *</label><br>
    <input type="email" id="email" name="email" placeholder="example@example.com" required>
  </div>

  <div>
    <label for="phone">Phone Number *</label><br>
    <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" required>
  </div>

  <div>
    <label for="dogs">How many dogs do you have? *</label><br>
    <select id="dogs" name="dogs" required>
      <option value="" disabled selected>Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6+</option>
    </select>
  </div>

  <div>
    <label for="frequency">Service Frequency *</label><br>
    <select id="frequency" name="frequency" required>
      <option value="" disabled selected>Select</option>
      <option value="weekly">Weekly</option>
      <option value="bi-weekly">Bi-weekly</option>
      <option value="twice-a-week">Twice a week</option>
    </select>
  </div>

  <div>
    <label for="questions">Any questions or concerns?</label><br>
    <textarea id="questions" name="questions" placeholder="Let us know anything we should know..." rows="3"></textarea>
  </div>

  <div>
    <input type="checkbox" id="privacy" name="privacy" required>
    <label for="privacy">
      I agree to the <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-conditions">Terms & Conditions</a> *
    </label>
  </div>

  <div>
    <button type="submit">Get My Quote</button>
  </div>
</form>

<p style="margin-top:1rem;">
  📌 Currently serving Portland, OR only.
</p>
