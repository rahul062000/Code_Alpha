import React, { useEffect, useState } from 'react';
import SurveyPage from './components/SurveyPage';
import Basic from './components/Basic';
import { BrowserRouter, Routes ,Route  } from 'react-router-dom';
import Additional from './components/Additional';
import EnteredDetails from './components/EnterDetails';
import ThankYouPage from './components/ThankYouPage';



function App() {
  const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
  const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {};

  const [basicData, setBasicData] = useState(initBasicData);
  const [questionData, setQuestionData] = useState(initQuestionsData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);

  const addBasicData = (name,last, email, contact) => {
    const myBasicData = {
      name: name,
      last: last,
      email: email,
      contact: contact
    };
    setBasicData(myBasicData);
    localStorage.setItem("data", JSON.stringify(myBasicData));
    console.log(myBasicData);
  }

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = {
      profession: profession,
      interest: interest,
      reference: reference
    };
  
   
    setQuestionData(myQuestionData);
    localStorage.setItem("questiondata", JSON.stringify(myQuestionData));
    console.log(setQuestionData);
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Basic addBasicData={addBasicData}/>} />
    <Route path='/question' element={<Additional addQuestionData={addQuestionData} basicData={basicData}/>}/>
    <Route
          path='/details'
          element={<EnteredDetails data={basicData} questiondData={questionData} />}
        />
         <Route
          path='/thanks'
          element={<ThankYouPage />}
        />
</Routes>
    </BrowserRouter>
  );
}

export default App;
