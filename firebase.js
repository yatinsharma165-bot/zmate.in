<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBrXccirfZbk_kiQcNkbiUhxKKuWxkdI9c",
    authDomain: "zmate-affa0.firebaseapp.com",
    projectId: "zmate-affa0",
    storageBucket: "zmate-affa0.firebasestorage.app",
    messagingSenderId: "976248999877",
    appId: "1:976248999877:web:2ea572e6bbbfd2cd0b05ac",
    measurementId: "G-E25ZZLHWR9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>