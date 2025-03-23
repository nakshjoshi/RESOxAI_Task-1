# Task 1: Generic Text-to-Speech

## Objective:
- Implement a TTS model that converts any given text into speech using a high-quality, generic voice.

## Requirements:
- Use an established TTS framework (e.g., Tacotron, FastSpeech, or any open-source alternative).
- Ensure the audio output is clear and natural.
- Include basic controls (play, pause, save audio).

## Approach:
We have used the Coqui TTS model, downloaded the model parameters (`.pth`) and `config.json`, and hosted it on a Flask backend. The frontend controls are implemented using HTML, CSS, and JavaScript.

---

# Model Checkpoints  
📥 Download the `.pth` file here: [Click to Download](https://drive.google.com/file/d/1GfbKO41Zb_6EhWpRzPRJZgVUJK8CuQsK/view?usp=sharing)

## Steps to Run the Flask Backend with Frontend

Follow these steps to set up and run the Flask backend with an HTML, CSS, and JavaScript frontend:

### 1. Create a Virtual Environment
```bash
python -m venv tts-env
```
Activate the virtual environment:
- **Windows**:  
  ```bash
  tts-env\Scripts\activate
  ```
- **Mac/Linux**:  
  ```bash
  source tts-env/bin/activate
  ```

### 2. Install Dependencies
Make sure you have a `requirements.txt` file that contains all necessary dependencies. Install them using:
```bash
pip install -r requirements.txt
```

### 3. Run the Flask Application
Execute the following command to start the Flask server:
```bash
python app.py
```
If your `app.py` specifies a different entry point, modify the command accordingly.

### 4. Access the Web Application
Once the Flask server is running, open your browser and go to:
```
http://localhost:5000
```
(Default Flask port is `5000`, but modify accordingly if a different port is set in `app.py`.)

### 5. Ensure Frontend is Connected
- Your frontend files are located in the `static/` directory:
  - `static/index.html` (Main HTML file)
  - `static/style.css` (CSS file for styling)
  - `static/app.js` (JavaScript file for frontend logic)
  - `static/backgroundimage.webp` (Background image file)
- Ensure `app.py` serves the correct templates by using:
  ```python
  from flask import Flask, render_template
  app = Flask(__name__, static_folder='static', template_folder='static')

  @app.route('/')
  def home():
      return render_template('index.html')
  ```

### 6. (Optional) Run in Debug Mode
For development, use:
```bash
FLASK_ENV=development flask run
```
This enables auto-reloading and debug mode.

### 7. Stop the Server
To stop the Flask server, use `Ctrl + C` in the terminal.

Your Flask backend should now be running successfully with the frontend!

---
If you face any issues, ensure:
- Python and Flask are installed correctly.
- The correct virtual environment is activated.
- Dependencies are installed properly.

Happy Coding! 🚀

