const fs = require('fs');

async function test() {
  const res = await fetch('https://oscarfurnishing.com');
  console.log('Status:', res.status);
  for (const [key, val] of res.headers.entries()) {
    console.log(`${key}: ${val}`);
  }
}

test();
