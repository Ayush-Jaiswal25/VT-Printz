# 🚀 Deployment Guide for VT-Printz

This guide will walk you through deploying your MERN (MongoDB, Express, React, Node) stack application for **FREE** using **Vercel** (Frontend) and **Render** (Backend).

---

## 📋 Prerequisites
1.  **GitHub Account**: Your code must be pushed to GitHub.
2.  **MongoDB Atlas**: Your database is already hosted here (you have the URI in your `.env`).
3.  **Render Account**: For hosting the backend.
4.  **Vercel Account**: For hosting the frontend.

---

## 1️⃣ Prepare the Backend for Deployment

### A. Environment Variables
Your backend needs to know it's running in production.

1.  Push your latest backend code to GitHub.
2.  Go to **[Render.com](https://render.com/)** and create an account.
3.  Click **New +** -> **Web Service**.
4.  Connect your GitHub repository.
5.  **Settings**:
    *   **Name**: `vt-printz-backend`
    *   **Region**: Singapore (or closest to you)
    *   **Branch**: `main` (or your working branch `Dev_Ajay`)
    *   **Root Directory**: `VT - Printz Backend` (Important! Since your backend is in a subfolder)
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node vt-printz-backend.js`
    *   **Instance Type**: Free

6.  **Environment Variables** (Click "Advanced" or "Environment"):
    Add the keys and values from your local `.env` file:
    *   `MONGO_URI`: (Your full MongoDB connection string)
    *   `JWT_SECRET`: (e.g., `vtprintz_jwt_secret_key_123`)
    *   `CLOUDINARY_CLOUD_NAME`: ...
    *   `CLOUDINARY_API_KEY`: ...
    *   `CLOUDINARY_API_SECRET`: ...
    *   `EMAIL_USER`: ...
    *   `EMAIL_PASS`: ...

7.  **Click "Create Web Service"**.
    *   Render will start building. Once done, it will give you a **URL** (e.g., `https://vt-printz-backend.onrender.com`).
    *   **Copy this URL.** You need it for the frontend.

### B. Update CORS in Backend (Important)
Once you have your Frontend URL (from Step 2), come back to your backend code (`vt-printz-backend.js`) and add the frontend domain to the `cors` origin list, or allow all temporarily:
```javascript
app.use(cors({
    origin: '*', // For testing. Better to use specific URLs in production.
    credentials: true
}));
```

---

## 2️⃣ Prepare the Frontend for Deployment

You have many "hardcoded" `http://localhost:5000` URLs in your frontend code. You need to make this dynamic so it works locally AND on the cloud.

### A. Create Environment Variable
1.  In your **Frontend** folder (`VT - Printz Frontend`), create a file named `.env` locally (if not exists).
2.  Add:
    ```
    VITE_API_URL=http://localhost:5000
    ```
3.  **Find and Replace** in your code:
    Replace all instances of `"http://localhost:5000"` with `import.meta.env.VITE_API_URL`.

    *Example Change:*
    ```javascript
    // OLD
    axios.get("http://localhost:5000/api/cart/get")

    // NEW
    axios.get(`${import.meta.env.VITE_API_URL}/api/cart/get`)
    ```

### B. Deploy to Vercel
1.  Push these changes to GitHub.
2.  Go to **[Vercel.com](https://vercel.com/)** and login.
3.  Click **"Add New..."** -> **Project**.
4.  Import your GitHub repository.
5.  **Configure Project**:
    *   **Root Directory**: Click "Edit" and select `VT - Printz Frontend`.
    *   **Framework Preset**: Vite (should detect automatically).
    *   **Environment Variables**:
        *   `VITE_API_URL`: **PASTE YOUR RENDER BACKEND URL HERE** (e.g., `https://vt-printz-backend.onrender.com`).
        *   (Do NOT add a trailing slash `/` at the end).

6.  **Click "Deploy"**.

---

## 3️⃣ Final Configuration (Connecting them)

1.  **Frontend**: Once Vercel finishes, you will get a domain like `https://vt-printz-frontend.vercel.app`.
2.  **Backend**: Go back to your **Render** dashboard -> Environment Variables.
    *   Update `CORS_ORIGIN` or the allowed origins in `vt-printz-backend.js` to include your new Vercel domain.
3.  **Database**: Go to **MongoDB Atlas** -> Network Access.
    *   Ensure IP Access List includes `0.0.0.0/0` (Allow Access from Anywhere) so Render can connect.

---

## ✅ Summary

*   **Render** hosts your Node.js Backend (Free Tier spins down after 15 mins of inactivity - slow first request).
*   **Vercel** hosts your React Frontend (Fast CDN).
*   **MongoDB Atlas** hosts your data.

Your app will now be live on the internet! 🌍
