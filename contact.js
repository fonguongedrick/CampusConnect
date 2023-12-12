const messageButton = document.getElementById('messageButton');
const popup = document.getElementById('popup');

messageButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

function closePopup() {
  popup.style.display = 'none';
}