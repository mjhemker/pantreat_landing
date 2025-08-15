# 🚀 Deploy Pantreat to getpantreat.com

## Quick Deploy with Vercel (Recommended)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy to Vercel
```bash
# In your project directory
vercel --prod

# Follow the prompts:
# - Link to existing project? No
# - Project name: pantreat-landing
# - Directory: ./
# - Want to modify settings? No
```

### 3. Add Custom Domain
1. Go to [vercel.com](https://vercel.com) → Your Project → Settings → Domains
2. Add domain: `getpantreat.com`
3. Add domain: `www.getpantreat.com`

### 4. Configure Squarespace DNS
In Squarespace: **Settings → Domains → DNS Settings**

Add these records:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 5. Add Environment Variables
In Vercel dashboard → Settings → Environment Variables:
```
Name: OPENAI_API_KEY
Value: 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
```

---

## Alternative: Netlify

### 1. Build for Static Export
```bash
npm run build
```

### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag `out/` folder to deploy area
3. Site Settings → Domain Management → Add custom domain

### 3. Configure Squarespace DNS for Netlify
```
Type: CNAME
Name: @
Value: [your-netlify-url].netlify.app

Type: CNAME
Name: www  
Value: [your-netlify-url].netlify.app
```

---

## ⚠️ Important Notes

- **API Routes**: Vercel supports API routes automatically. Netlify requires Netlify Functions setup.
- **SSL**: Both platforms provide free SSL certificates automatically
- **DNS Propagation**: Takes 24-48 hours to fully propagate globally
- **OpenAI API**: Make sure to add the API key as environment variable, not hardcoded

## 🧪 Test Deployment

After DNS propagates, test:
- ✅ Site loads at `getpantreat.com`
- ✅ All sections render correctly  
- ✅ Mobile responsive design works
- ✅ AI recipe generator functions
- ✅ Form submissions work
- ✅ Videos autoplay
- ✅ SSL certificate active (🔒)

## 🔧 Troubleshooting

**If API doesn't work:**
1. Check environment variables in hosting dashboard
2. Verify API key is correct
3. Check function/API route logs

**If domain doesn't resolve:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS settings in Squarespace
3. Use DNS checker: `nslookup getpantreat.com`