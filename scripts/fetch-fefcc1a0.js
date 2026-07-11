const fs = require('fs');

async function test() {
  const res = await fetch('https://fefcc1a0.oscarfurnishing.pages.dev');
  console.log('Status:', res.status);
  for (const [key, val] of res.headers.entries()) {
    console.log(`${key}: ${val}`);
  }
}

test();
