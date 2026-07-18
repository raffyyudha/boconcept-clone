const https = require('https');

const urls = [
  'https://oscarfurnishing.pages.dev/catalogue/Night%20Curtain.avif',
  'https://oscarfurnishing.pages.dev/Catalogue/Night%20Curtain.avif',
  'https://oscarfurnishing.pages.dev/catalogue/night%20curtain.avif',
  'https://oscarfurnishing.pages.dev/Catalogue/night%20curtain.avif'
];

function testUrl(url) {
  https.get(url, (res) => {
    console.log(`${url} -> Status: ${res.statusCode} | Type: ${res.headers['content-type']}`);
  }).on('error', (err) => {
    console.error(`Error for ${url}:`, err.message);
  });
}

urls.forEach(testUrl);
