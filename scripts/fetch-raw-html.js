const fs = require('fs');

async function test() {
  const res = await fetch('https://oscarfurnishing.pages.dev');
  const text = await res.text();
  fs.writeFileSync('c:/Users/wcast/Downloads/boconcept-clone-main/boconcept-clone-main/raw_pages_dev.html', text);
  console.log('Saved! Length:', text.length);
}

test();
