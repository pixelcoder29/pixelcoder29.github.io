---
layout: page
title: Get Quote
permalink: /get-quote/
---

<!-- ===== Preconnect critical origins ===== -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://stackpath.bootstrapcdn.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- ===== Critical CSS inlined ===== -->
<style>
*{box-sizing:border-box;margin:0;padding:0}body,.quote-form,.quote-form input,.quote-form select,.quote-form textarea,.quote-form label,.cta-button{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}body{background:#fff}.header-section{height:25px}.quote-form{max-width:600px;margin:0 auto;padding:24px}.quote-form fieldset{border:none}.form-row{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:15px}.form-group{flex:1 1 100%;display:flex;flex-direction:column}@media(min-width:650px){.form-group{flex:1 1 calc(50% - 10px)}}.quote-form label{margin-bottom:6px;font-weight:bold;font-size:14px}.quote-form input,.quote-form select,.quote-form textarea{background-color:#d9f4cd;border:none;border-radius:8px;padding:10px;font-size:16px;width:100%;line-height:1.5}.quote-form input::placeholder,.quote-form textarea::placeholder{color:rgba(0,0,0,.4)}.quote-form select{color:rgba(0,0,0,.8)}.quote-form select option:disabled[selected]{color:rgba(0,0,0,.4)}.quote-form textarea{resize:vertical;height:40px}.error-message{color:#d93025;font-size:12px;margin-top:4px;display:none}.cta-button{background-color:#4CAF50;color:#fff;font-weight:bold;padding:14px 20px;border:none;border-radius:8px;cursor:pointer;margin-top:15px;width:100%;font-size:16px}.cta-button:hover{background-color:#45a049}.privacy-text{font-size:12px;margin-top:10px}
</style>

<!-- ===== Optimized LCP Logo ===== -->
<img src="/assets/img/yard-guards-pdx-banner-logo-213x112.webp" 
     width="213" height="112" alt="Yard Guards PDX - Pet Waste Removal Logo" 
     fetchpriority="high" style="display:block;margin:0 auto 20px auto;">

<form action="/payment-page" method="POST" class="quote-form" novalidate>
<fieldset>
<div class="form-row">
<div class="form-group">
<label for="full_name">Full Name *</label>
<input type="text" id="full_name" name="full_name" placeholder="John Doe" required spellcheck="false">
<small class="error-message" id="name-error"></small>
</div>
<div class="form-group">
<label for="phone">Phone *</label>
<input type="tel" id="phone" name="phone" placeholder="(503) 123-4567" maxlength="14" required spellcheck="false">
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
<input type="text" id="zip" name="zip" placeholder="97202" maxlength="5" required spellcheck="false">
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
<option value="weekly" selected>Weekly</option>
<option value="bi-weekly">Bi-Weekly</option>
<option value="twice-weekly">Twice a Week</option>
</select>
</div>
</div>

<div class="form-group">
<label for="questions">Any questions or concerns?</label>
<textarea id="questions" name="questions" rows="2"></textarea>
</div>

<p class="privacy-text">By submitting, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.</p>
<button type="submit" class="cta-button">Get My Free Quote</button>
</fieldset>
</form>

<!-- ===== Deferred JS for form validation ===== -->
<script defer>
document.addEventListener('DOMContentLoaded',()=>{
const nameInput=document.getElementById("full_name"),
      phone=document.getElementById("phone"),
      zip=document.getElementById("zip"),
      email=document.getElementById("email");

nameInput.addEventListener("blur",()=>{
  const err=document.getElementById("name-error");
  nameInput.value.trim()?err.style.display="none":(err.textContent="Full Name is required.",err.style.display="block");
});

phone.addEventListener("input",e=>{
  let x=e.target.value.replace(/\D/g,"").substring(0,10),f='';
  if(x.length>6) f=`(${x.slice(0,3)}) ${x.slice(3,6)}-${x.slice(6)}`;
  else if(x.length>3) f=`(${x.slice(0,3)}) ${x.slice(3)}`;
  else if(x.length>0) f=`(${x}`;
  e.target.value=f;
});

phone.addEventListener("blur",()=>{
  const err=document.getElementById("phone-error"),digits=phone.value.replace(/\D/g,"");
  digits.length!==10?(err.textContent="Please enter a valid 10-digit phone number.",err.style.display="block"):err.style.display="none";
});

zip.addEventListener("input",()=>{zip.value=zip.value.replace(/\D/g,"").substring(0,5)});
zip.addEventListener("blur",()=>{
  const err=document.getElementById("zip-error");
  zip.value.length!==5?(err.textContent="ZIP code must be 5 digits.",err.style.display="block"):err.style.display="none";
});

email.addEventListener("blur",()=>{
  const err=document.getElementById("email-error");
  email.checkValidity()?err.style.display="none":(err.textContent="Please enter a valid email address.",err.style.display="block");
});
});
</script>
