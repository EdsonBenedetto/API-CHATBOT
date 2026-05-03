require('dotenv').config();
const app = require('./src/app');

console.log(process.env.GEMINI_API_KEY);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});