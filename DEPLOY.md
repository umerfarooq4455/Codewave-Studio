# Deploy Codewave Studio to Hostinger VPS

**Domain:** `codewavestudio.xyz`
**VPS OS:** Ubuntu 22.04 / 24.04
**Stack:** Next.js 14 + PM2 + Nginx + Let's Encrypt SSL

This guide takes you from a blank Hostinger VPS to a live site at `https://codewavestudio.xyz` in about **30 minutes**.

---

## STEP 0 — Things to confirm first

### A. Get your VPS SSH credentials
1. Log into **hpanel.hostinger.com**
2. Go to **VPS** → click your VPS
3. Click **SSH Access** → you'll see:
   - **IP address** (something like `123.45.67.89`)
   - **Username:** `root`
   - **Password:** (shown there or set by you)

### B. Check Namecheap DNS is pointing to your VPS
1. Log into **namecheap.com** → Domain List → click **Manage** next to `codewavestudio.xyz`
2. Go to **Advanced DNS**
3. You should see two **A Records** like this:

   | Type | Host | Value | TTL |
   |---|---|---|---|
   | A Record | @ | YOUR_VPS_IP | Automatic |
   | A Record | www | YOUR_VPS_IP | Automatic |

   If they're missing, **add them** using your VPS IP from Step A.

4. **Wait 5–30 minutes** for DNS to propagate. Test with: https://dnschecker.org → search `codewavestudio.xyz` → should show your VPS IP globally.

---

## STEP 1 — Push your code to GitHub

(VPS pulls from GitHub. Easier than uploading zip files.)

### On YOUR computer (PowerShell, inside `D:\Codewave Studio`):

```powershell
# 1. Create a GitHub account at github.com if you don't have one
# 2. Create a NEW PRIVATE repo at github.com/new → name it: codewave-studio
#    Don't add README or .gitignore (we already have them)
# 3. Run these commands in PowerShell:

git init
git add .
git commit -m "Initial Codewave Studio site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/codewave-studio.git
git push -u origin main
```

When `git push` asks for a password, use a **Personal Access Token** (GitHub no longer accepts passwords):
1. github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → check the `repo` scope → copy the token
3. Paste it as the password

---

## STEP 2 — Connect to your VPS

### Open PowerShell on your computer:

```powershell
ssh root@YOUR_VPS_IP
```

Type `yes` if prompted about the fingerprint, then paste your VPS root password.

You're now inside the VPS. Every command below runs on the VPS, not your computer.

---

## STEP 3 — Update Ubuntu + install required software

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20 LTS (Next.js 14 requires Node 18+)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify install
node -v   # should print v20.x.x
npm -v    # should print 10.x.x

# Install Git, Nginx, and PM2
apt install -y git nginx
npm install -g pm2

# Open firewall ports for HTTP + HTTPS + SSH
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

---

## STEP 4 — Clone your repo into the VPS

```bash
# Make a folder for the app
mkdir -p /var/www
cd /var/www

# Clone your private repo (you'll be prompted for username + token)
git clone https://github.com/YOUR_GITHUB_USERNAME/codewave-studio.git
cd codewave-studio

# Install dependencies + build for production
npm install --legacy-peer-deps
npm run build
```

The `npm run build` step takes 1–2 minutes. If it succeeds, you'll see:
```
✓ Compiled successfully
○ (Static)  prerendered as static content
```

---

## STEP 5 — Start the site with PM2

PM2 keeps Node.js running 24/7 and auto-restarts on crash.

```bash
cd /var/www/codewave-studio

# Start using the ecosystem config (already in the repo)
pm2 start ecosystem.config.js

# Make PM2 auto-start on server reboot
pm2 startup
# Copy-paste the command it prints, then run:
pm2 save
```

Verify it's running:
```bash
pm2 status
# Should show codewave-studio | online
```

Test it works locally on the VPS:
```bash
curl http://localhost:3000
# Should print HTML (lots of it)
```

---

## STEP 6 — Configure Nginx reverse proxy

Nginx receives traffic on port 80 (HTTP) and forwards it to Next.js on port 3000.

```bash
# Copy the example config from your repo
cp /var/www/codewave-studio/nginx.conf.example /etc/nginx/sites-available/codewavestudio

# Enable the site
ln -s /etc/nginx/sites-available/codewavestudio /etc/nginx/sites-enabled/

# Remove default Nginx site (so it doesn't conflict)
rm -f /etc/nginx/sites-enabled/default

# Test config + reload
nginx -t
systemctl reload nginx
```

### Test it works
Open in your browser: **http://codewavestudio.xyz**

You should see your site! 🎉 (HTTP only for now — HTTPS comes next.)

If it doesn't load:
- DNS hasn't propagated yet — wait 10–30 min and try again
- Check Nginx: `tail -50 /var/log/nginx/error.log`
- Check Next.js: `pm2 logs codewave-studio`

---

## STEP 7 — Install free SSL certificate (HTTPS)

Let's Encrypt gives you a free SSL cert that auto-renews.

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get the certificate (replace email with yours)
certbot --nginx -d codewavestudio.xyz -d www.codewavestudio.xyz \
  --non-interactive --agree-tos --email umerfarooq445642@gmail.com --redirect

# Test auto-renewal works
certbot renew --dry-run
```

When done, **https://codewavestudio.xyz** will be live with a green padlock 🔒.

---

## STEP 8 — Verify everything works

Open each URL in your browser:

- ✅ https://codewavestudio.xyz
- ✅ https://codewavestudio.xyz/services
- ✅ https://codewavestudio.xyz/software-development
- ✅ https://codewavestudio.xyz/portfolio
- ✅ https://codewavestudio.xyz/about
- ✅ https://codewavestudio.xyz/contact

### Test the contact form
1. Go to https://codewavestudio.xyz/contact
2. Submit a test message
3. Check Gmail (umerfarooq445642@gmail.com) within 30 seconds

### Verify Meta Pixel
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit https://codewavestudio.xyz
3. Click the extension icon → should show green: `Pixel 2233973950076582 — PageView fired`

---

## 🚀 How to update the site after going live

Whenever you make changes locally, deploy them like this:

### On YOUR computer:
```powershell
cd "D:\Codewave Studio"
git add .
git commit -m "Update: describe what you changed"
git push
```

### On the VPS:
```bash
ssh root@YOUR_VPS_IP
cd /var/www/codewave-studio
git pull
npm install --legacy-peer-deps
npm run build
pm2 restart codewave-studio
```

That's it. Site updates in ~30 seconds with zero downtime.

### Tip: 1-command deploy script

Save this on your VPS as `/usr/local/bin/deploy-codewave`:
```bash
#!/bin/bash
cd /var/www/codewave-studio || exit
git pull
npm install --legacy-peer-deps
npm run build
pm2 restart codewave-studio
echo "✓ Deployed at $(date)"
```

Then `chmod +x /usr/local/bin/deploy-codewave` and from now on just run `deploy-codewave` after every push.

---

## ⚠️ Troubleshooting

| Problem | Fix |
|---|---|
| **502 Bad Gateway** | Next.js isn't running. Run `pm2 logs codewave-studio` to see the error. |
| **DNS not resolving** | Wait 30 min. Check at dnschecker.org. Make sure Namecheap A records point to VPS IP. |
| **`npm install` fails** | Run `npm install --legacy-peer-deps` (already in the guide). |
| **Site loads but no styles** | `npm run build` failed. Run it again and check for errors. |
| **SSL cert fails** | DNS isn't pointing to VPS yet, OR firewall blocks port 80. Run `ufw status`. |
| **Out of memory during build** | Hostinger entry-level VPS may need swap: `fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile` |
| **Pixel/form not working in production** | Make sure code on VPS matches local — run `git status` on VPS, then `git pull`. |

---

## 📋 Quick reference — useful VPS commands

```bash
# Restart everything
pm2 restart codewave-studio
systemctl reload nginx

# View live logs
pm2 logs codewave-studio        # Next.js output
tail -f /var/log/nginx/access.log   # who's visiting
tail -f /var/log/nginx/error.log    # nginx errors

# Check resource usage
pm2 monit
htop  # might need: apt install htop

# Renew SSL manually (auto-renews anyway)
certbot renew

# Reboot the VPS
reboot
```

---

## ✅ You're live!

After completing all 8 steps, your site is:
- 🌐 Live at https://codewavestudio.xyz
- 🔒 Secured with free SSL (auto-renews)
- 📧 Sending form leads to umerfarooq445642@gmail.com
- 📊 Tracking Facebook Pixel events
- 🚀 Production-grade — handles thousands of visitors/day on the cheapest VPS

**Next step:** Open `FACEBOOK_ADS.md`, follow the 16-step checklist to launch your first ad campaign.
