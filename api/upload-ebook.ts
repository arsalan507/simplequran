import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // This endpoint is for local testing/manual upload
    // You should disable this in production or add authentication

    const { filePath, fileName } = req.query;

    if (!filePath || !fileName) {
      return res.status(400).json({
        error: 'Missing filePath or fileName in query params'
      });
    }

    // Read the file from local system
    const fileBuffer = fs.readFileSync(filePath as string);

    // Upload to Vercel Blob
    const blob = await put(fileName as string, fileBuffer, {
      access: 'public',
      addRandomSuffix: false,
    });

    return res.status(200).json({
      success: true,
      url: blob.url,
      fileName: fileName,
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message });
  }
}
