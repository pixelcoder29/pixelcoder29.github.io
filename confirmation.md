---
layout: page
title: Confirmation
permalink: /confirmation/
---

<div class="confirmation-container">
  <div class="success-icon">✅</div>
  <h1>Thank You!</h1>
  <p>Your details have been received successfully.</p>

  <div class="next-steps">
    <h2>What Happens Next?</h2>
    <p>We'll review your information and contact you within 24 hours to schedule your first service. You'll receive a confirmation email with your service details.</p>
    <p>In the meantime, feel free to explore our services or contact us if you have any questions.</p>
  </div>

  <div class="actions">
    <a href="/" class="btn-primary">Return to Home</a>
    <a href="/services" class="btn-secondary">View Our Services</a>
  </div>

  <div class="contact">
    <p>Questions? <a href="mailto:service@yardguardspdx.com">Contact us</a></p>
  </div>
</div>

<style>
.confirmation-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 1.25rem;
}

.confirmation-container h1 {
  color: var(--text-primary);
  font-size: 2.2rem;
  margin-bottom: 0.625rem;
  font-weight: 600;
}

.confirmation-container > p {
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
  margin-bottom: 0.9375rem;
  line-height: 1.65;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
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

@media (max-width: 37.5rem) {
  .confirmation-container {
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .confirmation-container h1 {
    font-size: 1.8rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>
