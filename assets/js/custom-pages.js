// === FORM MODAL FUNCTIONALITY ===
function initializeFormModal(){const e=document.querySelectorAll(".open-form-btn, #open-form"),t=document.getElementById("quote-form-modal"),n=document.getElementById("close-form");if(t&&n){const o=()=>{t.style.display="block",document.body.style.overflow="hidden"},c=e=>{e.preventDefault(),e.stopPropagation(),t.style.display="none",document.body.style.overflow="",!1};e.forEach(e=>e.addEventListener("click",o)),n.addEventListener("click",c)}}

// === FAQ ACCORDION FUNCTIONALITY ===
function initializeFAQ(){document.querySelectorAll('.faq-item').forEach(e=>{const t=e.querySelector('.faq-question');t&&t.addEventListener('click',()=>{document.querySelectorAll('.faq-item').forEach(n=>{n!==e&&n.classList.contains('active')&&n.classList.remove('active')}),e.classList.toggle('active')})})}

// === FORM VALIDATION FUNCTIONALITY ===
function setupFormValidation(formElement, fieldIds) {
  const fullName = document.getElementById(fieldIds.fullName);
  const phone = document.getElementById(fieldIds.phone);
  const zip = document.getElementById(fieldIds.zip);
  const email = document.getElementById(fieldIds.email);
  const dogs = document.getElementById(fieldIds.dogs);
  const freq = document.getElementById(fieldIds.frequency);
  const questions = document.getElementById(fieldIds.questions);
  const privacyAgree = document.getElementById(fieldIds.privacyAgree);
  const formError = formElement.querySelector('.form-error-banner');

  function showError(el, msg){
    let error;
    if (el.id.includes('privacy_agree')) {
      // For privacy checkbox, error is at the privacy-group level
      error = el.closest('.privacy-group').querySelector('.error-message');
    } else {
      // For other fields, error is in the parent element
      error = el.parentElement.querySelector('.error-message');
    }
    if (error) {
      error.textContent = msg;
      error.style.display = 'block';
    }
  }
  function clearError(el){
    let error;
    if (el.id.includes('privacy_agree')) {
      // For privacy checkbox, error is at the privacy-group level
      error = el.closest('.privacy-group').querySelector('.error-message');
    } else {
      // For other fields, error is in the parent element
      error = el.parentElement.querySelector('.error-message');
    }
    if (error) {
      error.style.display = 'none';
    }
  }

  if (fullName) {
    fullName.addEventListener("blur",()=>{ fullName.value.trim()?clearError(fullName):showError(fullName,"Full Name is required.") });
  }

  if (phone) {
    phone.addEventListener("input", t=>{
      let a=t.target.value.replace(/\D/g,"").substring(0,10), r="";
      a.length>6?r=`(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6)}`:
      a.length>3?r=`(${a.slice(0,3)}) ${a.slice(3)}`:
      a.length>0&&(r=`(${a}`);
      t.target.value=r;
    });
    phone.addEventListener("blur",()=>{ phone.value.replace(/\D/g,"").length!==10?showError(phone,"Please enter a valid 10-digit phone number."):clearError(phone) });
  }

  if (zip) {
    zip.addEventListener("input",()=>{ zip.value=zip.value.replace(/\D/g,"").substring(0,5) });
    zip.addEventListener("blur",()=>{ zip.value.length!==5?showError(zip,"ZIP code must be 5 digits."):clearError(zip) });
  }

  if (email) {
    email.addEventListener("blur",()=>{ email.checkValidity()?clearError(email):showError(email,"Please enter a valid email address.") });
  }

  if (dogs) {
    dogs.addEventListener("change",()=>{ dogs.value?clearError(dogs):showError(dogs,"Please select how many dogs you have.") });
  }

  if (freq) {
    freq.addEventListener("change",()=>{ freq.value?clearError(freq):showError(freq,"Please select a service frequency.") });
  }

  formElement.addEventListener('submit', async function(e){
    e.preventDefault();
    if (formError) formError.style.display = 'none';
    let valid = true;

    if (fullName && !fullName.value.trim()){ showError(fullName,"Full Name is required."); valid=false; }
    if (phone && phone.value.replace(/\D/g,"").length!==10){ showError(phone,"Please enter a valid 10-digit phone number."); valid=false; }
    if (email && !email.checkValidity()){ showError(email,"Please enter a valid email address."); valid=false; }
    if (zip && zip.value.length!==5){ showError(zip,"ZIP code must be 5 digits."); valid=false; }
    if (dogs && !dogs.value){ showError(dogs,"Please select how many dogs you have."); valid=false; }
    if (freq && !freq.value){ showError(freq,"Please select a service frequency."); valid=false; }
    if (privacyAgree && !privacyAgree.checked){ showError(privacyAgree,"You must agree to the Privacy Policy to continue."); valid=false; }

    if(!valid) return;

    const freqMap = { "weekly": "Weekly", "bi-weekly": "Bi-Weekly" };
    const freqValue = freqMap[freq.value] || freq.value;

    const data = new URLSearchParams();
    if (fullName) data.append("fullName", fullName.value.trim());
    if (phone) data.append("phoneNumber", phone.value.trim());
    if (email) data.append("email", email.value.trim());
    if (zip) data.append("zipCode", zip.value.trim());
    if (dogs) data.append("howMany", dogs.value);
    if (freq) data.append("serviceFrequency", freqValue);
    if (questions) data.append("anyQuestions", questions.value.trim());

    // Add consent tracking for legal compliance
    if (privacyAgree) {
      data.append("privacyPolicyAgreed", privacyAgree.checked ? "true" : "false");
      data.append("consentTimestamp", new Date().toISOString());
    }

    // Generate unique event ID for pixel/CAPI matching
    const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    data.append("eventId", eventId);
    data.append("sourceUrl", window.location.href);

    // Capture Facebook click ID and browser ID for CAPI
    function getFbc() {
      const urlParams = new URLSearchParams(window.location.search);
      const fbclid = urlParams.get('fbclid');
      if (fbclid) {
        // Construct fbc from fbclid: fb.1.{timestamp}.{fbclid}
        const timestamp = Date.now();
        return `fb.1.${timestamp}.${fbclid}`;
      }
      // Fallback to cookie
      const value = `; ${document.cookie}`;
      const parts = value.split('; _fbc=');
      if (parts.length === 2) return parts.pop().split(';').shift();
      return '';
    }
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return '';
    }
    data.append("fbc", getFbc());
    data.append("fbp", getCookie('_fbp'));

    try {
      const response = await fetch('https://hook.us2.make.com/6ign8tg00oc6upzncx43ufqo4qdw4g7c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });

      if(response.ok){
        // Calculate amount and store in localStorage
        const weeklyPrices = [0, 23, 25, 27, 29, 32, 34];
        const biweeklyPrices = [0, 32, 36, 39, 42, 46, 49];
        const dogsCount = parseInt(dogs.value);
        let amount = 0;
        if (freq.value === "weekly") {
          amount = weeklyPrices[dogsCount] || 0;
        } else if (freq.value === "bi-weekly") {
          amount = biweeklyPrices[dogsCount] || 0;
        }
        localStorage.setItem('quoteAmount', amount);

        // Track Lead event with event_id for CAPI matching
        console.log('fbq defined:', typeof fbq);
        console.log('About to fire Lead event with ID:', eventId);
        if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead', {}, {eventID: eventId});
          console.log('Lead event fired successfully');
        } else {
          console.error('fbq not defined - Facebook pixel not loaded');
        }

        window.location.href = '/confirmation/';
      } else {
        if (formError) formError.style.display = 'block';
      }
    } catch(err){
      console.error(err);
      if (formError) formError.style.display = 'block';
    }
  });
}

// === EXIT-INTENT FUNCTIONALITY (DESKTOP ONLY) ===
function initializeExitIntent(){if(window.innerWidth<=768||window.location.pathname.includes("/quote/")||window.location.pathname.includes("/privacy-policy/")||window.location.pathname.includes("/terms/"))return;let e=!1,t=document.getElementById("quote-form-modal"),n=()=>{e||t&&(e=!0,t.style.display="block",document.body.style.overflow="hidden",window.gtag&&gtag("event","exit_intent_shown",{event_category:"engagement",event_label:"site_wide"}))};document.addEventListener("mouseleave",e=>{0>=e.clientY&&null===e.relatedTarget&&n()});let o=0;document.addEventListener("mousemove",e=>{5>=e.clientY&&50<o&&n(),o=e.clientY})}

// === INITIALIZE EVERYTHING WHEN DOM IS READY ===
document.addEventListener('DOMContentLoaded', function(){
  // Initialize modal functionality
  initializeFormModal();

  // Initialize exit-intent functionality
  initializeExitIntent();

  // Initialize FAQ accordions
  initializeFAQ();

  // Setup validation for top form (if exists)
  const topForm = document.querySelector('.quote-form:not(#quote-form-modal .quote-form)');
  if (topForm) {
    setupFormValidation(topForm, {
      fullName: 'full_name',
      phone: 'phone',
      zip: 'zip',
      email: 'email',
      dogs: 'dogs',
      frequency: 'frequency',
      questions: 'questions',
      privacyAgree: 'privacy_agree'
    });
  }

  // Setup validation for modal form (if exists)
  const modalForm = document.querySelector('#quote-form-modal .quote-form');
  if (modalForm) {
    setupFormValidation(modalForm, {
      fullName: 'full_name_modal',
      phone: 'phone_modal',
      zip: 'zip_modal',
      email: 'email_modal',
      dogs: 'dogs_modal',
      frequency: 'frequency_modal',
      questions: 'questions_modal',
      privacyAgree: 'privacy_agree_modal'
    });
  }
});
