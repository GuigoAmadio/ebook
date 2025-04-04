import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import Checkout from "./pages/checkout.jsx";
import Quiz from "./pages/quiz.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  );
}
