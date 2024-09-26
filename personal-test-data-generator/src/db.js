// db.js

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection to the database
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Moha2300',
    database: process.env.DB_NAME || 'personal_test_data',
    port: process.env.DB_PORT || 3306,
});

console.log("Connecting to DB:", process.env.DB_NAME);


afterAll(() => {
    // Close the MySQL connection pool
    db.end();
});

export default db;