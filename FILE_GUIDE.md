# 🎯 FILE GUIDE - Which Files to Use

You have multiple files here. Here's what each one is for.

---

## ✅ **FOR GITHUB → NETLIFY DEPLOYMENT** (Recommended)

**Use these 5 files:**

1. **[index.html](computer:///mnt/user-data/outputs/index.html)** (56KB)
   - Main website file
   - Ready for GitHub/Netlify

2. **[config.js](computer:///mnt/user-data/outputs/config.js)** (2.5KB)
   - **EDIT THIS FIRST!**
   - Put your Payhip product URLs here
   - Put your support email here

3. **[netlify.toml](computer:///mnt/user-data/outputs/netlify.toml)** (558 bytes)
   - Netlify deployment settings
   - Don't edit this

4. **[.gitignore](computer:///mnt/user-data/outputs/.gitignore)** (289 bytes)
   - Git ignore rules
   - Don't edit this

5. **[QUICKSTART.md](computer:///mnt/user-data/outputs/QUICKSTART.md)** (2.8KB)
   - 5-minute deployment guide
   - **START HERE!**

**Full guide:** [DEPLOYMENT_GUIDE.md](computer:///mnt/user-data/outputs/DEPLOYMENT_GUIDE.md) (9.2KB)

---

## 📂 **HOW TO USE THESE FILES**

### **Step 1: Download Everything**
Download all the files listed above to a folder on your computer.

### **Step 2: Edit config.js**
Open `config.js` in any text editor and add your Payhip URLs:

```javascript
const config = {
  products: {
    holidayEdition: "https://payhip.com/b/YOUR_ID_HERE",
    newYearEdition: "https://payhip.com/b/YOUR_ID_HERE", 
    bundle: "https://payhip.com/b/YOUR_ID_HERE"
  }
};
```

### **Step 3: Follow QUICKSTART.md**
Open `QUICKSTART.md` and follow the 3 steps:
1. Edit config.js (you just did this!)
2. Push to GitHub
3. Deploy to Netlify

**Time: 5 minutes total**

---

## 📚 **OTHER FILES (For Reference)**

These files are from earlier iterations. You can ignore them:

- `happyholidaycouples-final.html` - Duplicate of index.html
- `index-production.html` - Old version (broken colors)
- `README.md` - Original deployment guide (outdated)
- `RELAY_REPORT.md` - Build analysis report
- `FINAL_SUMMARY.md` - Summary of fixes
- `PRODUCTION_GUIDE.md` - Tailwind optimization guide

**You don't need these for GitHub/Netlify deployment.**

---

## 🎯 **WHAT MAKES THE GITHUB/NETLIFY METHOD BETTER**

### **Old Way (Manual Upload):**
❌ Edit HTML file directly  
❌ Find/replace every URL manually  
❌ Re-upload entire file every time  
❌ No version history  
❌ Easy to break things  

### **New Way (GitHub/Netlify):**
✅ Edit one config file (`config.js`)  
✅ Push to GitHub  
✅ Auto-deploys to live site  
✅ Full version history  
✅ Can't break production (test branches first)  
✅ Professional workflow  

---

## 🔄 **HOW UPDATES WORK**

### **To Change Product URLs:**
1. Edit `config.js`
2. Save file
3. Push to GitHub:
   ```bash
   git add config.js
   git commit -m "Updated product URLs"
   git push
   ```
4. Netlify auto-deploys (30 seconds)
5. Changes are LIVE ✅

### **To Change Page Content:**
1. Edit `index.html`
2. Save file
3. Push to GitHub (same commands as above)
4. Netlify auto-deploys
5. Changes are LIVE ✅

---

## 🌐 **YOUR WORKFLOW**

```
Edit files locally
      ↓
Test in browser (open index.html)
      ↓
Commit to GitHub
      ↓
Netlify auto-deploys
      ↓
LIVE SITE ✅
```

---

## ⚡ **QUICK COMMANDS REFERENCE**

### **First Time Setup:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/happyholidaycouples.git
git push -u origin main
```

### **Every Update After:**
```bash
git add .
git commit -m "Describe what you changed"
git push
```

That's it! Netlify handles the rest.

---

## 🆘 **TROUBLESHOOTING**

### **"I don't have Git installed"**
Download Git: https://git-scm.com/downloads

Or use GitHub Desktop (easier): https://desktop.github.com/

### **"I don't know how to use command line"**
Use GitHub Desktop instead. It's visual and easier.

### **"Links still don't work after editing config.js"**
1. Make sure you saved the file
2. Make sure you pushed to GitHub (`git push`)
3. Wait 30 seconds for Netlify to redeploy
4. Hard refresh your browser (Ctrl+Shift+R)

### **"Can I still do manual upload?"**
Yes, but you lose all the benefits. Just upload `index.html` to any web host. You'll need to manually edit product URLs in the HTML file.

---

## 📊 **FILE SIZE COMPARISON**

| File | Size | Purpose |
|------|------|---------|
| index.html | 56KB | Main website |
| config.js | 2.5KB | Product URLs |
| netlify.toml | 558B | Deployment config |
| .gitignore | 289B | Git rules |
| **TOTAL** | **~60KB** | **Complete site** |

Super lightweight. Loads in ~0.2 seconds.

---

## ✅ **FINAL CHECKLIST**

Before deploying, make sure you have:

- [ ] Downloaded these 4 files:
  - [ ] index.html
  - [ ] config.js
  - [ ] netlify.toml
  - [ ] .gitignore

- [ ] Edited config.js with your:
  - [ ] Holiday Edition Payhip URL
  - [ ] New Year Edition Payhip URL
  - [ ] Bundle Payhip URL
  - [ ] Support email

- [ ] Read QUICKSTART.md

- [ ] Ready to push to GitHub

---

## 🎉 **YOU'RE READY!**

1. Download the 4 required files
2. Edit `config.js`
3. Follow `QUICKSTART.md`
4. Go live in 5 minutes

**Questions?** Read `DEPLOYMENT_GUIDE.md` for full details.

---

## 💡 **PRO TIP**

After you deploy, bookmark these:
- Your GitHub repo (for version control)
- Your Netlify dashboard (for deploy logs)
- Your live site URL (to share with customers)

---

**Happy deploying! 🚀**