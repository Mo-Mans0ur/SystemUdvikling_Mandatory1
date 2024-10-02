import fs from 'fs';
import { generateFakeMobileNumber } from '../services/mobileService.js';


// Read the person-names.json file and parse it into a JSON object
const rawData = fs.readFileSync('src/data/person-names.json', 'utf8');
const persons = JSON.parse(rawData).persons;

// Export a function that returns a random person name
export function getRandomPerson() {
  const randomIndex = Math.floor(Math.random() * persons.length);
  const person = persons[randomIndex];

  const mobileNumber = generateFakeMobileNumber();

  return {
    ...person,
    mobileNumber
  };

}