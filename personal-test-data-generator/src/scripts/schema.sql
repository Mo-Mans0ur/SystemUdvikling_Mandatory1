-- scripts/schema.sql

-- Drop 'postal_code' table if it exists
DROP TABLE IF EXISTS postal_code;

-- Create 'postal_code' table
CREATE TABLE postal_code (
  postal_code VARCHAR(10) PRIMARY KEY,
  town_name VARCHAR(100) NOT NULL
);

-- Add other table creation statements if needed
