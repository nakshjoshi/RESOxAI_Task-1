function synthesizeText() {
    const text = document.getElementById('text-input').value;
    fetch('/synthesize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = url;
        audioPlayer.load();
        audioPlayer.play();
    })
    .catch(error => console.error('Error:', error));
}