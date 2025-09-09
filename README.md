# Roman Numerals Converter

This project is a technical test consisting of a simple web application that converts **integer numbers into Roman numerals**.  
It includes both a **front-end** (Vue.js + MUI) and a **back-end** (Node.js + Express).  

The project demonstrates two approaches:  
1. **AJAX request** (Step 1)  
2. **Server-Sent Events (SSE)** (Step 2)  

---

## Features
- Convert any integer between **0 and 100** into Roman numerals.  
- Step 1: Front-end form with a request to the backend (AJAX).  
- Step 2: Same functionality but using **Server-Sent Events (SSE)**.  
- Includes a reusable conversion function `toRoman()` in the backend.  

---

## Tech Stack
- **Backend**: Node.js + Express  
- **Frontend**: Vue.js + PRIME Vue  
- **Communication**: AJAX / SSE  

---

## Project Structure
```sql
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
```
---

## Git Branches
- `main` → Base project setup.  
- `step1` → Conversion with AJAX request.  
- `step2` → Conversion with Server-Sent Events (SSE).  

Each step is implemented in a separate branch for clarity.  

---

## Setup Instructions

1. **Clone the repository**:  
   ```bash
   git clone <repository-url>
   git checkout step1 # or step2 for SSE version
   ```

2. **Backend Setup**:  

    - Navigate to the `backend` directory, install dependencies
    - Create .env 
    - Start the server

    ```bash
    (.env)

    NODE_PORT=3000
    ``` 

   ```bash
    cd backend
    npm install
    npm run dev
   ```

    The backend server will run on `http://localhost:3000`.

3. **Frontend Setup**:

    - Navigate to the `frontend` directory, install dependencies
    - Create .env
    - Start the development server

    ```bash
    (.env)

    VITE_API_URL=http://localhost:3000
    ```
    
   ```bash
    cd ../frontend
    npm install
    npm run dev
   ```

    The frontend will be available at `http://localhost:5173` 
