import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

createRoot(document.getElementById("root")!).render(<App />);
