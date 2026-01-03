---
layout: page
title: Get Quote
permalink: /get-quote/
---

<!-- ===== Preconnect for external origins ===== -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://stackpath.bootstrapcdn.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- ===== Critical CSS inlined ===== -->
<style>
*{box-sizing:border-box;margin:0;padding:0}body{background:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.header-section{height:25px} 
.quote-form{max-width:600px;margin:0 auto;padding:24px} 
.quote-form fieldset{border:none} 
.form-row{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:15px} 
.form-group{flex:1 1 100%;display:flex;flex-direction:column} 
@media(min-width:650px){.form-group{flex:1 1 calc(50% - 10px)}} 
.quote-form label{margin-bottom:6px;font-weight:bold;font-size:14px} 
.quote-form input,.quote-form select,.quote-form textarea{background-color:#d9f4cd;border:none;border-radius:8px;padding:10px;font-size:16px;width:100%;line-height:1.5} 
.quote-form input::placeholder,.quote-form textarea::placeholder{color:rgba(0,0,0,.4)} 
.quote-form select{color:rgba(0,0,0,.8)} 
.quote-form select option:disabled[selected]{color:rgba(0,0,0,.4)} 
.quote-form textarea{resize:vertical;height:40px} 
.error-message{color:#d93025;font-size:12px;margin-top:4px;display:none} 
.cta-button{background-color:#4CAF50;color:#fff;font-weight:bold;padding:14px 20px;border:none;border-radius:8px;cursor:pointer;margin-top:15px;width:100%;font-size:16px} 
.cta-button:hover{background-color:#45a049} 
.privacy-text{font-size:12px;margin-top:10px}
</style>

<form action="https://submit.jotform.com/submit/260018693859064/" method="POST" class="quote-form" novalidate>
<fieldset>
<div class="form-row">
  <div class="form-group">
    <label for="full_name">Full Name *</label>
    <input type="text" id="full_name" name="fullName" placeholder="John Doe" required spellcheck="false">
    <small class="error-message" id="name-error"></small>
  </div>
  <div class="form-group">
    <label for="phone">Phone Number *</label>
    <input type="tel" id="phone" name="phoneNumber" placeholder="(503) 123-4567" maxlength="14" required spellcheck="false">
    <small class="error-message" id="phone-error"></small>
  </div>
</div>

<div class="form-row">
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" placeholder="john@email.com" required spellcheck="false">
    <small class="error-message" id="email-error"></small>
  </div>
  <div class="form-group">
    <label for="zip">Zip Code *</label>
    <input type="text" id="zip" name="zipCode" placeholder="97202" maxlength="5" required spellcheck="false">
    <small class="error-message" id="zip-error"></small>
  </div>
</div>

<div class="form-row">
  <div class="form-group">
    <label for="dogs">How many dogs do you have? *</label>
    <select id="dogs" name="howMany" required>
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
    <select id="frequency" name="serviceFrequency" required>
      <option value="weekly" selected>Weekly</option>
      <option value="bi-weekly">Bi-Weekly</option>
      <option value="twice-weekly">Twice a Week</option>
    </select>
  </div>
</div>

<div class="form-group">
  <label for="questions">Any questions or concerns?</label>
  <textarea id="questions" name="anyQuestions" rows="3"></textarea>
</div>

<p class="privacy-text">By submitting, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.</p>
<button type="submit" class="cta-button">Get My Free Quote</button>
</fieldset>
</form>

<!-- ===== Deferred JS ===== -->
<script defer>
document.addEventListener('DOMContentLoaded', () => {
  const fullName = document.getElementById("full_name"),
        phone = document.getElementById("phone"),
        zip = document.getElementById("zip"),
        email = document.getElementById("email");

  // Full Name validation
  fullName.addEventListener("blur", () => {
    const err = document.getElementById("name-error");
    fullName.value.trim() ? err.style.display = "none" : (err.textContent = "Full Name is required.", err.style.display = "block");
  });

  // Phone input formatting
  phone.addEventListener("input", (event) => {
    let val = event.target.value.replace(/\D/g, "").substring(0, 10);
    let formatted = "";
    if (val.length > 6) formatted = `(${val.slice(0,3)}) ${val.slice(3,6)}-${val.slice(6)}`;
    else if (val.length > 3) formatted = `(${val.slice(0,3)}) ${val.slice(3)}`;
    else if (val.length > 0) formatted = `(${val}`;
    event.target.value = formatted;
  });

  // Phone blur validation
  phone.addEventListener("blur", () => {
    const err = document.getElementById("phone-error");
    const clean = phone.value.replace(/\D/g, "");
    clean.length !== 10 ? (err.textContent = "Please enter a valid 10-digit phone number.", err.style.display = "block") : err.style.display = "none";
  });

  // ZIP input
  zip.addEventListener("input", () => { zip.value = zip.value.replace(/\D/g, "").substring(0, 5); });
  zip.addEventListener("blur", () => {
    const err = document.getElementById("zip-error");
    zip.value.length !== 5 ? (err.textContent = "ZIP code must be 5 digits.", err.style.display = "block") : err.style.display = "none";
  });

  // Email validation
  email.addEventListener("blur", () => {
    const err = document.getElementById("email-error");
    email.checkValidity() ? err.style.display = "none" : (err.textContent = "Please enter a valid email address.", err.style.display = "block");
  });
});
</script>

<!-- ===== Self-hosted fonts example ===== -->
<link rel="stylesheet" href="/assets/fonts/roboto-400-500.css">
