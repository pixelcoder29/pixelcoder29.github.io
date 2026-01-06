---
layout: page
title: Your Personalized Quote
permalink: /quote/
---

<!-- Updated for setup mode -->
# updated
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/assets/css/custom-pages.css">
<script src="https://js.stripe.com/v3/"></script>
<script src="/assets/js/custom-pages.js" defer></script>

<div class="quote-container">
  <div id="loading" class="loading">
    <p>Loading your personalized quote...</p>
  </div>
  <div id="quote-content" style="display: none;">
    <div class="quote-header">
      <h1>Your Personalized Quote</h1>
      <p>Here's your customized dog waste removal service quote. Review the details below and start your subscription today.</p>
    </div>

  <div class="quote-details">
    <div class="detail-section">
      <h2>Customer Information</h2>
      <div class="info-grid">
        <div class="info-item">
          <strong>Name:</strong> <span id="customer-name"></span>
        </div>
        <div class="info-item">
          <strong>Phone:</strong> <span id="customer-phone"></span>
        </div>
        <div class="info-item">
          <strong>Email:</strong> <span id="customer-email"></span>
        </div>
        <div class="info-item">
          <strong>Zip Code:</strong> <span id="customer-zip"></span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Service Details</h2>
      <div class="info-grid">
        <div class="info-item">
          <strong>Number of Dogs:</strong> <span id="service-dogs"></span>
        </div>
        <div class="info-item">
          <strong>Service Frequency:</strong> <span id="service-frequency"></span>
        </div>
        <div class="info-item">
          <strong>Questions/Concerns:</strong> <span id="service-questions"></span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Pricing</h2>
      <div class="pricing-summary">
        <div class="price-breakdown">
          <p><strong>Price per Service:</strong> $<span id="price-per-service"></span></p>
          <p><strong>Frequency:</strong> <span id="frequency-display"></span></p>
          <p><strong>Service Description:</strong> Professional dog waste removal and yard cleanup.</p>
        </div>
        <div class="price-total">
          <p class="total-label">Total per <span id="billing-cycle"></span>:</p>
          <p class="total-amount">$<span id="total-price"></span></p>
        </div>
      </div>
    </div>

    <div class="trust-elements">
      <div class="trust-item">
        <span class="trust-icon">🛡️</span>
        <span>Safe & Secure Payment</span>
      </div>
      <div class="trust-item">
        <span class="trust-icon">🔄</span>
        <span>Flexible, No-Contract Service</span>
      </div>
      <div class="trust-item">
        <span class="trust-icon">⭐</span>
        <span>100% Satisfaction Guarantee</span>
      </div>
    </div>

    <div class="quote-actions">
      <button id="start-subscription" class="cta-button">Save My Card</button>
      <p class="billing-note">Your card will be saved securely and you'll be charged $<span id="total-price-repeat"></span> on your service day.</p>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const quoteId = urlParams.get('id') || '';

  // Pricing data
  const pricing = {
    weekly: {1: 23, 2: 25, 3: 27, 4: 29, 5: 32, 6: 34},
    biweekly: {1: 32, 2: 36, 3: 39, 4: 42, 5: 46, 6: 49}
  };

  // Stripe price IDs
  const priceIds = {
    weekly: {
      1: 'price_1SmXplK2sYympqhEgk0kSOBd',
      2: 'price_1SmY6LK2sYympqhEwgRjMYH2',
      3: 'price_1SmY7NK2sYympqhEAB9EPjgY',
      4: 'price_1SmY7rK2sYympqhE95O7197Y',
      5: 'price_1SmY8KK2sYympqhEJ67GrHrc',
      6: 'price_1SmY8pK2sYympqhELhU29LBS'
    },
    biweekly: {
      1: 'price_1SmYG7K2sYympqhE16E3BrcL',
      2: 'price_1SmYGnK2sYympqhEeUgQqVm5',
      3: 'price_1SmYHFK2sYympqhESi2gi08w',
      4: 'price_1SmYHfK2sYympqhEsY6K02ow',
      5: 'price_1SmYI2K2sYympqhEfs5AN4Pg',
      6: 'price_1SmYIQK2sYympqhE7qu5GEmh'
    }
  };

  let name = '', phone = '', email = '', zip = '', dogs = 1, freq = 'weekly', questions = 'None';

  if (quoteId) {
    try {
      const response = await fetch('https://hook.us2.make.com/lec95c5chc32n1hku7rwjr6q3c0arivq', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: quoteId})
      });
      const data = await response.json();
      name = data.name || '';
      phone = data.phone || '';
      email = data.email || '';
      zip = data.zip || '';
      dogs = parseInt(data.dogs) || 1;
      freq = data.freq || 'weekly';
      questions = data.questions || 'None';
  } catch (e) {
    console.error('Error fetching data', e);
    alert('Unable to load quote data. Please try again later.');
    return;
  }
} else {
  alert('Invalid quote link.');
  return;
}

  // Hide loading and show content
  document.getElementById('loading').style.display = 'none';
  document.getElementById('quote-content').style.display = 'block';

  // Populate fields
  document.getElementById('customer-name').textContent = name;
  document.getElementById('customer-phone').textContent = phone;
  document.getElementById('customer-email').textContent = email;
  document.getElementById('customer-zip').textContent = zip;
  document.getElementById('service-dogs').textContent = dogs;
  document.getElementById('service-frequency').textContent = freq.charAt(0).toUpperCase() + freq.slice(1);
  document.getElementById('service-questions').textContent = questions;

  // Calculate price
  const normalizedFreq = freq.toLowerCase();
  const pricePerService = pricing[normalizedFreq] ? pricing[normalizedFreq][dogs] : 0;
  const billingCycle = normalizedFreq === 'weekly' ? 'week' : '2 weeks';
  const totalPrice = pricePerService;

  document.getElementById('price-per-service').textContent = pricePerService;
  document.getElementById('frequency-display').textContent = freq.charAt(0).toUpperCase() + freq.slice(1);
  document.getElementById('billing-cycle').textContent = billingCycle;
  document.getElementById('total-price').textContent = totalPrice;
  document.getElementById('total-price-repeat').textContent = totalPrice;
  document.getElementById('billing-cycle-repeat').textContent = billingCycle;

  // Quote open tracking can be added later if needed (e.g., via Google Analytics)

  // Stripe integration
  const stripe = Stripe('pk_test_51SaE4lK2sYympqhEaHWlwI3hKxkySU8KWRJwtBcbz7hwGFD2bkN7GUk23vQRAcq75g74B4Qb9G4KZdZqfXRDhadU00hghQcHjL');
  const startButton = document.getElementById('start-subscription');

  startButton.addEventListener('click', async function() {
    const priceId = priceIds[normalizedFreq][dogs];
    try {
      const response = await fetch('https://hook.us2.make.com/uhlb6qvyclumhxhshi19of8vzu4cnxx2', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          priceId: priceId,
          customerEmail: email,
          customerName: name,
          customerPhone: phone,
          metadata: {quoteId: quoteId}
        })
      });

      const session = await response.json();
      console.log('Session:', session);
      const result = await stripe.redirectToCheckout({sessionId: session.id});
      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  });
});
</script>

<style>
.quote-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.quote-header {
  text-align: center;
  margin-bottom: 40px;
}

.detail-section {
  background: #f8f8f8;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.info-item {
  margin-bottom: 10px;
}

.pricing-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.price-breakdown p {
  margin: 5px 0;
}

.price-total {
  text-align: right;
}

.total-amount {
  font-size: 2em;
  font-weight: bold;
  color: #4CAF50;
}

.trust-elements {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  margin: 10px;
}

.trust-icon {
  font-size: 1.5em;
  margin-right: 10px;
}

.quote-actions {
  text-align: center;
  margin-top: 40px;
}

.cta-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #45a049;
}

.billing-note {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
}
</style>
