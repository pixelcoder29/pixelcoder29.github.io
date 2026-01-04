---
layout: page
title: Get Quote
permalink: /get-quote/
---

<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="stackpath.bootstrapcdn.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.header-section{height:25px} 

/* --- Form Styles --- */
.quote-form{max-width:600px;margin:0 auto;padding:24px;position:relative} 
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
.form-error-banner{display:none;background:#fdd; color:#900; padding:10px; border-radius:8px; margin-bottom:15px; font-weight:bold;}

/* --- Under-Form Section --- */
.under-form{max-width:700px;margin:40px auto;padding:0 20px}
.under-form h2{font-size:28px;margin-bottom:20px;color:#333;text-align:center}

/* Micro CTAs */
.micro-cta{text-align:center;margin-bottom:30px;font-weight:bold;font-size:16px;color:#4CAF50;display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.micro-cta span{background:#e3f5d9;padding:6px 12px;border-radius:6px;cursor:pointer}

/* Benefits / Differentiators / FAQ */
.benefits, .differentiators, .faq{margin-bottom:40px}
.benefits .item, .differentiators .item{display:flex;align-items:flex-start;margin-bottom:20px}
.benefits .icon, .differentiators .icon{font-size:28px;margin-right:15px;color:#4CAF50}
.benefits .text, .differentiators .text{flex:1}
.faq h3{margin-bottom:10px;text-align:center}
.faq dl{margin-left:0}
.faq dt{font-weight:bold;margin-top:15px}
.faq dd{margin-left:15px;margin-bottom:10px}

/* Bottom CTA */
.bottom-cta{text-align:center;margin-top:20px}
.bottom-cta .cta-button{max-width:300px;margin:0 auto}
</style>

<!-- --- Form Section --- -->
<form class="quote-form" novalidate>
  <div class="form-error-banner" id="form-error">Submission failed. Please try again.</div>
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
        <small class="error-message" id="dogs-error"></small>
      </div>
      <div class="form-group">
        <label for="frequency">Service Frequency *</label>
        <select id="frequency" name="serviceFrequency" required>
          <option value="" disabled selected>Select</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
        </select>
        <small class="error-message" id="freq-error"></small>
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







<section id="hero-process" style="background:#f9f9f9;padding:60px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <!-- Hero headline -->
  <div style="text-align:center;margin-bottom:50px;">
    <h2 style="font-size:2rem;margin-bottom:10px;color:#333;">We Scoop, You Relax</h2>
    <p style="font-size:1.1rem;color:#555;">Let us handle the dirty work while you enjoy your yard and your time.</p>
  </div>

  <!-- Process steps -->
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:20px;max-width:1200px;margin:0 auto;padding:0 20px;">
    
    <div style="flex:1 1 300px;background:#4CAF50;color:#fff;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">1. Get Your Quote</h3>
      <p>Fill out our quick form and get an instant estimate tailored to your yard and pets.</p>
    </div>

    <div style="flex:1 1 300px;background:#4CAF50;color:#fff;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">2. Schedule Your Scoop</h3>
      <p>Choose the day and frequency that works best for you, and we’ll take care of the rest.</p>
    </div>

    <div style="flex:1 1 300px;background:#4CAF50;color:#fff;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">3. Enjoy a Poop-Free Yard</h3>
      <p>Relax knowing your yard is clean, safe, and ready for family and pets to enjoy.</p>
    </div>

  </div>
</section>

<style>
  #hero-process div:hover { transform: translateY(-5px); }

  /* Mobile stacking */
  @media(max-width:900px){
    #hero-process div { flex:1 1 100%; }
  }

  /* Remove extra margins/padding to edges */
  #hero-process { margin:0; padding-left:0; padding-right:0; }
</style>


<section id="benefits" style="width:100%;padding:60px 0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="text-align:center;margin-bottom:50px;max-width:900px;margin-left:auto;margin-right:auto;">
    <h2 style="font-size:2rem;margin-bottom:10px;color:#333;">Why Choose Our Poop Scooping Service?</h2>
    <p style="font-size:1.1rem;color:#555;">We take the dirty work off your hands, giving you back your time and a yard you can be proud of.</p>
  </div>

  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:20px;max-width:1200px;margin:0 auto;padding:0 20px;">
    <div style="flex:1 1 300px;background:#e0f7fa;color:#00796b;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">More Free Time</h3>
      <p>Stop spending hours cleaning up after your pets. Focus on what matters most while we handle the mess.</p>
    </div>

    <div style="flex:1 1 300px;background:#e0f7fa;color:#00796b;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">Stress-Free</h3>
      <p>Never worry about missing a cleanup. Our dependable service keeps your yard safe and clean.</p>
    </div>

    <div style="flex:1 1 300px;background:#e0f7fa;color:#00796b;padding:30px;border-radius:40px;box-shadow:0 10px 20px rgba(0,0,0,0.1);text-align:center;transition:transform .2s;">
      <h3 style="margin-bottom:10px;font-size:1.3rem;">Healthier Yard</h3>
      <p>Regular waste removal protects your grass and keeps your yard vibrant and free from harmful bacteria.</p>
    </div>
  </div>
</section>

<style>
  #benefits div:hover { transform: translateY(-5px); }

  @media(max-width:900px){
    #benefits div { flex:1 1 100%; }
  }

  #benefits { margin:0; padding-left:0; padding-right:0; }
</style>






<script defer>
document.addEventListener('DOMContentLoaded',()=>{

    const form = document.querySelector('.quote-form');
    const fullName = document.getElementById("full_name");
    const phone = document.getElementById("phone");
    const zip = document.getElementById("zip");
    const email = document.getElementById("email");
    const dogs = document.getElementById("dogs");
    const freq = document.getElementById("frequency");
    const questions = document.getElementById("questions");
    const formError = document.getElementById("form-error");

    function showError(el, msg){
        const error = el.parentElement.querySelector('.error-message');
        error.textContent = msg;
        error.style.display = 'block';
    }
    function clearError(el){
        const error = el.parentElement.querySelector('.error-message');
        error.style.display = 'none';
    }

    fullName.addEventListener("blur",()=>{ fullName.value.trim()?clearError(fullName):showError(fullName,"Full Name is required.") });
    phone.addEventListener("input", t=>{
        let a=t.target.value.replace(/\D/g,"").substring(0,10), r="";
        a.length>6?r=`(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6)}`:
        a.length>3?r=`(${a.slice(0,3)}) ${a.slice(3)}`:
        a.length>0&&(r=`(${a}`);
        t.target.value=r;
    });
    phone.addEventListener("blur",()=>{ phone.value.replace(/\D/g,"").length!==10?showError(phone,"Please enter a valid 10-digit phone number."):clearError(phone) });
    zip.addEventListener("input",()=>{ zip.value=zip.value.replace(/\D/g,"").substring(0,5) });
    zip.addEventListener("blur",()=>{ zip.value.length!==5?showError(zip,"ZIP code must be 5 digits."):clearError(zip) });
    email.addEventListener("blur",()=>{ email.checkValidity()?clearError(email):showError(email,"Please enter a valid email address.") });
    dogs.addEventListener("change",()=>{ dogs.value?clearError(dogs):showError(dogs,"Please select how many dogs you have.") });
    freq.addEventListener("change",()=>{ freq.value?clearError(freq):showError(freq,"Please select a service frequency.") });

    form.addEventListener('submit', async function(e){
        e.preventDefault();
        formError.style.display = 'none';
        let valid = true;
        if(!fullName.value.trim()){ showError(fullName,"Full Name is required."); valid=false; }
        if(phone.value.replace(/\D/g,"").length!==10){ showError(phone,"Please enter a valid 10-digit phone number."); valid=false; }
        if(!email.checkValidity()){ showError(email,"Please enter a valid email address."); valid=false; }
        if(zip.value.length!==5){ showError(zip,"ZIP code must be 5 digits."); valid=false; }
        if(!dogs.value){ showError(dogs,"Please select how many dogs you have."); valid=false; }
        if(!freq.value){ showError(freq,"Please select a service frequency."); valid=false; }
        if(!valid) return;

        const freqMap = { "weekly": "Weekly", "bi-weekly": "Bi-Weekly" };
        const freqValue = freqMap[freq.value];

        const data = new URLSearchParams();
        data.append("fullName", fullName.value.trim());
        data.append("phoneNumber", phone.value.trim());
        data.append("email", email.value.trim());
        data.append("zipCode", zip.value.trim());
        data.append("howMany", dogs.value);
        data.append("serviceFrequency", freqValue);
        data.append("anyQuestions", questions.value.trim());

        try {
            const response = await fetch('https://hook.us2.make.com/6ign8tg00oc6upzncx43ufqo4qdw4g7c', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: data.toString()
            });

            if(response.ok){
                window.location.href = '/thank-you/';
            } else {
                formError.style.display = 'block';
            }
        } catch(err){
            console.error(err);
            formError.style.display = 'block';
        }
    });
});
</script>
