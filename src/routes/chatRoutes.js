const express = require('express');
const router = express.Router();

const { chatWithGemini } = require('../controllers/chatController');

router.post('/', chatWithGemini); //como a rota principal é /chat isso vira post/chat

module.exports = router;    