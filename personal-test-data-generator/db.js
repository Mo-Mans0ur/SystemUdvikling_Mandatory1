import mysql from 'mysql2/promise';

// Create a connection to the database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Moha2300',
    database: 'personal_test_data'
});


afterAll(() => {
    // Close the MySQL connection pool
    db.end();
});

export default db;