import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const files = [
  {
    localPath: path.join(process.env.HOME, 'Downloads', 'Complete-Quran-Made-Simple ( version 1 - simplified ).pdf'),
    blobName: 'simple-quran-v1.pdf'
  },
  {
    localPath: path.join(process.env.HOME, 'Downloads', 'Holy Quran made illustrated ( version 2 - illustrated ).pdf'),
    blobName: 'simple-quran-v2.pdf'
  }
];

async function uploadFiles() {
  console.log('Starting upload to Vercel Blob...\n');

  for (const file of files) {
    try {
      console.log(`Uploading: ${file.blobName}`);
      console.log(`From: ${file.localPath}`);

      // Check if file exists
      if (!fs.existsSync(file.localPath)) {
        console.error(`❌ File not found: ${file.localPath}\n`);
        continue;
      }

      // Get file size
      const stats = fs.statSync(file.localPath);
      console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

      // Read file
      const fileBuffer = fs.readFileSync(file.localPath);

      // Upload to Vercel Blob
      const blob = await put(file.blobName, fileBuffer, {
        access: 'public',
        addRandomSuffix: false,
      });

      console.log(`✅ Uploaded successfully!`);
      console.log(`URL: ${blob.url}\n`);

      // Save URL for later use
      console.log(`Add this to your .env:`);
      if (file.blobName.includes('v1')) {
        console.log(`EBOOK_DOWNLOAD_LINK_V1=${blob.url}`);
      } else {
        console.log(`EBOOK_DOWNLOAD_LINK_V2=${blob.url}`);
      }
      console.log('\n---\n');

    } catch (error) {
      console.error(`❌ Error uploading ${file.blobName}:`, error.message);
      console.log('\n---\n');
    }
  }

  console.log('Upload process completed!');
}

uploadFiles().catch(console.error);
