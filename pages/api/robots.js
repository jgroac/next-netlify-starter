export default function handler(req, res) {
    res.send(`
User-agent: FacebookBot
Allow: /reviews/

User-agent: facebookexternalhit
Allow: /reviews/

User-agent: *
Disallow: /
    `);
}