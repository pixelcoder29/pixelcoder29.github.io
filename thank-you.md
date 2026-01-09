---
layout: page
title: Thank You
permalink: /thank-you/
---

<div class="thank-you-container">
  <h1>Thank You</h1>
  <p>Your payment information has been securely saved.</p>

  <div class="next-steps">
    <h2>Next Steps</h2>
    <p>To schedule your service, please complete the required details form below.</p>
    <a href="https://form.jotform.com/260053619355153" target="_blank" class="cta-button">Complete Service Details Form</a>
    <p class="note">This form collects your service address, yard access details, and cleaning preferences.</p>
  </div>

  <div class="contact">
    <p>For questions, contact us at <a href="mailto:service@yardguardspdx.com">service@yardguardspdx.com</a> or (503) 123-4567.</p>
  </div>
</div>

<!-- Facebook Pixel Purchase Tracking -->
<script>
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  const amount = parseFloat(localStorage.getItem('quoteAmount')) || 0;

  let pixelStatus = 'Did NOT fire';

  if (sessionId &&
      (sessionId.startsWith('cs_test_') || sessionId.startsWith('cs_live_')) &&
      !localStorage.getItem('pixelFired-' + sessionId)) {

      if (amount > 0 && typeof fbq !== 'undefined') {
          fbq('track', 'Purchase', {value: amount, currency: 'USD'});
          pixelStatus = 'Pixel FIRED!';
      } else {
          pixelStatus = 'Did NOT fire (no amount or fbq undefined)';
      }

      localStorage.setItem('pixelFired-' + sessionId, 'true');
      localStorage.removeItem('quoteAmount');
  } else if (sessionId) {
      pixelStatus = 'Did NOT fire (already fired for this session)';
  } else {
      pixelStatus = 'Did NOT fire (no valid session_id)';
  }

  // Debug banner (uncomment for testing)
  // window.addEventListener('DOMContentLoaded', () => {
  //   const debugDiv = document.createElement('div');
  //   debugDiv.id = 'pixel-debug';
  //   debugDiv.style.cssText = 'position:fixed;bottom:0;left:0;background:#fff;color:#000;padding:5px;z-index:9999;font-size:14px;';
  //   debugDiv.innerText = `Session ID: ${sessionId || 'none'} | Amount: $${amount} | ${pixelStatus}`;
  //   document.body.appendChild(debugDiv);
  // });
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=1487573468971173&ev=Purchase&noscript=1"/>
</noscript>

<style>
.thank-you-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

.thank-you-container h1 {
  color: var(--text-primary);
  font-size: 2.2rem;
  margin-bottom: 0.625rem;
  font-weight: 600;
}

.thank-you-container > p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.875rem;
}

.next-steps {
  margin-bottom: 1.875rem;
}

.next-steps h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 0.625rem;
  font-weight: 600;
}

.next-steps p {
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.cta-button {
  display: inline-block;
  background: var(--accent-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 700;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #45a049;
}

.note {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.625rem;
}

.contact {
  border-top: 1px solid var(--border-light);
  padding-top: 1.25rem;
}

.contact p {
  color: var(--text-secondary);
  margin: 0;
}

.contact a {
  color: var(--accent-primary);
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .thank-you-container {
    margin: 20px;
    padding: 20px;
  }

  .thank-you-container h1 {
    font-size: 1.8em;
  }
}
</style>
