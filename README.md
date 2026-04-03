# ⚡ Quantum-Classical Power Grid Fault Detection 🧠

## 🚀 Overview
This project is an advanced fault detection system for power grids that combines **Classical Machine Learning** and **Quantum Machine Learning** approaches. It analyzes electrical current data to identify faults and compares the performance of both models in real-time.

---

## 🎯 Key Features

- 📂 Upload CSV data for analysis  
- ⚡ Classical ML model prediction  
- 🧠 Quantum ML model prediction  
- 🤝 Agreement percentage between models  
- 📊 Interactive data visualization (graphs & tables)  
- 🌌 Quantum-themed animated UI  

---

## 🧠 How It Works

1. User uploads a CSV file containing electrical parameters  
2. Data is preprocessed and scaled  
3. Two models run in parallel:
   - Classical Model  
   - Quantum Model  
4. Predictions are generated for each sample  
5. Agreement percentage is calculated  
6. Results are displayed with:
   - Summary metrics  
   - Row-wise comparison  
   - Graphical visualization  

---

## 🛠️ Tech Stack

### 🔹 Backend
- Django  
- Django REST Framework  
- Pandas  
- NumPy  
- Joblib  

### 🔹 Frontend
- React  
- Chart.js  
- Custom animated quantum-themed UI  

### 🔹 ML Models
- Classical ML model (trained on fault data)  
- Quantum-inspired ML model  

---

## 📊 Output Visualization

- 📋 Table showing prediction for each sample  
- 📊 Graph comparing:
  - Current values  
  - Fault vs Normal classification  
- 🎯 Agreement score between models  

---

## 📁 Project Structure

Quantum_Power_Grid_Fault_Detection/
│
├── backend/                 # Django backend
├── frontend/                # React frontend
├── models/                  # Saved ML models (.pkl)
├── .gitignore
├── README.md

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository

git clone https://github.com/Developer-R1/Quantum-Classical-Power-Grid-Fault-detection.git  
cd Quantum-Classical-Power-Grid-Fault-detection  

---

### 🔹 2. Backend Setup (Django)

cd backend  
python -m venv venv  
venv\Scripts\activate   # Windows  
pip install -r requirements.txt  
python manage.py runserver  

---

### 🔹 3. Frontend Setup (React)

cd frontend  
npm install  
npm start  

---

## 📌 API Endpoint

POST /api/predict/

### Input:
- CSV file with electrical data

### Output:
{
  "classical_predictions": [...],
  "quantum_predictions": [...],
  "agreement_percentage": XX.XX
}

---

## 💡 Use Cases

- ⚡ Power grid fault detection  
- 🔌 Electrical system monitoring  
- 🧠 Research in Quantum vs Classical ML  
- 🏭 Industrial predictive maintenance  

---

## 🔥 Future Improvements

- Real-time IoT integration  
- Live sensor data streaming  
- Advanced quantum models (Qiskit / Hybrid models)  
- Deployment on cloud  

---

## 👨‍💻 Author

Aaron D  
GitHub: https://github.com/Developer-R1  

---

## ⭐ Acknowledgements

- Open-source ML libraries  
- Research inspiration from Quantum Computing applications  

---

## 🚀 Final Note

This project demonstrates how **quantum computing concepts can be integrated with classical systems** to enhance fault detection accuracy and reliability in power systems.
