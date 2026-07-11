const fs = require('fs');

async function test() {
  const res = await fetch('https://raw.githubusercontent.com/raffyyudha/boconcept-clone/main/src/app/layout.tsx');
  const text = await res.text();
  fs.writeFileSync('c:/Users/wcast/Downloads/boconcept-clone-main/boconcept-clone-main/layout_on_github.txt', text);
  console.log('Saved GitHub Layout! Length:', text.length);
}

test();
