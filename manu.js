require('dotenv').config();
const express = require('express');
const app = express();

// Use environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
const request = require('supertest');
const app = require('./server'); // Import your Express app

test('GET /api/expenses should return a list of expenses', async () => {
  const response = await request(app).get('/api/expenses');
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('expenses');
});
