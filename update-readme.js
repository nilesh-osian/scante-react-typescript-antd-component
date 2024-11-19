/* eslint-disable no-undef */
// update-readme.js
import fs from 'fs';
import path from 'path';

const version = process.argv[2];
const releaseNotes = process.argv[3];

const readmePath = path.resolve(process.cwd(), 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Update the README.md content as per your requirements.
// For example, append the release notes to the README.md.
readmeContent += `\n## Release ${version}\n\n${releaseNotes}\n`;

fs.writeFileSync(readmePath, readmeContent);
console.log(`README.md updated with release ${version}`);
