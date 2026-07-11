const fs = require('fs');

async function test() {
  const res = await fetch('https://oscarfurnishing.com');
  const text = await res.text();
  fs.writeFileSync('c:/Users/wcast/Downloads/boconcept-clone-main/boconcept-clone-main/raw_com.html', text);
  console.log('Saved! Length:', text.length);
}

test();
