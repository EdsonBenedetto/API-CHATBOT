const { sendMessage } = require  ('../services/geminiService');

async function chatWithGemini(req, res) {
    try {
        const { message } = req.body; // recebe 'Oi IA'

        if (!message) {
            return res.status(400).json({
                error: 'Mensagem obrigatória'
            });
        }

        const response = await sendMessage(message); // envia msg para o gemine

        res.json({
            reply: response
        });  // devolve a resposta

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: 'Erro ao conversar com Gemini'
        });
    }
}

module.exports = {
    chatWithGemini
};