export function generateRandomCPR(gender) {

    // Helper function to generate a random date of birth
    function getRandomDateOfBirth() {
        const start = new Date(1900, 0, 1);
        const end = new Date();

        // Generate a random timestamp between the start and end dates
        const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());

        // Extract the day, month and year from the timestamp
        const day = String(new Date(randomTimestamp).getDate()).padStart(2, '0');
        const month = String(new Date(randomTimestamp).getMonth() + 1).padStart(2, '0');
        const year = String(new Date(randomTimestamp).getFullYear()).slice(2);

        return `${day}${month}${year}`;
    }

    // convert date from 'YYYY-MM-DD' to 'DDMMYY'
    const date = getRandomDateOfBirth();

    // generate random 4 digit number
    let randomDigits = Math.floor(1000 + Math.random() * 9000);

    // Ensure that the last digit matches gender (even for female, odd for males)
    if (gender === 'female' && randomDigits % 2 !== 0) {
        randomDigits++;
    } else if (gender === 'male' && randomDigits % 2 !== 0) {
        randomDigits--;
    }


    return `${date}-${randomDigits}`;

}