📱 React Native To-Do List App – Setup & Run Guide
Student: Richie Mae Omandam
Frontend Repo: reactNative_Frontend
Backend Repo: reactNative_backend
Backend URL (Hosted on Render): https://reactnative-backend.onrender.com

✅ Prerequisites
Ensure the following tools are installed:


Tool	Purpose	Install Guide
Node.js	JavaScript runtime	nodejs.org
React Native CLI or Expo CLI	Run React Native apps	React Native
Git	Clone GitHub repo	git-scm.com
Android Studio or Expo Go app	Test the app on a device/emulator	expo.dev or Android Studio
🧩 Step 1: Clone the Frontend Repository
Open your terminal and run:

bash
Copy
Edit
git clone https://github.com/richiemaeomandam/reactNative_Frontend.git
cd reactNative_Frontend
📦 Step 2: Install Dependencies
Install the necessary packages:

bash
Copy
Edit
npm install
# or
yarn install
🔗 Step 3: Connect to the Backend
Inside your React Native project, locate the file where the API URL is defined (usually App.tsx or api.ts).

Ensure the URL is set to:

ts
Copy
Edit
const API_URL = 'https://reactnative-backend.onrender.com';
✅ This connects your frontend to the deployed backend.

🟣 Step 4: Run the React Native App
✅ Option 1: Using Expo
bash
Copy
Edit
npx expo start
A QR code will appear.

Scan it using the Expo Go app on your phone to launch the app.

✅ Option 2: Using React Native CLI
Make sure Android Studio is running (for emulator use).

bash
Copy
Edit
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS (on Mac only)
✨ App Features
Add, edit, delete tasks

Mark tasks as complete/incomplete

Filter tasks by status (All, Completed, Pending)

Dark mode and light mode toggle 🌑🌞

Stylish Black & Pink UI theme 🎀

🧪 Step 5: Verify Backend Communication
Confirm that tasks are saved and retrieved through the backend at:

🔗 https://reactnative-backend.onrender.com

Note: On first load, Render may take a few seconds to “wake up.”

🧼 Optional: Clean Up for Submission
✅ Double-check your UI

✅ Confirm all features work

✅ Push any final updates to your GitHub repos
