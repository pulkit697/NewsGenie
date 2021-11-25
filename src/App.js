import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  constructor() {
    super();
    this.state = {
      progress: 10,
    };
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <NewsContainer
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="all"
                  country="in"
                />
              }
            />
            <Route
              path="/us"
              element={
                <NewsContainer
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="us"
                  country="us"
                />
              }
            />
            <Route
              path="/business"
              element={
                <NewsContainer
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
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
  }
}
