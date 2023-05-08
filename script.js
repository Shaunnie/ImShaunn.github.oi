// Get the elements
const confessionInput = document.getElementById('confession-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.querySelector('.messages');

// Send button click event handler
sendButton.addEventListener('click', () => {
  const message = confessionInput.value;
  if (message) {
    addMessage(message, 'sent');
    confessionInput.value = '';
  }
});

// Function to add a new message
function addMessage(message, type) {
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', type);
  newMessage.innerHTML = `
    <p>${message}</p>
    <span class="time">${getTime()}</span>
  `;
  messagesContainer.appendChild(newMessage);
}

// Function to get the current time
function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
