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

/* --- Full-width breakout for sections below the form --- */
.full-bleed-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* Inner content width control */
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* Process / benefit cards */
.full-bleed-wrapper .cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.full-bleed-wrapper .card {
  flex: 1 1 0;
  min-width: 260px;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform .2s;
}

.full-bleed-wrapper .card:hover {
  transform: translateY(-5px);
}

@media (max-width: 900px) {
  .full-bleed-wrapper .card {
    flex: 1 1 100%;
  }
}
/* --- Modal Styles --- */
.quote-form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  position: relative;
  margin: 10% auto;
  max-width: 600px;
  width: 90%;
  box-sizing: border-box;
  max-height: 80vh;
  overflow-y: auto;
}

/* Mobile Adjustments - Full Screen */
@media (max-width: 600px) {
  .modal-content {
    margin: 0;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 60px 16px 16px 16px; /* Extra padding at top for close button */
    overflow-y: auto;
  }
  
  .quote-form-modal #close-form {
    top: 20px;
    right: 20px;
    font-size: 28px;
    z-index: 10;
    background: white;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
}




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
    <button type="submit" class="cta-button">Request My Quote</button>
  </fieldset>
</form>

<!-- --- Hero / Process Section --- -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <div style="text-align:center;margin-bottom:50px;">
      <h2>We Scoop, You Relax</h2>
      <p>Let us handle the dirty work while you enjoy your yard and your time.</p>
    </div>

    <div class="cards">
      <div class="card" style="background:#4CAF50;color:#fff;">
        <h3>Request My Quote</h3>
      </div>
      <div class="card" style="background:#4CAF50;color:#fff;">
        <h3>We Handle Scheduling</h3>
      </div>
      <div class="card" style="background:#4CAF50;color:#fff;">
        <h3>No More Poop!</h3>
      </div>
    </div>
  </div>
</div>

<!-- --- Section 1: Customer Benefits --- -->
<div class="full-bleed-wrapper" style="background:#ffffff;">
  <div class="section-inner">
    <div style="text-align:center;margin-bottom:50px;">
      <h2>Why Choose Yard Guards PDX?</h2>
      <p>Effortless yard cleanup. More free time. Peace of mind.</p>
    </div>

    <div class="cards">
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>🕒 Save Time</h3>
        <p>We handle the pet waste so you can focus on what matters most.</p>
      </div>
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>✅ Zero Hassle</h3>
        <p>Reliable cleanups, scheduled and managed entirely by our team.</p>
      </div>
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>🌿 Enjoy Your Yard</h3>
        <p>Healthy, vibrant lawn that’s safe for your family and pets.</p>
      </div>
    </div>
  </div>
</div>


<!-- --- Section 2: Trust / Proof-Focused (with image) --- -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <div style="display:flex; flex-wrap:wrap; align-items:flex-start; gap:40px;">
      
      <!-- Left: Bullet Points -->
      <div style="flex:1; min-width:300px;">
        <h2 style="text-align:left; margin-bottom:20px;">Our Commitment to Your Yard</h2>
        <p style="text-align:left; margin-bottom:20px;">We keep your yard clean and safe so you can relax knowing the job is done right.</p>
        <ul style="list-style:none; padding-left:0; font-size:18px; line-height:1.8; color:#00796b;">
          <li>🚛 We haul away all pet waste for a clean yard</li>
          <li>🛡️ Enjoy a clean, safe yard every day</li>
          <li>📸 Get a photo of your secured gate after every visit</li>
          <li>📱 We send a text when we’re on our way</li>
          <li>🐶 Trained, dog-loving team you can trust</li>
          <li>🔄 No contracts, fully flexible service</li>
          <li>🚗 Spot our branded vehicle magnet on arrival</li>
          <li>⭐ “They did amazing! Highly recommend to anyone who wants to take one thing off their plate.” – Wyatt D.</li>
        </ul>
      </div>
      
      <!-- Right: Image -->
      <div style="flex:1; min-width:300px; text-align:center;">
        <img src="/assets/img/yard-guards-pdx-trust-photo.webp" alt="Clean Yard" style="max-width:100%; border-radius:12px;">
      </div>

    </div>
  </div>
</div>

<!-- Clean Yard, Happy Pets, Happy Home Section -->
<section style="text-align:center; padding: 50px 20px;">
  <h2>Clean Yard, Happy Pets, Happy Home</h2>
</section>

<!-- Frequently Asked Questions (FAQs) -->
<section style="background-color: #f8f8f8; padding: 40px 20px;">
  <div style="max-width: 800px; margin: 0 auto; font-size: 16px; color: #333;">
    <h3>Frequently Asked Questions (FAQs)</h3>

    <div style="margin-bottom: 20px;">
      <h4>Q: Can you clean with my dog in the yard?</h4>
      <p>A: Yes, we love cleaning with dogs! However, if your dog has shown signs of aggression, we ask that you keep them inside for the safety of our team. If your dog becomes aggressive, we will kindly ask you to secure them indoors for the duration of the service.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: Do I need to be home during the service?</h4>
      <p>A: No, you don’t need to be home! As long as we have access to your yard, we’ll take care of the rest. We’ll send you a text notification when we’re on our way, so you’ll always know when to expect us.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: What areas do you serve?</h4>
      <p>A: We proudly serve all of East Portland, including areas beyond the Willamette River, extending east to the end of Portland. We plan to expand our service areas soon!</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: How often can I schedule dog waste removal services?</h4>
      <p>A: We offer weekly and bi-weekly services to keep your yard clean, safe, and odor-free. You can choose the frequency that fits your needs.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: How do you ensure the safety of my pets?</h4>
      <p>A: Pet safety is a top priority. We sanitize our tools and boots between yards, and we ensure all gates are securely closed after service. If we notice any abnormalities in pet waste that could indicate health issues, we’ll alert you right away.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: Do you offer dog waste removal for commercial properties?</h4>
      <p>A: Yes, we provide professional dog waste removal services for commercial properties. Whether it’s a dog park or a pet-friendly business, we’ve got you covered!</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: How do you handle bad weather?</h4>
      <p>A: We always put safety first. If bad weather such as heavy rain or snow makes it unsafe to work, we’ll reschedule your service to the next available day.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: How does billing work for recurring services?</h4>
      <p>A: We charge your card on file after each service. This ensures that you only pay for the services completed. If a service is skipped, you won’t be charged.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: Are you insured?</h4>
      <p>A: We are not currently insured, but we take every precaution to ensure your property and pets are safe while we work.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: What if I need to skip a service day?</h4>
      <p>A: Life happens! If you need to skip a service, simply let us know, and we’ll reschedule for a more convenient day.</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4>Q: What happens if there’s an issue with the service?</h4>
      <p>A: We strive to provide excellent service every time. If any issues arise, please contact us right away, and we’ll address the situation promptly.</p>
    </div>
  </div>
</section>

<!-- --- Final CTA Section: "Ready for a Clean, Stress-Free Yard?" --- -->
<section style="text-align:center; padding: 50px 20px; background-color: #f8f8f8;">
  <h2>Ready for a Clean, Stress-Free Yard?</h2>
  <button id="open-form" class="cta-button" style="max-width:300px; margin: 20px auto;">Get My Instant Quote</button>
</section>

<!-- --- Hidden Form Modal (same as the form at the top) --- -->
<div id="quote-form-modal" class="quote-form-modal" style="display: none;">
  <div class="modal-content" style="max-width:600px; margin: 0 auto; padding:24px; position: relative; background: white; border-radius: 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
    <span id="close-form" style="position: absolute; top: 10px; right: 15px; font-size: 20px; cursor: pointer;">&times;</span>
    
    <!-- --- This is the same form as at the top --- -->
    <form class="quote-form" novalidate>
      <div class="form-error-banner" id="form-error">Submission failed. Please try again.</div>
      <fieldset>
        <div class="form-row">
          <div class="form-group">
            <label for="full_name">Full Name *</label>
            <input type="text" id="full_name_modal" name="fullName" placeholder="John Doe" required spellcheck="false">
            <small class="error-message" id="name-error-modal"></small>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input type="tel" id="phone_modal" name="phoneNumber" placeholder="(503) 123-4567" maxlength="14" required spellcheck="false">
            <small class="error-message" id="phone-error-modal"></small>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email_modal" name="email" placeholder="john@email.com" required spellcheck="false">
            <small class="error-message" id="email-error-modal"></small>
          </div>
          <div class="form-group">
            <label for="zip">Zip Code *</label>
            <input type="text" id="zip_modal" name="zipCode" placeholder="97202" maxlength="5" required spellcheck="false">
            <small class="error-message" id="zip-error-modal"></small>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="dogs">How many dogs do you have? *</label>
            <select id="dogs_modal" name="howMany" required>
              <option value="" disabled selected>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <small class="error-message" id="dogs-error-modal"></small>
          </div>
          <div class="form-group">
            <label for="frequency">Service Frequency *</label>
            <select id="frequency_modal" name="serviceFrequency" required>
              <option value="" disabled selected>Select</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
            </select>
            <small class="error-message" id="freq-error-modal"></small>
          </div>
        </div>

        <div class="form-group">
          <label for="questions">Any questions or concerns?</label>
          <textarea id="questions_modal" name="anyQuestions" rows="3"></textarea>
        </div>

        <p class="privacy-text">By submitting, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.</p>
        <button type="submit" class="cta-button">Request My Quote</button>
      </fieldset>
    </form>
  </div>
</div>


<script>
  // JavaScript for opening and closing the form popup
const openFormButton = document.getElementById("open-form");
const quoteFormModal = document.getElementById("quote-form-modal");
const closeFormButton = document.getElementById("close-form");

// Open the form modal
openFormButton.addEventListener("click", () => {
  quoteFormModal.style.display = "block";
});

// Close the form modal
closeFormButton.addEventListener("click", () => {
  quoteFormModal.style.display = "none";
});

// Close the form if the user clicks outside of it
//window.addEventListener("click", (event) => {
//  if (event.target === quoteFormModal) {
//    quoteFormModal.style.display = "none";
//  }
//});

</script>





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
