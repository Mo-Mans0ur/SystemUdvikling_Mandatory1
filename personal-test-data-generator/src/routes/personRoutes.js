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

// New endpoint to get name and gender only
router.get('/name-gender', async (req, res) => {
  const person = getRandomPerson();
  const {firstName, surName, gender} = person;
  res.json({firstName, surName, gender});
});


// New endpoint to return name, gender and date of birth
router.get('/name-gender-dob', async (req, res) => {
  const person = getRandomPerson();
  const cpr = generateRandomCPR(person.gender);
  const dateOfBirth = extractDateOfBirthFromCPR(cpr);
  const {firstName, surName, gender} = person;
  res.json({firstName, surName, gender, dateOfBirth});

});

// New endpoint to return CPR, name and gender
router.get('/cpr-name-gender', async (req, res) => {
  const person = getRandomPerson();
  const cpr = generateRandomCPR(person.gender);
  const { firstName, surName, gender } = person;
  res.json({ cpr, firstName, surName, gender });

});

// New endpoint to return CPR, name, gender and date of birth
router.get('/cpr-name-gender-dob', async (req, res) => {
  const person = getRandomPerson();
  const cpr = generateRandomCPR(person.gender);
  const dateOfBirth = extractDateOfBirthFromCPR(cpr);
  const { firstName, surName, gender } = person;
  res.json({ cpr, firstName, surName, gender, dateOfBirth });

});

// New endpoint to return fake persons information in bulk (2 to 100 persons)
router.get('/bulk/:count', async (req, res) => {
  try {
    const count = parseInt(req.params.count, 10);
    if (isNaN(count) || count < 2 || count > 100) {
      return res.status(400).json({ error: 'Invalid count. Count must be between 2 and 100' });
    }

    const people = [];

    for (let i = 0; i < count; i++) {
      const person = getRandomPerson();
      const address = await getRandomAddress();
      const mobileNumber = await generateFakeMobileNumber();
      const cpr = generateRandomCPR(person.gender);
      const dateOfBirth = extractDateOfBirthFromCPR(cpr);

      people.push({
        ...person,
        cpr,
        dateOfBirth,
        address,
        mobileNumber
      });

    }

    res.json(people);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

// New endpoint to get full info (name, address, gender, date of birth, mobile number, and CPR)
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