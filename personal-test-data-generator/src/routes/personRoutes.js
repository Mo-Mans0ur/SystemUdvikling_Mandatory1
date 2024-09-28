import express from 'express';
import { getRandomPerson } from '../services/personService.js';
import { getRandomAddress } from '../services/addressService.js';
import { generateFakeMobileNumber } from '../services/mobileService.js';
import { extractDateOfBirthFromCPR, generateRandomCPR } from '../services/cprService.js';

// Create a new router
const router = express.Router();

// Endpoint to get a random person
router.get('/name', (req, res) => {
    const person = getRandomPerson();
    res.json(person);
});


// endpoint to get a random address
router.get('/address', async (req, res) => {
    const address = await getRandomAddress();
    res.json(address);
});

// New endpoint to get a random mobile number
router.get('/mobile', async (req, res) => {
    const mobile = await generateFakeMobileNumber();
    res.json(mobile);
});

// New endpoint to get a random CPR number
router.get('/cpr', async (req, res) => {
    const person = getRandomPerson();
    const cpr = generateRandomCPR(person.gender);
    
    res.json({ cpr });
});

// New endpoint to get full info (name and address)
router.get('/full-info', async (req, res) => {
    const person = getRandomPerson();
    const address = await getRandomAddress();
    const mobileNumber = await generateFakeMobileNumber();
    const cpr = generateRandomCPR(person.gender);
    const dateOfBirth = extractDateOfBirthFromCPR(cpr);


    res.json({
        ...person,
        cpr,
        dateOfBirth,
        address,
        mobileNumber
    });
});


// Export the router
export default router;