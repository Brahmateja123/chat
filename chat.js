const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let userCount = 0;

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const user = getUser();
    appendMessage(user, message);
    messageInput.value = '';
  }
});

function getUser() {
  userCount++;
  return `User ${userCount}`;
}

function appendMessage(user, text) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong class="user-${userCount % 2 + 1}">${user}:</strong> ${text}`;
  chatMessages.appendChild(messageElement);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

