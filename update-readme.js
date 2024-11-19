/* eslint-disable no-undef */
// update-readme.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the release notes passed from the command line
const releaseNotes = process.argv[2];

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the current README.md content
const readmePath = path.resolve(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Define a placeholder in your README.md where the release notes will be inserted
const placeholder = '<!-- RELEASE_NOTES -->';

// Replace the placeholder with the release notes
readmeContent = readmeContent.replace(placeholder, releaseNotes);

// Write the updated content back to README.md
fs.writeFileSync(readmePath, readmeContent);

console.log('README.md has been updated with the latest release notes.');
