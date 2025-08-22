# Islamic Pro — Support page

This folder contains a simple, static support page you can host and provide as the "Support URL" in App Store Connect.

Files
- `index.html` — single-page support site with contact, FAQ, and troubleshooting.
- `style.css` — lightweight styling.

Before publishing
- Replace the sample URL shown in the footer with the final hosted URL.
- Configure form handling: the page is wired to send form submissions to a serverless email endpoint. Two quick options:

	Option A — Formspree (recommended, no server):
	1. Sign up at https://formspree.io and create a form. Note the form endpoint (looks like `https://formspree.io/f/xxxxxx`).
	2. Open `support/index.html` and replace the `ENDPOINT` constant near the bottom of the file with your Formspree URL.

	Option B — Custom endpoint or serverless function:
	1. Implement an endpoint that accepts POST JSON and sends an email (SendGrid, SES, or your mail provider).
	2. Replace the `ENDPOINT` constant in `support/index.html` with your endpoint URL.

Recommended hosting
- GitHub Pages: push this `support/` folder to a repository and enable Pages for the branch; the site will be available at `https://<username>.github.io/<repo>/support/` (or root if configured).
- Any static host will work (Netlify, Vercel, Firebase Hosting, S3 + CloudFront).

App Store Connect notes
- In App Store Connect, set the "Support URL" to the final HTTPS URL for this page.
- Make sure the URL is reachable and loads without redirects or authentication.

Contact
If you want I can:

- customize the text to match your brand voice,
- set up a Formspree form and configure the endpoint for you,
- add serverless forwarding or a GitHub Actions workflow to publish to GitHub Pages.
