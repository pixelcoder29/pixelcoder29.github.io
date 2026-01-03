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

<form class="quote-form" novalidate>
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

<!-- ===== Client-Side Validation + Make Webhook Submission ===== -->
<script defer>
document.addEventListener('DOMContentLoaded',()=>{

    const form = document.querySelector('.quote-form');
    const t = document.getElementById("full_name");
    const e = document.getElementById("phone");
    const n = document.getElementById("zip");
    const o = document.getElementById("email");
    const dogs = document.getElementById("dogs");
    const freq = document.getElementById("frequency");

    function showError(el, msg){
        const error = el.parentElement.querySelector('.error-message');
        error.textContent = msg;
        error.style.display = 'block';
    }

    function clearError(el){
        const error = el.parentElement.querySelector('.error-message');
        error.style.display = 'none';
    }

    // Validation events
    t.addEventListener("blur",()=>{ t.value.trim()?clearError(t):showError(t,"Full Name is required.") });

    e.addEventListener("input", t=>{
        let a=t.target.value.replace(/\D/g,"").substring(0,10), r="";
        a.length>6?r=`(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6)}`:
        a.length>3?r=`(${a.slice(0,3)}) ${a.slice(3)}`:
        a.length>0&&(r=`(${a}`);
        t.target.value=r;
    });

    e.addEventListener("blur",()=>{
        const digits = e.value.replace(/\D/g,"");
        digits.length!==10?showError(e,"Please enter a valid 10-digit phone number."):clearError(e);
    });

    n.addEventListener("input",()=>{ n.value=n.value.replace(/\D/g,"").substring(0,5) });
    n.addEventListener("blur",()=>{ n.value.length!==5?showError(n,"ZIP code must be 5 digits."):clearError(n) });

    o.addEventListener("blur",()=>{ o.checkValidity()?clearError(o):showError(o,"Please enter a valid email address.") });

    // Submit handler
    form.addEventListener('submit', async function(e){
        e.preventDefault();

        // Final validation
        if(!t.value.trim() || !e.value.replace(/\D/g,"").length===10 || !o.checkValidity() || !n.value.length===5 || !dogs.value || !freq.value){
            alert("Please fix the errors before submitting.");
            return;
        }

        // Prepare data
        const data = new URLSearchParams();
        data.append("fullName", t.value.trim());
        data.append("phoneNumber", e.value.trim());
        data.append("email", o.value.trim());
        data.append("zipCode", n.value.trim());
        data.append("howMany", dogs.value);
        data.append("serviceFrequency", freq.value);
        data.append("anyQuestions", document.getElementById("questions").value.trim());

        try {
            const response = await fetch('https://hook.us2.make.com/xlq2u7rc1gf2h9wtzjwrxqcij6p96spd', {
                method: 'POST',
                headers: {
                    'x-make-apikey': 'YOUR_API_KEY_HERE', // replace with your Make API key
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data.toString()
            });

            if(response.ok){
                alert("Form submitted successfully!");
                window.location.href = '/thank-you/';
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch(err){
            console.error(err);
            alert("Submission failed. Please check your connection.");
        }
    });

});
</script>
