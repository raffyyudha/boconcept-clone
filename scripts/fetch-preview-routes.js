async function test() {
  const routes = [
    'https://fefcc1a0.oscarfurnishing.pages.dev/about',
    'https://fefcc1a0.oscarfurnishing.pages.dev/admin/login',
    'https://fefcc1a0.oscarfurnishing.pages.dev/contact',
    'https://fefcc1a0.oscarfurnishing.pages.dev/_next/static/css/f0bcb4d0d3ee2297.css'
  ];
  for (const r of routes) {
    const res = await fetch(r);
    console.log(r, '-> Status:', res.status);
  }
}

test();
