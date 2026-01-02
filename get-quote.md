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

<!-- ===== Deferred JS ===== -->
<script defer>
document.addEventListener('DOMContentLoaded',()=>{
const t=document.getElementById("full_name"),e=document.getElementById("phone"),n=document.getElementById("zip"),o=document.getElementById("email");
t.addEventListener("blur",()=>{const a=document.getElementById("name-error");t.value.trim()?a.style.display="none":(a.textContent="Full Name is required.",a.style.display="block")});
e.addEventListener("input",t=>{let a=t.target.value.replace(/\D/g,"").substring(0,10),r="";a.length>6?r=`(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6)}`:a.length>3?r=`(${a.slice(0,3)}) ${a.slice(3)}`:a.length>0&&(r=`(${a}`),t.target.value=r});
e.addEventListener("blur",()=>{const t=document.getElementById("phone-error"),a=e.value.replace(/\D/g,"");a.length!==10?(t.textContent="Please enter a valid 10-digit phone number.",t.style.display="block"):t.style.display="none"});
n.addEventListener("input",()=>{n.value=n.value.replace(/\D/g,"").substring(0,5)});
n.addEventListener("blur",()=>{const t=document.getElementById("zip-error");n.value.length!==5?(t.textContent="ZIP code must be 5 digits.",t.style.display="block"):t.style.display="none"});
o.addEventListener("blur",()=>{const t=document.getElementById("email-error");o.checkValidity()?t.style.display="none":(t.textContent="Please enter a valid email address.",t.style.display="block")})});
</script>

<!-- ===== Self-hosted fonts example ===== -->
<link rel="stylesheet" href="/assets/fonts/roboto-400-500.css">
