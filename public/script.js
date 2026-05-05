const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const sendButton = document.getElementById('sendButton');

function addMessage(content, type) {
    const message = document.createElement('article');
    message.className = `message ${type}-message`;

    const avatar = document.createElement('span');
    avatar.className = 'avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = type === 'user' ? 'V' : type === 'error' ? '!' : 'G';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const author = document.createElement('span');
    author.className = 'message-author';
    author.textContent = type === 'user' ? 'Você' : type === 'error' ? 'Sistema' : 'Gemini';

    const text = document.createElement('p');
    text.textContent = content;

    bubble.append(author, text);
    message.append(avatar, bubble);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;

    return message;
}

function autoResizeInput() {
    messageInput.style.height = 'auto';
    messageInput.style.height = `${messageInput.scrollHeight}px`;
}

async function sendMessage(message) {
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Não foi possível enviar a mensagem.');
    }

    return data.reply;
}

messageInput.addEventListener('input', autoResizeInput);

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        chatForm.requestSubmit();
    }
});

chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const message = messageInput.value.trim();

    if (!message) {
        return;
    }

    addMessage(message, 'user');
    messageInput.value = '';
    autoResizeInput();
    sendButton.disabled = true;
    sendButton.querySelector('span').textContent = 'Enviando';

    const typingMessage = addMessage('Pensando...', 'bot');
    typingMessage.classList.add('typing');

    try {
        const reply = await sendMessage(message);
        typingMessage.remove();
        addMessage(reply, 'bot');
    } catch (error) {
        typingMessage.remove();
        addMessage(error.message, 'error');
    } finally {
        sendButton.disabled = false;
        sendButton.querySelector('span').textContent = 'Enviar';
        messageInput.focus();
    }
});
