const AdmZip = require('adm-zip');
const path = require('path');

const zipPath = path.join(__dirname, 'attached_assets', 'MatrixBinary_1761682302712.zip');
const zip = new AdmZip(zipPath);

// List entries
console.log('Zip file contents:');
const entries = zip.getEntries();
entries.forEach(entry => {
  console.log(entry.entryName);
});

// Extract to temp directory
const extractPath = path.join(__dirname, 'extracted_content');
zip.extractAllTo(extractPath, true);
console.log('\nExtracted to:', extractPath);
