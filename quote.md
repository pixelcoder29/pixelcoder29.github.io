---
layout: page
title: Your Personalized Quote
permalink: /quote/
sitemap: false
---

<!-- Rebuild trigger -->

<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/assets/css/custom-pages.css">
<script src="https://js.stripe.com/v3/"></script>
<script src="/assets/js/custom-pages.js" defer></script>

<div class="quote-container">
  <!-- Ad Blocker Warning Banner -->
  <div id="adblocker-warning" class="adblocker-warning" style="display: none;">
    <div class="warning-content">
      <div class="warning-icon">⚠️</div>
      <div class="warning-text">
        <h3>Ad Blocker Detected</h3>
        <p>Please disable your ad blocker (like uBlock Origin) for this site and refresh the page to complete your payment.</p>
        <p><strong>Why?</strong> Ad blockers prevent our secure payment system from loading.</p>
        <button onclick="location.reload()" class="refresh-btn">Refresh Page</button>
      </div>
    </div>
  </div>

  <div id="loading" class="loading">
    <div class="loading-content">
      <div class="loading-logo">
        <img src="/assets/img/yard-guards-pdx-banner-logo.webp" alt="Yard Guards PDX Logo" class="logo-img">
      </div>
      <div class="spinner"></div>
      <p class="loading-text">Preparing your personalized quote...</p>
      <p class="loading-subtext">This will only take a moment</p>
    </div>
  </div>
  <div id="quote-content" style="display: none;">
    <div class="quote-header">
      <h1>Your Personalized Quote</h1>
      <p>Here's your customized pet waste removal service quote. Review the details below and start your subscription today.</p>
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
          <p><strong>Service Description:</strong> Professional pet waste removal.</p>
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
      <p class="billing-note">Your card is saved securely and won’t be charged right now. We'll only charge $<span id="total-price-repeat"></span> the day before each scheduled service. Easy and worry-free!</p>
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
    biweekly: {1: 39, 2: 43, 3: 46, 4: 49, 5: 54, 6: 58}
  };

  // Stripe configuration - switch between 'test' and 'live'
  const STRIPE_MODE = 'live'; // Change to 'test' for testing

  const stripeConfig = {
    test: {
      publishableKey: 'pk_test_51SaE4lK2sYympqhEaHWlwI3hKxkySU8KWRJwtBcbz7hwGFD2bkN7GUk23vQRAcq75g74B4Qb9G4KZdZqfXRDhadU00hghQcHjL',
      priceIds: {
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
      }
    },
    live: {
      publishableKey: 'pk_live_51SaE4lK2sYympqhE7mHFQJZMzEeZfSAdxcQFUIuMEsfecZne5xJsGzR6wdEcPQqHFXNDeB9uzzfxGWkAZ4jwJPzh00VjSbMFge',
      priceIds: {
        weekly: {
          1: 'price_1SpUxbK2sYympqhEQHFfvrw9',
          2: 'price_1SpUxeK2sYympqhEvRMzTqcn',
          3: 'price_1SpUxfK2sYympqhEKfTJ6hDx',
          4: 'price_1SpUxgK2sYympqhEAAs8Cevl',
          5: 'price_1SpUxiK2sYympqhEcRzQhHBc',
          6: 'price_1SpUxjK2sYympqhESZeVmM9R'
        },
        biweekly: {
          1: 'price_1SpUxlK2sYympqhEbbbpy024',
          2: 'price_1SpUxmK2sYympqhE61WNGQzI',
          3: 'price_1SpUxnK2sYympqhEAsDStOm4',
          4: 'price_1SpUxpK2sYympqhE0Az8Xy6Q',
          5: 'price_1SpUxqK2sYympqhEJovH9wEB',
          6: 'price_1SpUxsK2sYympqhE4IVwuuj2'
        }
      }
    }
  };

  // Get current configuration
  const currentConfig = stripeConfig[STRIPE_MODE];
  const priceIds = currentConfig.priceIds;

  let name = '', phone = '', email = '', zip = '', dogs = 1, freq = 'weekly', displayFreq = 'Weekly', questions = 'None';

  if (quoteId) {
    try {
      const response = await fetch('https://hook.us2.make.com/lec95c5chc32n1hku7rwjr6q3c0arivq', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: quoteId})
      });

      if (!response.ok) {
        // Check if this might be ad blocker interference
        if (response.status === 0 || response.type === 'opaque' || response.status === 404) {
          adBlockerDetected = true;
          console.warn('API call blocked - likely ad blocker');
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      name = data.name || '';
      phone = data.phone || '';
      email = data.email || '';
      zip = data.zip || '';
      dogs = parseInt(data.dogs) || 1;
      const originalFreq = data.freq || 'weekly';
      displayFreq = originalFreq.charAt(0).toUpperCase() + originalFreq.slice(1).toLowerCase();
      freq = originalFreq.toLowerCase().replace(/-/g, '');
      questions = data.questions || 'None';
    } catch (e) {
      console.error('Error fetching data', e);

      // Enhanced error detection for ad blockers
      if (e.message.includes('Failed to fetch') || e.message.includes('NetworkError') ||
          e.message.includes('blocked') || adBlockerDetected) {
        adBlockerDetected = true;
        console.warn('API call failed - likely ad blocker interference');
      } else {
        alert('Unable to load quote data. Please try again later.');
        return;
      }
    }
  } else {
    alert('Invalid quote link.');
    return;
  }

  // Helper function to title case names
  function titleCaseName(name) {
    if (!name) return '';
    return name.toLowerCase().split(/\s+/).map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  // Hide loading and show content
  document.getElementById('loading').style.display = 'none';
  document.getElementById('quote-content').style.display = 'block';

  // Populate fields
  document.getElementById('customer-name').textContent = titleCaseName(name);
  document.getElementById('customer-phone').textContent = phone;
  document.getElementById('customer-email').textContent = email;
  document.getElementById('customer-zip').textContent = zip;
  document.getElementById('service-dogs').textContent = dogs;
  document.getElementById('service-frequency').textContent = displayFreq;
  document.getElementById('service-questions').textContent = questions;

  // Calculate price
  // Normalize frequency by removing hyphens to match pricing keys (e.g., "bi-weekly" -> "biweekly")
  const normalizedFreq = freq.toLowerCase();
  const pricePerService = pricing[normalizedFreq] ? pricing[normalizedFreq][dogs] : 0;

  // Safeguard: Log warning if frequency is unrecognized to prevent silent pricing failures
  if (!pricing[normalizedFreq]) {
    console.warn('Unrecognized service frequency:', normalizedFreq, '- defaulting to $0. Check pricing data.');
  }

  const billingCycle = normalizedFreq === 'weekly' ? 'week' : '2 weeks';
  const totalPrice = pricePerService;

  document.getElementById('price-per-service').textContent = pricePerService;
  document.getElementById('frequency-display').textContent = displayFreq;
  document.getElementById('billing-cycle').textContent = billingCycle;
  document.getElementById('total-price').textContent = totalPrice;
  document.getElementById('total-price-repeat').textContent = totalPrice;

  // Quote open tracking can be added later if needed (e.g., via Google Analytics)

  // Helper functions for Facebook tracking
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

  // Ad blocker detection and Stripe integration
  let stripe = null;
  let adBlockerDetected = false;

  try {
    stripe = Stripe(currentConfig.publishableKey);
  } catch (error) {
    adBlockerDetected = true;
    console.warn('Stripe.js blocked by ad blocker');
  }

  // Check for ad blocker by testing Stripe availability
  if (!stripe || typeof stripe.redirectToCheckout !== 'function') {
    adBlockerDetected = true;
  }

  // Show ad blocker warning if detected
  if (adBlockerDetected) {
    document.getElementById('adblocker-warning').style.display = 'block';
    document.getElementById('quote-content').style.display = 'none';
  }

  const startButton = document.getElementById('start-subscription');

  // Disable button if ad blocker is detected
  if (adBlockerDetected) {
    startButton.disabled = true;
    startButton.textContent = 'Ad Blocker Detected - Please Refresh';
    startButton.style.background = '#ccc';
    startButton.style.cursor = 'not-allowed';
  }

  startButton.addEventListener('click', async function() {
    if (startButton.hasClicked) return; // Prevent duplicate clicks
    // Disable button and change text to prevent multiple clicks
    const originalText = startButton.textContent;
    startButton.disabled = true;
    startButton.textContent = 'Processing...';
    startButton.hasClicked = true; // Flag to prevent any further clicks

    const priceId = priceIds[normalizedFreq][dogs];

    // Generate event ID
    const eventId = 'purchase_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    // Generate unique external ID for deduplication
    const externalId = 'stripe_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    try {
      const response = await fetch('https://hook.us2.make.com/uhlb6qvyclumhxhshi19of8vzu4cnxx2', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          priceId: priceId,
          customerEmail: email,
          customerName: name,
          customerPhone: phone,
          metadata: {
            quoteId: quoteId,
            customerEmail: email,
            customerName: name,
            customerPhone: phone,
            eventid: eventId,
            externalId: externalId,
            sourceurl: window.location.href,
            email: email,
            phone: phone,
            name: name,
            zip: zip,
            client_user_agent: navigator.userAgent,
            fbc: getFbc(),
            fbp: getCookie('_fbp'),
            value: totalPrice,
            serviceFrequency: normalizedFreq,
            numberOfDogs: dogs
          }
        })
      });

      // Check for ad blocker interference in payment API call
      if (!response.ok) {
        if (response.status === 0 || response.type === 'opaque' || response.status === 404) {
          console.warn('Payment API call blocked - likely ad blocker');
          // Show ad blocker warning and hide quote content
          document.getElementById('adblocker-warning').style.display = 'block';
          document.getElementById('quote-content').style.display = 'none';
          startButton.disabled = false;
          startButton.textContent = originalText;
          return;
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const session = await response.json();
      console.log('Session response from Make.com:', session);

      // Store the event ID returned from Make.com for Purchase pixel matching
      if (session.eventId) {
        console.log('Storing Purchase eventId in localStorage:', session.eventId);
        localStorage.setItem('purchaseEventId', session.eventId);
      } else {
        console.log('No eventId in Make.com response');
      }

      const result = await stripe.redirectToCheckout({sessionId: session.id});
      if (result.error) {
        alert(result.error.message);
        // Re-enable button on error
        startButton.disabled = false;
        startButton.textContent = originalText;
      }
    } catch (error) {
      console.error('Error:', error);

      // Enhanced error detection for ad blockers in payment flow
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') ||
          error.message.includes('blocked')) {
        console.warn('Payment API failed - likely ad blocker interference');
        // Show ad blocker warning
        document.getElementById('adblocker-warning').style.display = 'block';
        document.getElementById('quote-content').style.display = 'none';
      } else {
        alert('Something went wrong. Please try again.');
      }

      // Re-enable button on error
      startButton.disabled = false;
      startButton.textContent = originalText;
    }
  });
});
</script>

<style>
.loading {
  position: fixed;
  top: 132px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 132px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  z-index: 9999;
}

@media (max-width: 1199px) {
  .loading {
    top: 112px;
    height: calc(100vh - 112px);
  }
}

@media (max-width: 349px) {
  .loading {
    top: 64px;
    height: calc(100vh - 64px);
  }
}

.loading-content {
  text-align: center;
  max-width: 400px;
  padding: 20px;
  background: #f3f3f3;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.loading-logo {
  margin-bottom: 30px;
}

.logo-img {
  max-width: 200px;
  height: auto;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e0e0e0;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-weight: 500;
}

.loading-subtext {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

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
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-primary);
}

.trust-elements {
  display: flex;
  justify-content: space-around;
  margin: 1.875rem 0;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  margin: 0.625rem;
}

.trust-icon {
  font-size: 1.5rem;
  margin-right: 0.625rem;
}

.quote-actions {
  text-align: center;
  margin-top: 2.5rem;
}

.cta-button {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 0.9375rem 1.875rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #45a049;
}

.billing-note {
  margin-top: 0.625rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Ad Blocker Warning Styles */
.adblocker-warning {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border: 2px solid #f44336;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(244, 67, 54, 0.2);
}

.warning-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 100%;
}

.warning-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.warning-text h3 {
  color: #d32f2f;
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.warning-text p {
  margin: 8px 0;
  color: #333;
  line-height: 1.5;
}

.refresh-btn {
  background: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  transition: background 0.3s;
}

.refresh-btn:hover {
  background: #d32f2f;
}

@media (max-width: 768px) {
  .warning-content {
    flex-direction: column;
    text-align: center;
  }

  .warning-icon {
    align-self: center;
  }
}
</style>
