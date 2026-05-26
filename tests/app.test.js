const request = require('supertest');
const app = require('../src/app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /tasks returns array', async () => {
  const res = await request(app).get('/tasks');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('POST /tasks creates task', async () => {
  const res = await request(app).post('/tasks').send({ title: 'New Task' });
  expect(res.statusCode).toBe(201);
});

test('POST /tasks fails without title', async () => {
  const res = await request(app).post('/tasks').send({});
  expect(res.statusCode).toBe(400);
});