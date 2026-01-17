# Secondary Protein Structure Prediction – Frontend

This is the frontend interface for my **Secondary Protein Structure Prediction** project.  
It provides a simple web UI where users can input a protein sequence and obtain **SST8 and SST3 predictions** along with confidence scores using a deep learning inference API.

The frontend communicates with a FastAPI-based backend that serves the trained models via a containerized inference API.

---

## 🔗 Live Demo
👉 **Live Application:**  
https://secondary-protein-structure-prediction.onrender.com

---

## 🐳 Backend & Inference API
The inference API is fully containerized and deployed separately.

- **Docker Image:**  
[Docker image](https://hub.docker.com/repository/docker/alokm7/protein3-api/general) .

---

## 📌 Notes
- The backend runs on Render’s free tier and may take **1–2 minutes to wake up** if idle.
- This frontend is intentionally lightweight and framework-free for clarity and ease of deployment.

---

## 📄 Related Work
I have written a detailed technical article explaining the models, experiments, and results behind this project:

👉 **Medium Article:** *(https://medium.com/@manawatalok/secondary-protein-structure-prediction-067fb76c4785)* . 

---

## 🎓 Disclaimer
This project was built **for learning and academic purposes** as part of my  
**IIT Madras BS Degree in Data Science**.
