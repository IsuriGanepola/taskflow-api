const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Sample Task', status: 'pending' }]);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  res.status(201).json({ id: 2, title, status: 'pending' });
});

module.exports = app;