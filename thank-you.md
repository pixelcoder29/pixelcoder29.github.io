---
layout: page
title: Thank You
permalink: /thank-you/
---

<div class="thank-you-container">
  <div class="success-icon">✅</div>
  <h1>Thank You for Your Trust!</h1>
  <p class="success-message">Your card information has been saved securely. We're excited to help keep your yard clean and your pets happy!</p>
  
  <div class="next-steps">
    <h2>What's Next?</h2>
    <p>To get your service scheduled, we need a few more details from you.</p>
    <div class="cta-button">
      <a href="https://forms.gle/your-form-link" target="_blank" class="btn-primary">Complete Service Details Form</a>
    </div>
    <p class="form-note">This quick form collects your service address, gate codes, and any special instructions. It's required to start your service.</p>
  </div>
  
  <div class="contact-info">
    <p>Have questions? We're here to help!</p>
    <p><strong>Call:</strong> (503) 123-4567<br>
    <strong>Email:</strong> <a href="mailto:service@yardguardspdx.com">service@yardguardspdx.com</a></p>
  </div>
</div>

<style>
.thank-you-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.success-icon {
  font-size: 4em;
  margin-bottom: 20px;
}

.thank-you-container h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: 300;
}

.success-message {
  font-size: 1.2em;
  color: #34495e;
  margin-bottom: 40px;
  line-height: 1.6;
}

.next-steps {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.next-steps h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.next-steps p {
  color: #7f8c8d;
  margin-bottom: 20px;
}

.cta-button {
  margin: 30px 0;
}

.btn-primary {
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.btn-primary:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

.form-note {
  font-size: 0.9em;
  color: #e74c3c;
  font-style: italic;
}

.contact-info {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.contact-info p {
  margin: 10px 0;
  color: #34495e;
}

.contact-info a {
  color: #3498db;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .thank-you-container {
    padding: 40px 15px;
  }
  
  .thank-you-container h1 {
    font-size: 2em;
  }
  
  .next-steps {
    padding: 30px 20px;
  }
  
  .contact-info {
    padding: 20px;
  }
}
</style>
