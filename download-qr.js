const fs = require("fs");
const https = require("https");
const path = require("path");

const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://oscarfurnishing.com/";
const outputPath = path.join(__dirname, "public", "website_qr.png");

console.log(`Downloading QR Code from: ${qrUrl}`);
const file = fs.createWriteStream(outputPath);

https.get(qrUrl, (response) => {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    console.log(`QR Code successfully saved to: ${outputPath}`);
  });
}).on("error", (err) => {
  fs.unlink(outputPath, () => {});
  console.error("Error downloading QR Code:", err.message);
});
