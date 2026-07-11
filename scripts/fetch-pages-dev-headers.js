const fs = require('fs');

async function test() {
  const res = await fetch('https://oscarfurnishing.pages.dev', {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    }
  });
  console.log('Status:', res.status);
  for (const [key, val] of res.headers.entries()) {
    console.log(`${key}: ${val}`);
  }
}

test();
