# REACT NATIVE TO-DO LIST APP – SETUP & RUN GUIDE

**Student:** Richie Mae Omandam  
**Frontend Repo:** [reactNative_Frontend](https://github.com/richiemaeomandam/reactNative_Frontend)  
**Backend Repo:** [reactNative_backend](https://github.com/richiemaeomandam/reactNative_backend)  
**Backend URL (Hosted on Render):** [https://reactnative-backend.onrender.com](https://reactnative-backend.onrender.com)

---

## ✅ PREREQUISITES
Ensure the following tools are installed:

| **Tool** | **Purpose** | **Install Guide** |
| -------- | ----------- | ----------------- |
| **Node.js** | JavaScript runtime | [nodejs.org](https://nodejs.org) |
| **React Native CLI or Expo CLI** | Run React Native apps | [React Native CLI](https://reactnative.dev/docs/environment-setup) |
| **Git** | Clone GitHub repo | [git-scm.com](https://git-scm.com) |
| **Android Studio or Expo Go app** | Test the app on a device/emulator | [expo.dev](https://expo.dev) or [Android Studio](https://developer.android.com/studio) |

---

## 🧩 STEP 1: CLONE THE FRONTEND REPOSITORY
Open your terminal and run:

```bash
git clone https://github.com/richiemaeomandam/reactNative_Frontend.git
cd reactNative_Frontend

📦 STEP 2: INSTALL DEPENDENCIES
Install the necessary packages:
npm install
# or
yarn install

🔗 STEP 3: CONNECT TO THE BACKEND
Inside your React Native project, locate the file where the API URL is defined (usually App.tsx or api.ts).

Ensure the URL is set to:
const API_URL = 'https://reactnative-backend.onrender.com';

