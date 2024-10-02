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


test('should return bulk persons information', async () => {
    const count = 5;
    const res = await request(app).get(`/api/person/bulk/${count}`).expect(200).expect('Content-Type', /json/);

    expect(res.body.length).toBe(count);
    res.body.forEach((person) => {
        expect(person).toHaveProperty('name');
        expect(person).toHaveProperty('address');
        expect(person).toHaveProperty('cpr');
        expect(person).toHaveProperty('mobileNumber');
    });
});

test('should return error for invalid bulk count', async () => {
    const res = await request(app)
    .get('/api/person/bulk/1').expect(400);

    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('Invalid count. Count must be between 2 and 100');
});

afterAll(async () => {
    // Close the database connection pool
    await db.end();
  });