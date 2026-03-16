# Deployment Instructions for www.aistradinginc.com

## 📋 Prerequisites Completed

✅ Git repository initialized
✅ All files committed
✅ Production build ready

---

## 🔐 Step 1: Create Private GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in the details:
   - **Repository name:** `ais-trading-website`
   - **Description:** AIS Trading Inc - Official Website
   - **Visibility:** ✅ **Private** (check this!)
   - **DO NOT** initialize with README (we already have one)

3. Click **"Create repository"**

---

## 📤 Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd "/Users/ahsanijaz/Desktop/Ahsan Sheikh/AI Coding/AIS Trading Inc Website/AIS"

# Add GitHub remote
git remote add origin https://github.com/iamahsansheikh/ais-trading-website.git

# Push code
git branch -M main
git push -u origin main
```

You'll be asked to authenticate with GitHub. Use your GitHub credentials.

---

## 🚀 Step 3: Deploy to www.aistradinginc.com

### Option A: Deploy with Vercel (Recommended - Easiest)

1. **Go to:** https://vercel.com/signup
2. **Sign in** with your GitHub account (iamahsansheikh)
3. Click **"Add New Project"**
4. **Import your repository:** `ais-trading-website`
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**
7. **After deployment**, go to **Settings → Domains**
8. Add your custom domain: **www.aistradinginc.com**
9. Follow Vercel's instructions to update your DNS records

### Option B: Deploy with Netlify

1. **Go to:** https://app.netlify.com/
2. **Sign in** with GitHub
3. Click **"Add new site" → "Import an existing project"**
4. Choose GitHub and select **ais-trading-website**
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**
7. Go to **Site settings → Domain management**
8. Add custom domain: **www.aistradinginc.com**

---

## 🌐 Step 4: Configure DNS (For your domain)

You need to update your domain's DNS records at your domain registrar:

### For Vercel:

Add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

---

## ✅ Verification

After DNS propagation (5-60 minutes), your site will be live at:

- **https://www.aistradinginc.com**
- **https://aistradinginc.com**

---

## 🔄 Future Updates

To update your website:

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Description of changes"
git push

# Vercel/Netlify will automatically rebuild and deploy!
```

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/
- **Custom Domain Guide:** https://vercel.com/docs/custom-domains

---

**🎉 Your website is ready to go live!**
