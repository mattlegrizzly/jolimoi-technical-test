# Roman Numerals Converter

This project is a technical test consisting of a simple web application that converts **integer numbers into Roman numerals**.  
It includes both a **front-end** (Vue.js + MUI) and a **back-end** (Node.js + Express).  

The project demonstrates two approaches:  
1. **AJAX request** (Step 1)  
2. **Server-Sent Events (SSE)** (Step 2)  

---

## 🚀 Features
- Convert any integer between **0 and 100** into Roman numerals.  
- Step 1: Front-end form with a request to the backend (AJAX).  
- Step 2: Same functionality but using **Server-Sent Events (SSE)**.  
- Includes a reusable conversion function `toRoman()` in the backend.  

---

## 🛠 Tech Stack
- **Backend**: Node.js + Express  
- **Frontend**: Vue.js + PRIME Vue  
- **Communication**: AJAX / SSE  

---

## 📂 Project Structure
jolimoi-technical-test/
│── backend/
│ ├── roman.js # Roman numeral conversion function
│ ├── server.js # Express server (API + SSE)
│ └── package.json
│
│── frontend/
│ ├── src/
│ │ ├── App.vue # Main Vue component
│ │ └── components/ # Form + result components
│ ├── package.json
│ └── vite.config.js # or webpack config
│
│── README.md
---

## 🔀 Git Branches
- `main` → Base project setup.  
- `step1` → Conversion with AJAX request.  
- `step2` → Conversion with Server-Sent Events (SSE).  

Each step is implemented in a separate branch for clarity.  

---