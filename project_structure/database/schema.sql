CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TEXT
);


CREATE TABLE tickets (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
title VARCHAR(200) NOT NULL,
description TEXT,
status VARCHAR(30) DEFAULT 'open', -- open, in_progress, resolved, rejected
latitude DOUBLE PRECISION NOT NULL,
longitude DOUBLE PRECISION NOT NULL,
address VARCHAR(300),
media_urls TEXT[], -- array of URLs (images)
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now()
);


-- Índice geoespacial simples (não-postgis): índice em lat/lon
CREATE INDEX idx_tickets_lat ON tickets(latitude);
CREATE INDEX idx_tickets_lng ON tickets(longitude);