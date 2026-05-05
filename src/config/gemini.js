const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Le variaveis do .env

const model = genAI.getGenerativeModel({
    model: 'gemini-3.0-flash'
}); // seleciona o modelo IA

module.exports = model;     