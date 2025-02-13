function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');
    envelope.style.transform = 'scale(1.1)';
    setTimeout(() => {
        envelope.classList.add('hidden'); // Hide the envelope
        message.classList.remove('hidden'); // Show the message
    }, 300); // Wait for the scale transition to finish
}
