import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);
  return (
    <Router>
      <div>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="all"
                country="in"
              />
            }
          />
          <Route
            path="/us"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="us"
                country="us"
              />
            }
          />
          <Route
            path="/business"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsContainer
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
