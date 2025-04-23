# REACT NATIVE TO-DO LIST APP – SETUP & RUN GUIDE

 
**Frontend Repo:** [reactNative_Frontend](https://github.com/richiemaeomandam/reactNative_Frontend)  
**Backend Repo:** [reactNative_backend](https://github.com/richiemaeomandam/reactNative_backend)  
**Backend URL (Hosted on Render):** [https://reactnative-backend.onrender.com](https://reactnative-backend.onrender.com)

**Install the app:** [App link](https://expo.dev/accounts/richiemae/projects/todo-app/builds/cc422aa5-8461-420a-9115-9e4c66314b28)
or scan QR code to install the To-Do List ![scan_me](scan_me.png)

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
```

---

## 📦 STEP 2: INSTALL DEPENDENCIES
Install the necessary packages:

```bash
npm install
# or
yarn install
```

---

## 🔗 STEP 3: CONNECT TO THE BACKEND
Inside your React Native project, locate the file where the API URL is defined index.tsx.

Ensure the URL is set to:

```ts
const API_URL = 'https://reactnative-backend.onrender.com';
```

This connects your frontend to the deployed backend.

---

## 🟣 STEP 4: RUN THE REACT NATIVE APP

### ✅ Option 1: Using Expo
Run the following command to start the app with Expo:

```bash
npx expo start
```

A QR code will appear.

Scan it using the Expo Go app on your phone to launch the app.

### ✅ Option 2: Using React Native CLI
Make sure Android Studio is running (for emulator use).

For Android:

```bash
npx react-native run-android
```

For iOS (on Mac only):

```bash
npx react-native run-ios
```

---

## ✨ APP FEATURES
- Add, edit, delete tasks
- Mark tasks as complete/incomplete
- Filter tasks by status (All, Completed, Pending)
- Dark mode and light mode toggle 🌑🌞
- Stylish Black & Pink UI theme 🎀

---

## 🧪 STEP 5: VERIFY BACKEND COMMUNICATION
Confirm that tasks are saved and retrieved through the backend at:

🔗 [https://reactnative-backend.onrender.com/tasks](https://reactnative-backend.onrender.com/tasks)

**Note:** On first load, Render may take a few seconds to "wake up."

---

