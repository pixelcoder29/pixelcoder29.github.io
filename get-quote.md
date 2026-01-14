---
layout: page
title: Get Quote
permalink: /get-quote/
---

<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="stackpath.bootstrapcdn.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="stylesheet" href="/assets/css/custom-pages.css">
<script src="/assets/js/custom-pages.js" defer></script>

<!-- FAQ Schema for Get Quote Page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will my pets be safe during service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your pets' safety is our top priority. We sanitize our tools and boots between properties, secure all gates, and handle every yard with care."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure your tools and equipment are properly sanitized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use kennel-grade disinfectant/sanitizer that's safe for pets to thoroughly disinfect all our tools and boots between properties. This prevents the transmission of diseases like parvo and other dog-related illnesses, keeping all pets in our service area safe."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean if my dog is in the yard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we love pets! For safety, dogs that are uncomfortable with strangers should be kept inside during service. Otherwise, our team is happy to work around your furry friends."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don't have to be home. We just need access to your yard. You'll receive a text when we're on our way so you always know when to expect us."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need to skip a scheduled service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Life happens! Just notify us in advance and we'll take care of the reschedule. No service, no charge."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work in bad weather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service rain or shine, except when driving conditions are unsafe (icy roads or extreme weather). Safety for both you and our team is always our top concern."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hidden fees or extra charges for the initial cleanup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, our quoted price includes the initial cleanup and all ongoing services. There are no hidden fees or additional charges."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to handle the pet waste myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never! We haul away and properly dispose of all pet waste at no extra cost, leaving your yard clean, hassle-free, and ready for your pets to enjoy."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We charge your card on file the day before each scheduled service, and you only pay for services that are completed."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I schedule service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer weekly or bi-weekly service plans to keep your yard clean, safe, and odor-free. Choose the frequency that fits your needs."
      }
    },
    {
      "@type": "Question",
      "name": "Where do you provide service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve Portland Oregon, with comprehensive coverage throughout East Portland from the Willamette River to the eastern city limits."
      }
    },
    {
      "@type": "Question",
      "name": "What if I'm not satisfied or there's an issue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your satisfaction is guaranteed. If anything isn't right, contact us immediately, and we'll resolve it promptly."
      }
    }
  ]
}
</script>

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

    <div class="form-row">
      <div class="form-group">
        <label for="questions">Any questions or concerns?</label>
        <textarea id="questions" name="anyQuestions" rows="3"></textarea>
      </div>
    </div>

    <p class="privacy-text" style="font-size: 12px; margin-top: 10px;">By providing my phone number and email, I agree to receive texts and emails from Yard Guards PDX, including marketing messages. Messaging frequency varies; message and data rates may apply. Reply STOP to opt out of texts, or click the unsubscribe link in any email for email opt-out. Reply HELP for more information.</p>
    <div class="form-group privacy-group">
      <div>
        <input type="checkbox" id="privacy_agree" name="privacyAgree" required>
        <label for="privacy_agree">By checking this box I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> *</label>
      </div>
      <small class="error-message" id="privacy-error"></small>
    </div>
    <button type="submit" class="cta-button">Request My Quote</button>
  </fieldset>
</form>

<div style="height: 60px;"></div>

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
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <div style="text-align:center;margin-bottom:50px;">
      <h2>Why Choose Yard Guards PDX?</h2>
      <p style="font-size: 20px">Effortless yard cleanup. More free time. Peace of mind.</p>
    </div>

    <div class="cards">
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>🕒 Save Time</h3>
        <p style="font-size: 20px">We handle the pet waste so you can focus on what matters most.</p>
      </div>
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>✅ Zero Hassle</h3>
        <p style="font-size: 20px">Reliable cleanups, scheduled and managed entirely by our team.</p>
      </div>
      <div class="card" style="background:#e0f7fa;color:#00796b;">
        <h3>🌿 Enjoy Your Yard</h3>
        <p style="font-size: 20px">Healthy, vibrant lawn that's safe for your family and pets.</p>
      </div>
    </div>
  </div>
</div>


<!-- --- Section 2: Trust / Proof-Focused (with image) --- -->
<div class="full-bleed-wrapper" style="background:#f8f8f8;">
  <div class="section-inner">
    <div class="trust-section-content">

      <!-- Left: Bullet Points -->
      <div class="trust-section-left" style="flex:1; min-width:300px;">
        <h2>Our Commitment to Your Yard</h2>
       <br>
        <ul class="trust-list" style="list-style:none; padding:0; margin:0;">
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">🚛</span>
            <span>All Waste is hauled away</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">🛡️</span>
            <span>Enjoy a clean, safe yard every day</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">📸</span>
            <span>Photo of secured gate after every visit</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">📱</span>
            <span>Get a text when we're on our way</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">🐶</span>
            <span>Trained, dog-loving team you can trust</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">🔄</span>
            <span>No contracts, fully flexible service</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">🚗</span>
            <span>Branded vehicle magnet on arrival</span>
          </li>
          <li style="display:flex; align-items:flex-start; margin-bottom:12px;">
            <span style="font-size:24px; width:36px; text-align:center; margin-right:12px;">⭐</span>
            <span>"They did amazing! Highly recommend to anyone who wants to take one thing off their plate." – Wyatt D.</span>
          </li>
        </ul>
      </div>

      <!-- Right: Image -->
      <div class="trust-section-right" style="flex:1; min-width:300px;">
        <img src="/assets/img/yard-guards-pdx-trust-photo.webp" alt="Clean Yard" style="width:100%; height:auto; border-radius:8px;" loading="lazy">
      </div>
 <p style="text-align: center; width: 100%; padding-top: 10px; font-size: 21px">We keep your yard clean and safe so you can relax knowing the job is done right.</p>
    </div>
    
  </div>
</div>

<!-- Clean Yard, Happy Pets, Happy Home Section -->
<div class="full-bleed-wrapper" style="background:#fff;">
  <div class="section-inner" style="text-align:center; padding:60px 40px;">
    <h2 style="font-size:48px; font-weight:800; color:#1a1a1a;">Clean Yard, Happy Pets, Happy Home</h2>
  </div>
</div>

<!-- Frequently Asked Questions (Professional + High-Converting) -->
<div class="full-bleed-wrapper" style="background:#ffffff;">
  <div class="section-inner">
    <h2 style="text-align:center; margin-bottom:60px;">Frequently Asked Questions</h2>

    <div style="max-width: 900px; margin: 0 auto;">

      <!-- 1. Safety & Pet Concerns (Most Important) -->
      <div class="faq-item">
        <div class="faq-question">
          <span>Will my pets be safe during service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Your pets' safety is our top priority. We sanitize our tools and boots between properties, secure all gates, and handle every yard with care.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How do you ensure your tools and equipment are properly sanitized?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We use kennel-grade disinfectant/sanitizer that's safe for pets to thoroughly disinfect all our tools and boots between properties. This prevents the transmission of diseases like parvo and other dog-related illnesses, keeping all pets in our service area safe.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>Can you clean if my dog is in the yard?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
         <p>Yes, we love pets! For safety, dogs that are uncomfortable with strangers should be kept inside during service. Otherwise, our team is happy to work around your furry friends.</p>
        </div>
      </div>

      <!-- 2. Convenience & Access -->
      <div class="faq-item">
        <div class="faq-question">
          <span>Do I need to be home?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>No, you don't have to be home. We just need access to your yard. You'll receive a text when we're on our way so you always know when to expect us.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>What if I need to skip a scheduled service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
<p>Life happens! Just notify us in advance and we'll take care of the reschedule. No service, no charge.</p>
        </div>
      </div>

      <!-- 3. Reliability & Weather -->
      <div class="faq-item">
        <div class="faq-question">
          <span>Do you work in bad weather?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We service rain or shine, except when driving conditions are unsafe (icy roads or extreme weather). Safety for both you and our team is always our top concern.</p>
        </div>
      </div>

      <!-- 4. Payment & Billing -->
      <div class="faq-item">
        <div class="faq-question">
          <span>Are there any hidden fees or extra charges for the initial cleanup?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
<p>No, our quoted price includes the initial cleanup and all ongoing services. There are no hidden fees or additional charges.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>Do I have to handle the pet waste myself?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
<p>Never! We haul away and properly dispose of all pet waste at no extra cost, leaving your yard clean, hassle-free, and ready for your pets to enjoy.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <span>How do you handle payment?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
<p>We charge your card on file the day before each scheduled service, and you only pay for services that are completed.</p>
        </div>
      </div>

      <!-- 5. Scheduling & Frequency -->
      <div class="faq-item">
        <div class="faq-question">
          <span>How often should I schedule service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>We offer weekly or bi-weekly service plans to keep your yard clean, safe, and odor-free. Choose the frequency that fits your needs.</p>
        </div>
      </div>

      <!-- 6. Service Area -->
      <div class="faq-item">
        <div class="faq-question">
          <span>Where do you provide service?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
<p>We proudly serve Portland Oregon, with comprehensive coverage throughout East Portland from the Willamette River to the eastern city limits.</p>
        </div>
      </div>

      <!-- 7. Service Quality & Issues -->
      <div class="faq-item">
        <div class="faq-question">
          <span>What if I'm not satisfied or there's an issue?</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>Your satisfaction is guaranteed. If anything isn't right, contact us immediately, and we'll resolve it promptly.</p>
        </div>
      </div>

    </div>
  </div>
</div>


<!-- --- Final CTA Section: "Ready for a Clean, Stress-Free Yard?" --- -->
<div class="full-bleed-wrapper" style="background:#ffffff">
  <div class="section-inner" style="text-align:center; margin-bottom: 20px">
    <h2 style="margin-bottom:40px; margin-top: 0px">Ready for a Clean, Stress-Free Yard?</h2>
    
    <button id="open-form" class="cta-button" style="max-width:300px; margin: 0 auto;">Get My Instant Quote</button>
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

        <div class="form-row">
          <div class="form-group">
            <label for="questions_modal">Any questions or concerns?</label>
            <textarea id="questions_modal" name="anyQuestions" rows="3"></textarea>
          </div>
        </div>

        <p class="privacy-text" style="font-size: 12px; margin-top: 10px;">By providing my phone number and email, I agree to receive texts and emails from Yard Guards PDX, including marketing messages. Messaging frequency varies; message and data rates may apply. Reply STOP to opt out of texts, or click the unsubscribe link in any email for email opt-out. Reply HELP for more information.</p>
        <div class="form-group privacy-group">
          <div>
            <input type="checkbox" id="privacy_agree_modal" name="privacyAgree" required>
            <label for="privacy_agree_modal">By checking this box I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> *</label>
          </div>
          <small class="error-message" id="privacy-modal-error"></small>
        </div>
        <button type="submit" class="cta-button">Request My Quote</button>
      </fieldset>
    </form>
  </div>
</div>
