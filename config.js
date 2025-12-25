// Happy Holiday Couples - Product Configuration
// Update these URLs with your actual Payhip product links

const config = {
  products: {
    holidayEdition: "https://payhip.com/b/68M2m",
    newYearEdition: "https://payhip.com/b/HgAt3",
    bundle: "https://payhip.com/b/0ZOMz"
  },
  
  contact: {
    email: "support@happyholidaycouples.com"
  },
  
  analytics: {
    googleAnalyticsId: "", // Optional: Add your GA4 ID (e.g., "G-XXXXXXXXXX")
    facebookPixelId: ""     // Optional: Add your Facebook Pixel ID
  }
};

// Auto-update all product links when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Update all Holiday Edition links
  document.querySelectorAll('a[data-product="holiday"]').forEach(link => {
    link.href = config.products.holidayEdition;
  });
  
  // Update all New Year Edition links
  document.querySelectorAll('a[data-product="newyear"]').forEach(link => {
    link.href = config.products.newYearEdition;
  });
  
  // Update all Bundle links
  document.querySelectorAll('a[data-product="bundle"]').forEach(link => {
    link.href = config.products.bundle;
  });
  
  // Update email links
  document.querySelectorAll('a[href*="mailto"]').forEach(link => {
    link.href = `mailto:${config.contact.email}`;
  });
  
  // Initialize analytics if configured
  if (config.analytics.googleAnalyticsId) {
    initGoogleAnalytics(config.analytics.googleAnalyticsId);
  }
  
  if (config.analytics.facebookPixelId) {
    initFacebookPixel(config.analytics.facebookPixelId);
  }
});

// Google Analytics initialization (if ID provided)
function initGoogleAnalytics(gaId) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gaId);
}

// Facebook Pixel initialization (if ID provided)
function initFacebookPixel(pixelId) {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', pixelId);
  fbq('track', 'PageView');
}
