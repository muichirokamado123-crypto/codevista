# Domain Purchase Checklist — CodeVista

## Domain Name
- **Primary:** codevista.com
- **Alternatives:** codevista.io, codevista.dev, codevista.tech, codevista.pk

## Steps (Namecheap)

1. Go to https://www.namecheap.com/domains/domain-name-search/
2. Search for "codevista.com"
3. If available, add to cart and purchase
4. Enable **WhoisGuard** (free privacy protection)
5. Set DNS to Namecheap BasicDNS (default)

## Email Setup

1. Purchase **Private Email Starter** plan (~$1.49/mo)
2. Link it to the codevista.com domain
3. Create mailbox: **info@codevista.com**
4. DNS records (MX, SPF, DKIM) are auto-configured if domain is on Namecheap

## Hosting (Vercel)

1. Push code to GitHub repository
2. Import project on https://vercel.com
3. Add custom domain: codevista.com
4. In Namecheap DNS, add:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
5. Wait for SSL certificate auto-provisioning

## Post-Purchase

- [ ] Domain registered
- [ ] WhoisGuard enabled
- [ ] Email mailbox created (info@codevista.com)
- [ ] DNS configured for Vercel
- [ ] SSL active
- [ ] Website live at codevista.com
