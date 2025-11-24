# 🚀 Happy Holiday Couples - GitHub → Netlify Deployment

Complete setup guide for deploying your landing page via GitHub and Netlify.

---

## 📦 What's Included

```
happyholidaycouples/
├── index.html          # Main landing page
├── config.js           # Product URLs & settings (EDIT THIS!)
├── netlify.toml        # Netlify configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## 🎯 Quick Start (5 Minutes)

### **Step 1: Update Product URLs**

Open `config.js` and replace the placeholder URLs:

```javascript
const config = {
  products: {
    holidayEdition: "https://payhip.com/b/YOUR_HOLIDAY_EDITION_ID",  // ← Change this
    newYearEdition: "https://payhip.com/b/YOUR_NEWYEAR_EDITION_ID",  // ← Change this
    bundle: "https://payhip.com/b/YOUR_BUNDLE_ID"                    // ← Change this
  },
  
  contact: {
    email: "support@happyholidaycouples.com"  // ← Change this
  }
};
```

**How to get your Payhip product URLs:**
1. Go to your Payhip dashboard
2. Click on a product
3. Copy the "Buy Now" link (looks like `https://payhip.com/b/AbCdE`)
4. Paste it into `config.js`

---

### **Step 2: Create GitHub Repository**

#### **Option A: Using GitHub Desktop** (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **File → Add Local Repository**
4. Select your project folder
5. Click **Create Repository**
6. Click **Publish Repository**
7. Choose a name (e.g., `happyholidaycouples`)
8. Click **Publish**

#### **Option B: Using Command Line**
```bash
# Navigate to your project folder
cd /path/to/happyholidaycouples

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Happy Holiday Couples landing page"

# Create repository on GitHub (install gh CLI first: https://cli.github.com/)
gh repo create happyholidaycouples --public --source=. --remote=origin --push
```

#### **Option C: Using GitHub.com** (Manual)
1. Go to https://github.com/new
2. Name: `happyholidaycouples`
3. Click **Create repository**
4. Follow the instructions to push existing code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/happyholidaycouples.git
git push -u origin main
```

---

### **Step 3: Deploy to Netlify**

#### **Method 1: Netlify UI** (Recommended)
1. Go to https://app.netlify.com/
2. Click **Add new site → Import an existing project**
3. Click **GitHub**
4. Authorize Netlify (first time only)
5. Select your `happyholidaycouples` repository
6. Click **Deploy site**
7. Wait 30 seconds ✅
8. Your site is LIVE! 🎉

#### **Method 2: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

---

## ⚙️ Configuration Options

### **Analytics (Optional)**

Add Google Analytics or Facebook Pixel in `config.js`:

```javascript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",  // Your GA4 ID
  facebookPixelId: "123456789012345"   // Your FB Pixel ID
}
```

The `config.js` script will automatically load these when the page loads.

---

## 🔄 Making Updates

### **Change Product URLs or Text:**
1. Edit `config.js` or `index.html`
2. Save changes
3. Push to GitHub:
```bash
git add .
git commit -m "Updated product URLs"
git push
```
4. Netlify automatically redeploys (takes ~30 seconds)
5. Changes are LIVE ✅

---

## 🌐 Custom Domain Setup

### **Option 1: Use Netlify Subdomain** (Free)
Your site gets a free URL like: `happy-holiday-couples.netlify.app`

To customize:
1. Go to **Site settings → Domain management**
2. Click **Options → Edit site name**
3. Enter your preferred name

### **Option 2: Add Custom Domain** (Recommended)
1. Buy domain (Namecheap, Google Domains, etc.)
2. In Netlify: **Site settings → Domain management → Add custom domain**
3. Enter your domain (e.g., `happyholidaycouples.com`)
4. Follow DNS setup instructions
5. Netlify provides FREE SSL certificate ✅

---

## 🎨 Customization Guide

### **Colors**
All colors are defined at the top of `index.html` in the `<style>` block:

```css
:root {
    --burgundy-600: #c9315b;  /* Change hex codes */
    --gold-400: #facc15;
    --cream-50: #fdfcfa;
}
```

### **Content**
Edit text directly in `index.html`. Search for the section you want to change:
- Hero: Search for "Candlelight Confession"
- Testimonials: Search for "Jasmine & Marco"
- Pricing: Search for "$39"

### **Images**
To add images:
1. Create `assets/images/` folder
2. Add your images
3. Update `index.html`:
```html
<img src="assets/images/hero-image.jpg" alt="Candlelight scene">
```

### **Remove Christmas Tree**
Delete lines 856-871 in `index.html` (the `<div class="christmas-tree">` block)

---

## 📊 Performance

Current stats:
- **Page size:** 56KB
- **Load time:** ~0.2 seconds
- **Dependencies:** Google Fonts only
- **Lighthouse score:** 95+ (after deployment)

To check your deployed site:
1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Click **Generate report**

---

## 🐛 Troubleshooting

### **Links don't work:**
- Check `config.js` - make sure URLs are correct
- Make sure you pushed changes to GitHub
- Check browser console (F12) for errors

### **Site not updating:**
- Clear browser cache (Ctrl+Shift+R)
- Check Netlify deploy log (Site → Deploys)
- Make sure you pushed to GitHub

### **404 errors:**
- Check `netlify.toml` is in root folder
- Verify file is named `index.html` (not `index.htm`)

### **Styles look broken:**
- Hard refresh (Ctrl+Shift+R)
- Check if `config.js` is loading (view source)

---

## 🚀 Advanced: Environment Variables

For sensitive data (API keys, etc.), use Netlify environment variables:

1. Go to **Site settings → Environment variables**
2. Add variables (e.g., `PAYHIP_HOLIDAY_ID`)
3. Access in a build script (requires build setup)

*Note: Current setup doesn't need this - config.js works fine.*

---

## 📈 Monitoring

### **Analytics:**
- Google Analytics (add to `config.js`)
- Netlify Analytics (paid add-on)

### **Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Netlify → Site → Analytics

### **Uptime:**
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://www.pingdom.com/)

---

## ✅ Pre-Launch Checklist

- [ ] Updated all Payhip URLs in `config.js`
- [ ] Changed support email in `config.js`
- [ ] Tested all buy buttons (click through to Payhip)
- [ ] Tested on mobile (Chrome DevTools → Device Toolbar)
- [ ] Checked for console errors (F12)
- [ ] Added Google Analytics (optional)
- [ ] Added Facebook Pixel (optional)
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Tested live site
- [ ] Set up custom domain (optional)
- [ ] Enabled SSL (automatic on Netlify)
- [ ] Submitted to Google Search Console (optional)

---

## 🆘 Support

### **GitHub Issues:**
If something breaks, [create an issue](https://github.com/YOUR_USERNAME/happyholidaycouples/issues)

### **Netlify Support:**
- [Docs](https://docs.netlify.com/)
- [Community Forum](https://answers.netlify.com/)
- [Support](https://www.netlify.com/support/)

### **Payhip Support:**
- [Help Center](https://help.payhip.com/)
- Email: support@payhip.com

---

## 📝 File Structure Explained

```
├── index.html          # Main page (edit content here)
├── config.js           # Product URLs & settings (edit this first!)
├── netlify.toml        # Netlify config (don't touch unless needed)
├── .gitignore          # Tells git what to ignore
└── README.md           # This guide
```

**Key files to edit:**
- `config.js` - Product links, email, analytics
- `index.html` - Page content, colors, text

**Don't edit unless you know what you're doing:**
- `netlify.toml` - Deployment settings
- `.gitignore` - Git configuration

---

## 🎓 Learning Resources

### **Git & GitHub:**
- [GitHub Guides](https://guides.github.com/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### **Netlify:**
- [Get Started](https://docs.netlify.com/get-started/)
- [Continuous Deployment](https://docs.netlify.com/site-deploys/overview/)

### **HTML/CSS:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

---

## 🎉 You're Done!

Your site is now:
- ✅ Version controlled (GitHub)
- ✅ Automatically deployed (Netlify)
- ✅ Easy to update (edit → push → live)
- ✅ Fast & secure (CDN + SSL)
- ✅ Professional setup

**Next steps:**
1. Share your live URL
2. Test the checkout flow
3. Start marketing!

---

## 💡 Pro Tips

1. **Test Before You Push**
   - Open `index.html` locally in browser
   - Check all links work
   - Then push to GitHub

2. **Use Branches**
   - Make experimental changes on a new branch
   - Test on Netlify preview deploy
   - Merge to main when ready

3. **Keep Backup**
   - GitHub is your backup
   - But download a copy occasionally

4. **Monitor Traffic**
   - Add Google Analytics
   - Check Netlify analytics
   - Track conversion rates

---

**Questions?** Check the troubleshooting section above or create a GitHub issue.

**Happy deploying! 🚀**