# Email & SMTP Setup — CodeVista

## Namecheap Private Email

- **Plan:** Private Email Starter (1 mailbox)
- **Mailbox:** info@codevista.com
- **Webmail:** https://privateemail.com

## SMTP Configuration

| Setting         | Value                      |
|-----------------|----------------------------|
| SMTP Server     | mail.privateemail.com      |
| Port (SSL)      | 465                        |
| Port (TLS)      | 587                        |
| Authentication  | Required (email + password)|
| Encryption      | SSL/TLS                    |

## IMAP Configuration (for reading email)

| Setting         | Value                      |
|-----------------|----------------------------|
| IMAP Server     | mail.privateemail.com      |
| Port (SSL)      | 993                        |
| Authentication  | Required                   |

## Environment Variables (.env.local)

```env
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_USER=info@codevista.com
SMTP_PASS=your_password_here
CONTACT_EMAIL=info@codevista.com
```

## Usage in Website

The contact form on /contact sends form data to `/api/contact` which uses Nodemailer with the above SMTP settings to deliver emails to info@codevista.com.

## Testing

To test locally without real SMTP, you can use:
- **Ethereal Email** (https://ethereal.email) — fake SMTP for testing
- Or set `SMTP_HOST=smtp.ethereal.email` with test credentials
