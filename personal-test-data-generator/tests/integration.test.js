// tests/integration.test.js

import request from 'supertest';
import app from '../src/app.js';
import db from '../src/db.js';

describe('Integration Tests', () => {
  afterAll(async () => {
    await db.end();
  });

  test('should return a fake person with CPR, name, gender, date of birth, address, and mobile phone number', async () => {
    const res = await request(app).get('/api/person/full-info');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('surname');
    expect(res.body).toHaveProperty('cpr');
    expect(res.body).toHaveProperty('gender');
    expect(res.body).toHaveProperty('dateOfBirth');
    expect(res.body).toHaveProperty('address');
    expect(res.body).toHaveProperty('mobileNumber');

    // Verify that dateOfBirth is in 'ddmmyy' format
    const dobRegex = /^\d{6}$/; // Exactly six digits
    expect(res.body.dateOfBirth).toMatch(dobRegex);
  });
});
