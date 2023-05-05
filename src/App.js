import React, { Suspense } from "react";
import Header from "./components/Header";
import QuizApp from "./components/QuizApp";
import BMICalculator from "./components/BMICalculator";
import FormControler from "./components/FormControler";
import Home from "./components/TodoApp/Home";
import CV from "./components/CV";
import Quotes from "./components/axios/Quotes";
import Student from "./components/StudentManagement/Student";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h2>Loading Data...</h2>}>
        <Quotes />
      </Suspense>
      <Student />
      {/* <Home /> */}

      {/* <CV /> */}

      <FormControler />

      <QuizApp />

      <BMICalculator />
    </div>
  );
}

export default App;
