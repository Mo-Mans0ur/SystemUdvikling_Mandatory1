// db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let db;

try {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT 
  });
  console.log('Database connection pool created successfully.');
} catch (error) {
  console.error('Error creating database connection pool:', error);
  throw error;
}

export default db;
