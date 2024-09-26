// jest.config.js
import dotenv from 'dotenv';
dotenv.config();

export default {
    transform:{"^.+\\.jsx?$": "babel-jest"},
    testEnvironment: 'node',
};