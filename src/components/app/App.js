import React from "react";
import BookRecommendationAI from "../BookRecommendation/BookRecommendationAI";
import TravelingPlannerAI from "../TravelingPlanner/TravelingPlannerAI";
import GamingSuggestorAI from "../GamingRecommendation/GamingRecommendationAI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sections from "../sections/sections";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <BookDescriptionGenerator /> */}
          <Route path="*" element={<Sections />} />
          <Route
            path="/BookRecommendationAI"
            element={<BookRecommendationAI />}
          />
          <Route path="/TravelingPlannerAI" element={<TravelingPlannerAI />} />
          <Route path="/GamingSuggestorAI" element={<GamingSuggestorAI />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
