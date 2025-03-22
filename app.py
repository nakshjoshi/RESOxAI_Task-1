from flask import Flask, request, jsonify, send_file
import torch
from TTS.api import TTS
import os

app = Flask(__name__)

# Load the pretrained TTS model
tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/synthesize', methods=['POST'])
def synthesize_text():
    data = request.json
    text = data['text']
    output_path = "output.wav"
    tts.tts_to_file(text=text, file_path=output_path)
    return send_file(output_path, mimetype="audio/wav")

if __name__ == "__main__":
    app.run(debug=True)
