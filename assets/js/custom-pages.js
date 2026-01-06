// === FORM MODAL FUNCTIONALITY ===
function initializeFormModal() {
  const buttons = document.querySelectorAll(".open-form-btn, #open-form");
  const modal = document.getElementById("quote-form-modal");
  const closeBtn = document.getElementById("close-form");

  if (modal && closeBtn) {
    const openModal = () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    };

    const closeModal = (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.style.display = "none";
      document.body.style.overflow = "";
      return false;
    };

    buttons.forEach(btn => btn.addEventListener("click", openModal));
    closeBtn.addEventListener("click", closeModal);
  }
}

// === FAQ ACCORDION FUNCTIONALITY ===
function initializeFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        item.classList.toggle('active');
      });
    }
  });
}

// === FORM VALIDATION FUNCTIONALITY ===
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

    try {
      const response = await fetch('https://hook.us2.make.com/6ign8tg00oc6upzncx43ufqo4qdw4g7c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });

      if(response.ok){
        window.location.href = '/thank-you/';
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
function initializeExitIntent() {
  if (window.innerWidth <= 768) return;

  let shown = false;
  const modal = document.getElementById("quote-form-modal");

  const showModal = () => {
    if (!shown && modal) {
      shown = true;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      if (window.gtag) {
        gtag("event", "exit_intent_shown", {
          event_category: "engagement",
          event_label: "site_wide"
        });
      }
    }
  };

  document.addEventListener("mouseleave", e => {
    if (e.clientY <= 0 && e.relatedTarget === null) {
      showModal();
    }
  });

  let prevY = 0;
  document.addEventListener("mousemove", e => {
    if (e.clientY <= 5 && prevY > 50) {
      showModal();
    }
    prevY = e.clientY;
  });
}

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
      questions: 'questions'
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
      questions: 'questions_modal'
    });
  }
});
