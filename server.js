const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new Database('planner.db');

app.use(cors());
app.use(express.json());

// Serve static frontend files (index.html)
app.use(express.static(__dirname));

// Initialize SQLite Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS accounts (
    username TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    passHash TEXT NOT NULL,
    isFirstAccount INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    subject TEXT,
    category TEXT,
    dueDate TEXT,
    dueTime TEXT,
    priority TEXT,
    status TEXT,
    recurring TEXT,
    notes TEXT,
    links TEXT,
    createdAt INTEGER,
    completedAt INTEGER,
    FOREIGN KEY(username) REFERENCES accounts(username)
  );

  CREATE TABLE IF NOT EXISTS exams (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    name TEXT NOT NULL,
    subject TEXT,
    examDate TEXT,
    topics TEXT,
    FOREIGN KEY(username) REFERENCES accounts(username)
  );
`);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes
app.get('/api/tasks/:username', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM tasks WHERE username = ?').all(req.params.username);
    res.json(rows.map(r => ({ ...r, links: JSON.parse(r.links || '[]') })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/tasks', (req, res) => {
  try {
    const t = req.body;
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO tasks (id, username, name, description, subject, category, dueDate, dueTime, priority, status, recurring, notes, links, createdAt, completedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(t.id, t.username, t.name, t.description, t.subject, t.category, t.dueDate, t.dueTime, t.priority, t.status, t.recurring, t.notes, JSON.stringify(t.links || []), t.createdAt, t.completedAt);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/tasks/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM tasks WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Ledger Student Planner running at http://localhost:${PORT}`);
  console.log(`💾 SQLite Database connected: planner.db\n`);
});
