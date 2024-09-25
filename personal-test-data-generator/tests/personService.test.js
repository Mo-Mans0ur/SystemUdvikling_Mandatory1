// test/personService.test.js

import { getRandomPerson } from '../services/personService.js';
import { getRandomAddress } from '../services/addressService.js';
import { generateFakeMobileNumber } from '../services/mobileService.js';
import { generateRandomCPR } from '../services/cprService.js';

test('should return a random person with name and gender', () => {
    const person = getRandomPerson();
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('gender');
});

test('should return a random address with street, townName, and postal code', async () => {
    const address = await getRandomAddress();
    expect(address).toHaveProperty('street');
    expect(address).toHaveProperty('number');
    expect(address).toHaveProperty('floor');
    expect(address).toHaveProperty('door');
    expect(address).toHaveProperty('townName');
    expect(address).toHaveProperty('postal_code');
});

test('should return a random mobile number', async () => {
    const mobile = await generateFakeMobileNumber();
    expect(mobile).toMatch(/^\d{8}$/);
});

test('should return a random CPR number', async () => {
    const person = getRandomPerson();
    const cpr = generateRandomCPR(person.gender);
    expect(cpr).toMatch(/^\d{6}-\d{4}$/);
});