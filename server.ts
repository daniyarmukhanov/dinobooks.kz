import express from 'express';
import { createServer as createViteServer } from 'vite';
import multer from 'multer';
import { google } from 'googleapis';
import stream from 'stream';
import dotenv from 'dotenv';

dotenv.config();

const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Quote request endpoint
  app.post('/api/quote', upload.single('file'), async (req, res) => {
    try {
      const { email, phone } = req.body;
      const file = req.file;

      if (!email || !phone || !file) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check for Google Drive credentials
      if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        console.warn("Google Drive credentials missing. Simulating upload for development.");
        // In a real scenario, this would fail. For the preview, we simulate success if keys are missing
        // so the user can test the UI before configuring their Google Workspace.
        return res.json({ 
          success: true, 
          simulated: true, 
          message: 'Credentials not configured. Simulated success.' 
        });
      }

      // Initialize Google Drive API
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          // Handle newline characters in the private key from env vars
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/drive.file'],
      });

      const drive = google.drive({ version: 'v3', auth });
      const bufferStream = new stream.PassThrough();
      bufferStream.end(file.buffer);

      const fileMetadata: any = {
        name: `QuoteRequest_${email}_${file.originalname}`,
      };

      // If a specific folder ID is provided, upload there
      if (process.env.GOOGLE_DRIVE_FOLDER_ID) {
        fileMetadata.parents = [process.env.GOOGLE_DRIVE_FOLDER_ID];
      }

      const response = await drive.files.create({
        requestBody: fileMetadata,
        media: {
          mimeType: file.mimetype,
          body: bufferStream,
        },
        fields: 'id',
      });

      res.json({ success: true, fileId: response.data.id });
    } catch (error: any) {
      console.error('Upload error:', error);
      res.status(500).json({ error: error.message || 'Failed to upload file to Google Drive' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
