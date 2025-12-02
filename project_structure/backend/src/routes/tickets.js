const express = require('express');
const multer = require('multer');
const { authMiddleware } = require('../middleware/auth');
const db = require('../utils/db');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

// ===============================
// CREATE TICKET
// ===============================
router.post('/', authMiddleware, upload.array('media', 5), async (req, res) => {
  const { title, description, latitude, longitude, address } = req.body;

  if (!title || !latitude || !longitude) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const media_urls = (req.files || []).map(f => `/uploads/${f.filename}`);

  const result = await db.query(
    `INSERT INTO tickets(user_id,title,description,latitude,longitude,address,media_urls)
     VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
    [req.user.id, title, description, latitude, longitude, address, media_urls]
  );

  res.status(201).json(result.rows[0]);
});

// ===============================
// LIST TICKETS
// ===============================
router.get('/', async (req, res) => {
  const { near_lat, near_lng, radius_km } = req.query;

  // Optional geospatial filter
  if (near_lat && near_lng && radius_km) {
    const r = parseFloat(radius_km) / 111; // simple degree approximation

    const minLat = parseFloat(near_lat) - r;
    const maxLat = parseFloat(near_lat) + r;
    const minLng = parseFloat(near_lng) - r;
    const maxLng = parseFloat(near_lng) + r;

    const result = await db.query(
      'SELECT * FROM tickets WHERE latitude BETWEEN $1 AND $2 AND longitude BETWEEN $3 AND $4',
      [minLat, maxLat, minLng, maxLng]
    );

    return res.json(result.rows);
  }

  // Default list
  const result = await db.query(
    'SELECT * FROM tickets ORDER BY created_at DESC LIMIT 100'
  );

  res.json(result.rows);
});

// ===============================
// GET ONE TICKET
// ===============================
router.get('/:id', async (req, res) => {
  const r = await db.query('SELECT * FROM tickets WHERE id=$1', [req.params.id]);

  if (!r.rows[0]) return res.status(404).json({ error: 'Not found' });

  res.json(r.rows[0]);
});

// ===============================
// UPDATE STATUS (operator/admin)
// ===============================
router.put('/:id/status', authMiddleware, async (req, res) => {
  const { status } = req.body;

  const allowed = ['open', 'in_progress', 'resolved', 'rejected'];
  if (!allowed.includes(status))
    return res.status(400).json({ error: 'Invalid status' });

  if (!['operator', 'admin'].includes(req.user.role))
    return res.status(403).json({ error: 'Forbidden' });

  const r = await db.query(
    'UPDATE tickets SET status=$1, updated_at=now() WHERE id=$2 RETURNING *',
    [status, req.params.id]
  );

  res.json(r.rows[0]);
});

module.exports = router;
