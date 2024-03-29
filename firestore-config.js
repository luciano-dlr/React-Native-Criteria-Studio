{/* <>

    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

</> */}

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);