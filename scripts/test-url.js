const https = require('https');

const urls = [
  'https://oscarfurnishing.pages.dev/catalogue/motorisedzipblinds.avif',
  'https://oscarfurnishing.pages.dev/catalogue/4m-8mwidthsizezipblind.avif',
  'https://oscarfurnishing.pages.dev/catalogue/Night%20Curtain.avif'
];

function testUrl(url) {
  https.get(url, (res) => {
    console.log(`${url} -> Status: ${res.statusCode} | Type: ${res.headers['content-type']}`);
  }).on('error', (err) => {
    console.error(`Error for ${url}:`, err.message);
  });
}

urls.forEach(testUrl);
