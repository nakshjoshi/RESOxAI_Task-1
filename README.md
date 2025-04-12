# **Kode Kurrent Hackathon – KodeX103 Task 1**  
## **Task 1: Generic Text-to-Speech (TTS) System**  

### **Objective**  
Develop a **Generic Text-to-Speech (TTS) system** that converts any given text into speech using a **high-quality, natural voice**.  

### **Requirements**  
- Utilize an open-source TTS framework (e.g., **Coqui TTS, Tacotron, or FastSpeech**).  
- Ensure **clear and natural** audio output.  
- Include **basic audio controls** (play, pause, save).  

---

## **Approach**  
We have used the **Coqui TTS model**, downloaded the **model parameters (.pth)** and **config.json**, and hosted the backend using **Flask**. The **frontend** is built using **HTML, CSS, and JavaScript**.  

![System Design](https://github.com/nakshjoshi/RESOxAI_Task-1/blob/main/System_Design.png)





---

# **Model Checkpoints**  
👝 **Download the pre-trained model:**  
[Click Here](https://drive.google.com/file/d/1GfbKO41Zb_6EhWpRzPRJZgVUJK8CuQsK/view?usp=sharing)  

---

## **System Architecture**  
The project consists of:  
- **Backend:** Flask-based API for processing text input and generating speech.  
- **TTS Model:** Coqui TTS (with `.pth` weights and `config.json` settings).  
- **Frontend:** HTML, CSS, and JavaScript interface for user interaction.  
- **Audio Processing:** Converts text into speech audio files with controls (play, pause, save).  

---

## **Installation & Setup**  

### **1. Clone the Repository**  
```bash  
git clone https://github.com/nakshjoshi/RESOxAI_Task-1  
cd RESOxAI_Task-1  
```

### **2. Create a Virtual Environment**  
```bash  
python -m venv tts-env  
```

#### **Activate the Virtual Environment**  
- **Windows:**  
  ```bash  
  tts-env\Scripts\activate  
  ```
- **Mac/Linux:**  
  ```bash  
  source tts-env/bin/activate  
  ```

---

### **3. Install Dependencies**  
Ensure you have a `requirements.txt` file, then install dependencies:  
```bash  
pip install -r requirements.txt  
```

---

### **4. Run the Flask Application**  
```bash  
python app.py  
```
(Modify if your `app.py` specifies a different entry point.)  

---

### **5. Access the Web Application**  
Once the Flask server is running, open your browser and go to:  

http://localhost:5000  

(Default Flask port is **5000**. Modify if needed.)  

---



### **6. Stop the Server**  
To stop the Flask server, use:  
```bash  
Ctrl + C  
```

---

## **Troubleshooting**  
If you face any issues, check:  
✅ **Python and Flask** are installed correctly.  
✅ The correct **virtual environment** is activated.  
✅ Dependencies are **installed properly**.  

---

## **License**  
This project is open-source and can be modified as needed.  

---

