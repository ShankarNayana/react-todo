import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
