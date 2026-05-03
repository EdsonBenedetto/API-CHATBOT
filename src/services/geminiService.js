const model = require('../config/gemini');

async function sendMessage(message) {

    const result = await model.generateContent(message); // envia prompt para ia

    const response = result.response.text(); // pega texto retornado

    return response;
}

module.exports = {
    sendMessage
};