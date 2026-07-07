const fs = require("fs");
const path = require("path");

// We will install sharp programmatically or prompt to run npm install sharp
let sharp;
try {
  sharp = require("sharp");
} catch (err) {
  console.error("Please run: npm install sharp");
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, "public");
const SRC_DIR = path.join(__dirname, "src");

// Helper to scan directories recursively
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
    return null;
  }
  
  // Skip logo
  if (path.basename(filePath) === "logonya.png") {
    return null;
  }

  const outputFilePath = filePath.substring(0, filePath.length - ext.length) + ".avif";
  
  try {
    console.log(`Converting: ${path.relative(__dirname, filePath)} -> ${path.relative(__dirname, outputFilePath)}`);
    await sharp(filePath)
      .avif({ quality: 80 })
      .toFile(outputFilePath);
      
    // Delete original file
    fs.unlinkSync(filePath);
    console.log(`Deleted original: ${path.relative(__dirname, filePath)}`);
    return {
      original: path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/"),
      new: path.relative(PUBLIC_DIR, outputFilePath).replace(/\\/g, "/")
    };
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message);
    return null;
  }
}

async function updateCodeReferences(conversions) {
  if (conversions.length === 0) return;

  const srcFiles = getFiles(SRC_DIR).filter(f => f.endsWith(".tsx") || f.endsWith(".ts") || f.endsWith(".js") || f.endsWith(".css"));
  
  for (const file of srcFiles) {
    let content = fs.readFileSync(file, "utf8");
    let modified = false;
    
    for (const conv of conversions) {
      // Create search patterns for both absolute/relative paths in nextjs
      // e.g. "/zip_blind.png" -> "/zip_blind.avif"
      // or "zip_blind.png" -> "zip_blind.avif"
      const searchPattern1 = `/${conv.original}`;
      const replacePattern1 = `/${conv.new}`;
      
      const searchPattern2 = conv.original;
      const replacePattern2 = conv.new;

      if (content.includes(searchPattern1)) {
        content = content.split(searchPattern1).join(replacePattern1);
        modified = true;
      } else if (content.includes(searchPattern2)) {
        content = content.split(searchPattern2).join(replacePattern2);
        modified = true;
      }
    }
    
    if (modified) {
      console.log(`Updating references in: ${path.relative(__dirname, file)}`);
      fs.writeFileSync(file, content, "utf8");
    }
  }
}

async function run() {
  const publicFiles = getFiles(PUBLIC_DIR);
  const conversions = [];
  
  for (const file of publicFiles) {
    const res = await convertImage(file);
    if (res) {
      conversions.push(res);
    }
  }
  
  console.log(`\nCompleted ${conversions.length} conversions. Updating code references...\n`);
  await updateCodeReferences(conversions);
  console.log("Done! All code references updated.");
}

run();
