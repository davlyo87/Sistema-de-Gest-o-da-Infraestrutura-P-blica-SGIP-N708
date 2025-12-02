const request = require('supertest');
const app = require('../src/app');


describe('API Tickets - smoke', () => {
it('GET / should respond 200', async () => {
const res = await request(app).get('/');
expect(res.statusCode).toBe(200);
expect(res.body.ok).toBe(true);
});
});