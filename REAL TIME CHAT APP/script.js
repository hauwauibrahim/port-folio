let currentUser = 'Alice';

function selectUser(user) {
    currentUser = user;
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.innerHTML = '';
    chatMessages.scrollTop = 0;
    chatMessages.innerHTML = `<div class="message">You are chatting with ${user}</div>`;
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const chatMessages = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(currentUser.toLowerCase());
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        
        setTimeout(() => {
            const responseMessageElement = document.createElement('div');
            responseMessageElement.classList.add('message');
            responseMessageElement.classList.add(currentUser === 'Alice' ? 'bob' : 'alice');
            responseMessageElement.textContent = `${currentUser === 'Alice' ? 'Bob' : 'Alice'}: Thanks for your message!`;
            chatMessages.appendChild(responseMessageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});
