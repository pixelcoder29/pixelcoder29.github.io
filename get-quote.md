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
body{background:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
.header-section{height:25px} 

/* --- Form Styles --- */
.quote-form{max-width:600px;margin:0 auto;padding:32px 24px;position:relative} 
.quote-form fieldset{border:none} 
.form-row{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:20px} 
.form-group{flex:1 1 100%;display:flex;flex-direction:column} 
@media(min-width:650px){.form-group{flex:1 1 calc(50% - 10px)}} 
.quote-form label{margin-bottom:8px;font-weight:600;font-size:15px;color:#1a1a1a} 
.quote-form input,.quote-form select,.quote-form textarea{background-color:#d9f4cd;border:2px solid transparent;border-radius:12px;padding:14px 16px;font-size:16px;width:100%;line-height:1.5;transition:all 0.3s ease} 
.quote-form input:focus,.quote-form select:focus,.quote-form textarea:focus{outline:none;border-color:#4CAF50;box-shadow:0 0 0 4px rgba(76,175,80,0.1);background-color:#e8f9e5}
.quote-form input::placeholder,.quote-form textarea::placeholder{color:rgba(0,0,0,.45)} 
.quote-form select{color:rgba(0,0,0,.85)} 
.quote-form select option:disabled[selected]{color:rgba(0,0,0,.45)} 
.quote-form textarea{resize:vertical;min-height:100px} 
.error-message{color:#d93025;font-size:13px;margin-top:8px;display:none;font-weight:500} 
.cta-button{background:linear-gradient(135deg, #4CAF50 0%, #45a049 100%);color:#fff;font-weight:700;padding:18px 32px;border:none;border-radius:12px;cursor:pointer;margin-top:24px;width:100%;font-size:18px;transition:all 0.3s ease;box-shadow:0 4px 20px rgba(76,175,80,0.3);letter-spacing:0.3px} 
.cta-button:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(76,175,80,0.4)} 
.cta-button:active{transform:translateY(0)}
.privacy-text{font-size:13px;margin-top:16px;color:#666;line-height:1.5} 
.privacy-text a{color:#4CAF50;text-decoration:none;font-weight:600}
.privacy-text a:hover{text-decoration:underline}
.form-error-banner{display:none;background:#fdd;color:#900;padding:14px;border-radius:12px;margin-bottom:20px;font-weight:600;font-size:14px}

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
  padding: 80px 40px;
}

@media (max-width: 768px) {
  .section-inner {
    padding: 60px 24px;
  }
}

@media (max-width: 480px) {
  .section-inner {
    padding: 50px 20px;
  }
}

/* Section Headers */
.section-inner h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #1a1a1a;
  letter-spacing: -1px;
  line-height: 1.2;
}

.section-inner > div > h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #1a1a1a;
  letter-spacing: -1px;
  line-height: 1.2;
}

.section-inner p {
  font-size: 20px;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-inner h2,
  .section-inner > div > h2 {
    font-size: 36px;
    letter-spacing: -0.5px;
  }
  .section-inner p {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .section-inner h2,
  .section-inner > div > h2 {
    font-size: 32px;
    letter-spacing: -0.5px;
  }
  .section-inner p {
    font-size: 17px;
  }
  .quote-form {
    padding: 24px 16px;
  }
}

/* Process / benefit cards */
.full-bleed-wrapper .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .full-bleed-wrapper .cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.full-bleed-wrapper .card {
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: white;
}

@media (max-width: 480px) {
  .full-bleed-wrapper .card {
    padding: 32px 24px;
    min-height: 160px;
    border-radius: 20px;
  }
}

.full-bleed-wrapper .card h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

@media (max-width: 480px) {
  .full-bleed-wrapper .card h3 {
    font-size: 22px;
  }
}

.full-bleed-wrapper .card p {
  font-size: 16px;
  margin-top: 12px;
  line-height: 1.6;
  color: inherit;
}

@media (max-width: 480px) {
  .full-bleed-wrapper .card p {
    font-size: 15px;
  }
}

.full-bleed-wrapper .card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}

@media (max-width: 768px) {
  .full-bleed-wrapper .card:hover {
    transform: translateY(-4px);
  }
}

/* FAQ Styling */
.faq-item {
  margin-bottom: 16px;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #e0e0e0;
}

@media (max-width: 480px) {
  .faq-item {
    margin-bottom: 12px;
    border-radius: 10px;
  }
}

.faq-question {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  padding: 20px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f8f8f8;
}

@media (max-width: 480px) {
  .faq-question {
    font-size: 18px;
    padding: 16px 20px;
  }
}

.faq-icon {
  font-size: 24px;
  color: #4CAF50;
  font-weight: 300;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 12px;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  padding: 0 24px 20px 24px;
}

@media (max-width: 480px) {
  .faq-answer p {
    font-size: 15px;
    padding: 0 20px 16px 20px;
  }
}

/* Trust section styling */
.trust-section-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;
}

@media (max-width: 768px) {
  .trust-section-content {
    gap: 40px;
  }
}

.trust-section-left {
  flex: 1;
  min-width: 300px;
}

@media (max-width: 768px) {
  .trust-section-left {
    min-width: 100%;
  }
}

.trust-section-left h2 {
  font-size: 42px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 20px;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .trust-section-left h2 {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .trust-section-left h2 {
    font-size: 28px;
  }
}

.trust-section-left > p {
  font-size: 18px;
  text-align: left;
  margin-bottom: 30px;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .trust-section-left > p {
    font-size: 16px;
    margin-bottom: 24px;
  }
}

/* Trust list styling */
.trust-list {
  list-style: none;
  padding-left: 0;
  font-size: 18px;
  line-height: 1.8;
  color: #00796b;
}

@media (max-width: 480px) {
  .trust-list {
    font-size: 16px;
    line-height: 1.7;
  }
}

.trust-list li {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

@media (max-width: 480px) {
  .trust-list li {
    margin-bottom: 14px;
    gap: 10px;
  }
}

.trust-list li::before {
  content: attr(data-icon);
  font-size: 24px;
  flex-shrink: 0;
  line-height: 1.3;
}

@media (max-width: 480px) {
  .trust-list li::before {
    font-size: 20px;
  }
}

.trust-section-right {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

@media (max-width: 768px) {
  .trust-section-right {
    min-width: 100%;
  }
}

.trust-section-right img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

@media (max-width: 480px) {
  .trust-section-right img {
    border-radius: 16px;
  }
}

/* --- Modal Styles --- */
.quote-form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: none;
  z-index: 9999;
  overflow: hidden;
}

.modal-content {
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  margin: 5% auto;
  max-width: 600px;
  width: 90%;
  box-sizing: border-box;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

#close-form {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  background: #f5f5f5;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #333;
  font-weight: 300;
  line-height: 1;
  z-index: 10;
}

#close-form:hover {
  background: #e0e0e0;
  transform: rotate(90deg);
}

/* Mobile Adjustments - Full Screen with Top Space */
@media (max-width: 600px) {
  .quote-form-modal {
    overflow: hidden;
    position: fixed;
    touch-action: none;
    height: 100vh;
    height: 100dvh;
  }
  
  .modal-content {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    height: calc(100vh - 40px);
    height: calc(100dvh - 40px);
    max-height: calc(100vh - 40px);
    max-height: calc(100dvh - 40px);
    border-radius: 20px 20px 0 0;
    padding: 20px;
    padding-top: 70px;
    padding-bottom: 40px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    box-sizing: border-box;
  }
  
  .quote-form-modal #close-form {
    position: fixed;
    top: 50px;
    right: 20px;
    font-size: 32px;
    z-index: 10;
    background: white;
    width: 44px;
    height: 44px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .quote-form-modal .quote-form {
    padding: 16px;
    padding-bottom: 20px;
  }
}

/* Additional mobile-specific improvements */
@media (max-width: 480px) {
  .form-row {
    gap: 16px;
    margin-bottom: 16px;
  }
  
  .quote-form input,
  .quote-form select,
  .quote-form textarea {
    font-size: 16px;
    padding: 12px 14px;
  }
  
  .cta-button {
    padding: 16px 28px;
    font-size: 17px;
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
        <div style="font-size:48px;margin-bottom:16px;">📝</div>
        <h3>1. Request My Quote</h3>
      </div>
      <div class="card" style="background:#4CAF50;color:#fff;">
        <div style="font-size:48px;margin-bottom:16px;">📅</div>
        <h3>2. We Handle Scheduling</h3>
      </div>
      <div class="card" style="background:#4CAF50;color:#fff;">
        <div style="font-size:48px;margin-bottom:16px;">✨</div>
        <h3>3. No More Poop!</h3>
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
        <p>Healthy, vibrant lawn that's safe for your family and pets.</p>
      </div>
    </div>
  </div>
</div>


<!-- --- Section 2: Trust / Proof-Focused (with image) --- -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <div class="trust-section-content">
      
      <!-- Left: Bullet Points -->
      <div class="trust-section-left">
        <h2>Our Commitment to Your Yard</h2>
        <p>We keep your yard clean and safe so you can relax knowing the job is done right.</p>
        <ul class="trust-list">
          <li data-icon="🚛">We haul away all pet waste for a clean yard</li>
          <li data-icon="🛡️">Enjoy a clean, safe yard every day</li>
          <li data-icon="📸">Get a photo of your secured gate after every visit</li>
          <li data-icon="📱">We send a text when we're on our way</li>
          <li data-icon="🐶">Trained, dog-loving team you can trust</li>
          <li data-icon="🔄">No contracts, fully flexible service</li>
          <li data-icon="🚗">Spot our branded vehicle magnet on arrival</li>
          <li data-icon="⭐">"They did amazing! Highly recommend to anyone who wants to take one thing off their plate." – Wyatt D.</li>
        </ul>
      </div>
      
      <!-- Right: Image -->
      <div class="trust-section-right">
        <img src="/assets/img/yard-guards-pdx-trust-photo.webp" alt="Clean Yard" loading="lazy">
      </div>

    </div>
  </div>
</div>

<!-- Clean Yard, Happy Pets, Happy Home Section -->
<div class="full-bleed-wrapper" style="background:#fff;">
  <div class="section-inner" style="text-align:center; padding:60px 40px;">
    <h2 style="font-size:48px; font-weight:800; color:#1a1a1a;">Clean Yard, Happy Pets, Happy Home</h2>
  </div>
</div>

<!-- Frequently Asked Questions (FAQs) -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <h2 style="text-align:center; margin-bottom:60px;">Frequently Asked Questions</h2>

    <div style="max-width: 900px; margin: 0 auto;">
      <div class="faq-item">
        <div class="faq-question">
          <span>Can you clean with my dog in the yard?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Yes, we love cleaning with dogs! However, if your dog has shown signs of aggression, we ask that you keep them inside for the safety of our team. If your dog becomes aggressive, we will kindly ask you to secure them indoors for the duration of the service.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>Do I need to be home during the service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>No, you don't need to be home! As long as we have access to your yard, we'll take care of the rest. We'll send you a text notification when we're on our way, so you'll always know when to expect us.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>What areas do you serve?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We proudly serve all of East Portland, including areas beyond the Willamette River, extending east to the end of Portland. We plan to expand our service areas soon!</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How often can I schedule dog waste removal services?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We offer weekly and bi-weekly services to keep your yard clean, safe, and odor-free. You can choose the frequency that fits your needs.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How do you ensure the safety of my pets?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Pet safety is a top priority. We sanitize our tools and boots between yards, and we ensure all gates are securely closed after service. If we notice any abnormalities in pet waste that could indicate health issues, we'll alert you right away.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>Do you offer dog waste removal for commercial properties?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Yes, we provide professional dog waste removal services for commercial properties. Whether it's a dog park or a pet-friendly business, we've got you covered!</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How do you handle bad weather?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We always put safety first. If bad weather such as heavy rain or snow makes it unsafe to work, we'll reschedule your service to the next available day.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How does billing work for recurring services?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We charge your card on file after each service. This ensures that you only pay for the services completed. If a service is skipped, you won't be charged.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>Are you insured?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We are not currently insured, but we take every precaution to ensure your property and pets are safe while we work.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>What if I need to skip a service day?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Life happens! If you need to skip a service, simply let us know, and we'll reschedule for a more convenient day.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>What happens if there's an issue with the service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We strive to provide excellent service every time. If any issues arise, please contact us right away, and we'll address the situation promptly.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- --- Final CTA Section: "Ready for a Clean, Stress-Free Yard?" --- -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner" style="text-align:center;">
    <h2>Ready for a Clean, Stress-Free Yard?</h2>
    <button id="open-form" class="cta-button" style="max-width:300px; margin: 20px auto;">Get My Instant Quote</button>
  </div>
</div>

<!-- --- Hidden Form Modal --- -->
<div id="quote-form-modal" class="quote-form-modal">
  <div class="modal-content">
    <span id="close-form" style="position: absolute; top: 10px; right: 15px; font-size: 20px; cursor: pointer;">&times;</span>
    
    <form class="quote-form" novalidate>
      <div class="form-error-banner">Submission failed. Please try again.</div>
      <fieldset>
        <div class="form-row">
          <div class="form-group">
            <label for="full_name_modal">Full Name *</label>
            <input type="text" id="full_name_modal" name="fullName" placeholder="John Doe" required spellcheck="false">
            <small class="error-message"></small>
          </div>
          <div class="form-group">
            <label for="phone_modal">Phone Number *</label>
            <input type="tel" id="phone_modal" name="phoneNumber" placeholder="(503) 123-4567" maxlength="14" required spellcheck="false">
            <small class="error-message"></small>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="email_modal">Email *</label>
            <input type="email" id="email_modal" name="email" placeholder="john@email.com" required spellcheck="false">
            <small class="error-message"></small>
          </div>
          <div class="form-group">
            <label for="zip_modal">Zip Code *</label>
            <input type="text" id="zip_modal" name="zipCode" placeholder="97202" maxlength="5" required spellcheck="false">
            <small class="error-message"></small>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="dogs_modal">How many dogs do you have? *</label>
            <select id="dogs_modal" name="howMany" required>
              <option value="" disabled selected>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <small class="error-message"></small>
          </div>
          <div class="form-group">
            <label for="frequency_modal">Service Frequency *</label>
            <select id="frequency_modal" name="serviceFrequency" required>
              <option value="" disabled selected>Select</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
            </select>
            <small class="error-message"></small>
          </div>
        </div>

        <div class="form-group">
          <label for="questions_modal">Any questions or concerns?</label>
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

openFormButton.addEventListener("click", () => {
  quoteFormModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeFormButton.addEventListener("click", () => {
  quoteFormModal.style.display = "none";
  document.body.style.overflow = "";
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other open items (optional - remove if you want multiple open at once)
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
});
</script>

<script defer>
document.addEventListener('DOMContentLoaded',()=>{

    function setupFormValidation(formElement, fieldIds) {
        const fullName = document.getElementById(fieldIds.fullName);
        const phone = document.getElementById(fieldIds.phone);
        const zip = document.getElementById(fieldIds.zip);
        const email = document.getElementById(fieldIds.email);
        const dogs = document.getElementById(fieldIds.dogs);
        const freq = document.getElementById(fieldIds.frequency);
        const questions = document.getElementById(fieldIds.questions);
        const formError = formElement.querySelector('.form-error-banner');

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

        formElement.addEventListener('submit', async function(e){
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
    }

    // Setup validation for top form
    const topForm = document.querySelector('.quote-form:not(#quote-form-modal .quote-form)');
    setupFormValidation(topForm, {
        fullName: 'full_name',
        phone: 'phone',
        zip: 'zip',
        email: 'email',
        dogs: 'dogs',
        frequency: 'frequency',
        questions: 'questions'
    });

    // Setup validation for modal form
    const modalForm = document.querySelector('#quote-form-modal .quote-form');
    setupFormValidation(modalForm, {
        fullName: 'full_name_modal',
        phone: 'phone_modal',
        zip: 'zip_modal',
        email: 'email_modal',
        dogs: 'dogs_modal',
        frequency: 'frequency_modal',
        questions: 'questions_modal'
    });
});
</script>