let audioBlob = null;
let audioURL = null;
let mediaRecorder = null;
const audioPlayer = document.getElementById("audioPlayer");
const startRecordingBtn = document.getElementById("startRecording");
const stopRecordingBtn = document.getElementById("stopRecording");
const recordingStatus = document.getElementById("recordingStatus");
const audioSection = document.getElementById("audioSection");
const togglePlaybackBtn = document.getElementById("togglePlayback");
const textInput = document.getElementById("textInput");
const cloneVoiceBtn = document.getElementById("cloneVoice");
const generateSpeechBtn = document.getElementById("generateSpeech");

startRecordingBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        let chunks = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
            audioBlob = new Blob(chunks, { type: "audio/wav" });
            audioURL = URL.createObjectURL(audioBlob);
            audioPlayer.src = audioURL;
            audioSection.classList.remove("hidden");
        };

        mediaRecorder.start();
        recordingStatus.classList.remove("hidden");
        startRecordingBtn.disabled = true;
        stopRecordingBtn.disabled = false;
    } catch (error) {
        console.error("Error accessing microphone:", error);
    }
});

stopRecordingBtn.addEventListener("click", () => {
    if (mediaRecorder) {
        mediaRecorder.stop();
        recordingStatus.classList.add("hidden");
        startRecordingBtn.disabled = false;
        stopRecordingBtn.disabled = true;
    }
});

togglePlaybackBtn.addEventListener("click", () => {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
        togglePlaybackBtn.textContent = "⏸ Pause";
    } else {
        audioPlayer.pause();
        togglePlaybackBtn.textContent = "▶ Play";
    }
});

// Reset the button when audio ends
audioPlayer.addEventListener("ended", () => {
    togglePlaybackBtn.textContent = "▶ Play";
});

textInput.addEventListener("input", () => {
    const hasText = textInput.value.trim() !== "";
    cloneVoiceBtn.disabled = !hasText;
    generateSpeechBtn.disabled = !hasText;
});