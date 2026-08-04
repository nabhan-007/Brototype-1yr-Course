/**
 * Session 9: File Uploads with Multer
 * 
 * Run: node 09-file-uploads.js
 * Then open: http://localhost:3000
 * 
 * Prerequisites: npm install multer express
 * Make sure 'uploads/' folder exists (created automatically)
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// ============================================
// 1. CREATE UPLOADS FOLDER IF IT DOESN'T EXIST
// ============================================
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// ============================================
// 2. CONFIGURE STORAGE ENGINE
// ============================================
const storage = multer.diskStorage({
  // Where to save the file
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // What to name the file (unique name to avoid conflicts)
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

// ============================================
// 3. FILE FILTER — Only allow images
// ============================================
const imageFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);  // Accept
  } else {
    cb(new Error('Only JPEG, PNG, and GIF images are allowed!'), false);  // Reject
  }
};

// ============================================
// 4. CREATE UPLOAD MIDDLEWARE
// ============================================
const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5 * 1024 * 1024  // 5MB max
  }
});

// ============================================
// 5. SERVE AN HTML FORM (for testing)
// ============================================
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>File Upload Demo</title></head>
    <body>
      <h1>Upload a File</h1>
      
      <h2>Single File Upload</h2>
      <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="avatar" accept="image/*" />
        <button type="submit">Upload Single</button>
      </form>
      
      <h2>Multiple File Upload (max 3)</h2>
      <form action="/upload-multiple" method="POST" enctype="multipart/form-data">
        <input type="file" name="photos" accept="image/*" multiple />
        <button type="submit">Upload Multiple</button>
      </form>
    </body>
    </html>
  `);
});

// ============================================
// 6. SINGLE FILE UPLOAD ROUTE
// ============================================
// upload.single('avatar') = middleware that processes 1 file from input name="avatar"
app.post('/upload', upload.single('avatar'), (req, res) => {
  // Check if file exists
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
  }

  // File info is in req.file
  res.json({
    message: 'File uploaded successfully!',
    file: {
      originalName: req.file.originalname,
      savedAs: req.file.filename,
      size: req.file.size + ' bytes',
      mimeType: req.file.mimetype,
      path: req.file.path
    }
  });
});

// ============================================
// 7. MULTIPLE FILE UPLOAD ROUTE
// ============================================
// upload.array('photos', 3) = middleware that processes up to 3 files from input name="photos"
app.post('/upload-multiple', upload.array('photos', 3), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded.' });
  }

  // Files info is in req.files (array)
  const fileInfo = req.files.map(file => ({
    originalName: file.originalname,
    savedAs: file.filename,
    size: file.size + ' bytes'
  }));

  res.json({
    message: `${req.files.length} files uploaded successfully!`,
    files: fileInfo
  });
});

// ============================================
// 8. ERROR HANDLING FOR MULTER
// ============================================
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific errors (e.g., file too large)
    return res.status(400).json({ error: 'Upload error: ' + err.message });
  }
  if (err) {
    // Our custom errors (e.g., wrong file type)
    return res.status(400).json({ error: err.message });
  }
  next();
});

// ============================================
// 9. START SERVER
// ============================================
app.listen(3000, () => {
  console.log('File Upload Server running at http://localhost:3000');
  console.log('Open the URL in your browser to test uploads.');
});
