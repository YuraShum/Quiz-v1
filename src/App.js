import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import questions from "./questions";

function App() {

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false)
  const question = questions[step];



  function onClickVariant(index){
    let curentAnswer = question.correct;
    if(curentAnswer === index){
      setScore(prevValue => prevValue + 1)
    }
    (step !== questions.length - 1) ? 
    setStep(prevValue => prevValue + 1):
    setFinish(true)


    
  }

  function onClickPlayAgane(){
    setFinish(prevValue => !prevValue)
    setStep(0)
    setScore(0)
  }
  

  return (
  <div className="content">
    {finish ? 
      <Result 
        onClickPlayAgane = {onClickPlayAgane}
        score = {score}
        countQuestion = {questions.length}></Result>: 
      <Game 
        question = {question} 
        onClickVariant = {onClickVariant}
        step = {step}
        countQuestion = {questions.length}
        >
      </Game>}

  </div>
  );
}


export default App;
