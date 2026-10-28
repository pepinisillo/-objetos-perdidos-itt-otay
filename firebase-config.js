// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOJ8FdSaFkA8jfBvkf67apN1SbBxN8ofw",
  authDomain: "objetos-perdidos-itt-otay.firebaseapp.com",
  projectId: "objetos-perdidos-itt-otay",
  storageBucket: "objetos-perdidos-itt-otay.firebasestorage.app",
  messagingSenderId: "77122988967",
  appId: "1:77122988967:web:66b5a4a8842db8fd5da482",
  measurementId: "G-127JERQH5M"
};

// Exportar la configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
} else {
  window.firebaseConfig = firebaseConfig;
}
