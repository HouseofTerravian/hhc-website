# ⚡ QUICK START - GitHub → Netlify Deploy

**Time to live site: 5 minutes**

---

## 📝 Step 1: Edit config.js (2 minutes)

Open `config.js` and update these 4 things:

```javascript
const config = {
  products: {
    holidayEdition: "https://payhip.com/b/XXXXX",  // ← Your Holiday Edition URL
    newYearEdition: "https://payhip.com/b/YYYYY",  // ← Your New Year URL
    bundle: "https://payhip.com/b/ZZZZZ"           // ← Your Bundle URL
  },
  
  contact: {
    email: "your-email@example.com"  // ← Your support email
  }
};
```

**Where to get Payhip URLs:**
1. Login to Payhip
2. Go to Products
3. Click "Share" on each product
4. Copy the link (looks like `https://payhip.com/b/AbCdE`)

---

## 🐙 Step 2: Push to GitHub (1 minute)

### **Option A: GitHub Desktop** (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Drag your project folder into GitHub Desktop
3. Click "Publish Repository"
4. Done! ✅

### **Option B: Command Line**
```bash
cd /path/to/your/folder
git init
git add .
git commit -m "Initial commit"
gh repo create happyholidaycouples --public --source=. --push
```

### **Option C: Manual Upload**
1. Go to https://github.com/new
2. Create repo named `happyholidaycouples`
3. Upload files via drag-and-drop

---

## 🚀 Step 3: Deploy to Netlify (2 minutes)

1. Go to https://app.netlify.com/
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub**
4. Select your `happyholidaycouples` repo
5. Click **"Deploy site"**
6. Wait 30 seconds...
7. **LIVE!** 🎉

Your site gets a URL like: `random-name-123.netlify.app`

---

## ✅ That's It!

**Your site is now:**
- Live on the internet ✅
- Has a free SSL certificate ✅
- Auto-deploys when you push to GitHub ✅

**To update later:**
1. Edit `config.js` or `index.html`
2. Push to GitHub
3. Netlify redeploys automatically (30 seconds)

---

## 🌐 Custom Domain (Optional)

Want `happyholidaycouples.com` instead of `.netlify.app`?

1. Buy domain (Namecheap, Google Domains, etc.)
2. In Netlify: **Site settings → Domain management**
3. Click **"Add custom domain"**
4. Follow DNS instructions
5. Free SSL included ✅

---

## 🐛 Quick Troubleshooting

**Links don't work?**
- Check `config.js` has correct Payhip URLs
- Clear browser cache (Ctrl+Shift+R)

**Can't see changes?**
- Make sure you pushed to GitHub
- Check Netlify deploy log

**Need help?**
Read `DEPLOYMENT_GUIDE.md` for full instructions.

---

## 📦 Files You Need

All these files must be in your project folder:

```
✅ index.html          (the website)
✅ config.js           (product links - EDIT THIS!)
✅ netlify.toml        (deployment config)
✅ .gitignore          (git rules)
```

---

**Questions?** Read the full `DEPLOYMENT_GUIDE.md`

**Ready?** Start with Step 1! 🚀