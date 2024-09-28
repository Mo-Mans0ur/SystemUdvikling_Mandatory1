// test/api.test.js

import request from 'supertest';
import db from '../src/db.js';
import app from '../src/app.js';

let server;

beforeAll((done) => {
    // Start the server before the tests
    server = app.listen(10000);
    console.log('server started');
    done();
});


afterAll((done) => {
    // Stop the server after the tests
    server.close(done);
    console.log('server closed');
});

test('should return a random persons information', async () => {
    const res = await request(app).get('/api/person/full-info');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('address');
    expect(res.body).toHaveProperty('cpr');
    expect(res.body).toHaveProperty('mobileNumber');
    
});

afterAll(async () => {
    // Close the database connection pool
    await db.end();
  });