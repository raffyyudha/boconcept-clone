const http = require('http');

const urls = [
  'http://localhost:3000/catalogue/Night%20Curtain.avif',
  'http://localhost:3000/catalogue/Single%20layer%20night%20curtain.avif',
  'http://localhost:3000/catalogue/Uni%20slat%20Smart%20curtain%20blind.avif',
  'http://localhost:3000/catalogue/Combi%20or%20Zebra%20Korean%20blind.avif'
];

function testUrl(url) {
  http.get(url, (res) => {
    console.log(`${url} -> Status: ${res.statusCode} | Type: ${res.headers['content-type']}`);
  }).on('error', (err) => {
    console.error(`Error for ${url}:`, err.message);
  });
}

urls.forEach(testUrl);
