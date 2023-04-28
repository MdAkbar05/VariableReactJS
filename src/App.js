import React from "react";
import Header from "./components/Header";
import QuizApp from "./components/QuizApp";
import BMICalculator from "./components/BMICalculator";
import FormControler from "./components/FormControler";
import Home from "./components/TodoApp/Home";
import CV from "./components/CV";



function App() {
  return (
    <div className="App">

      <Header />
      <Home />
    
      <CV />

      <FormControler />

      <QuizApp />

      <BMICalculator /> 

    </div>
  );
}

export default App;
