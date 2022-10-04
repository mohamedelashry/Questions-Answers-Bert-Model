
import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react'

function App() {
  const [sample, setSample] = useState('')
  const [scoreResult, setScoreResult] = useState('')
  const [scoreSubmitting, setScoreSubmitting] = useState(false)

  const sampleChangeHandler = (e) => setSample(e.target.value)


  const submitScore = async () => {
    setScoreSubmitting(true)
    try {
      const data = new FormData();
      data.append('sample', sample);
      const response = await axios.post('https://questions-answers-server.herokuapp.com/score', data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setScoreResult(response.data)
    } catch (error) {
      window.alert(error.message)
    }
    setScoreSubmitting(false)
  }


  const [paragraph, setParagraph] = useState("")
  const [question, setQuestion] = useState("")
  const [predictResult, setPredictResult] = useState("")
  const [predictSubmitting, setPredictSubmitting] = useState(false)

  const paragraphChangeHandler = (e) => setParagraph(e.target.value)
  const questionChangeHandler = (e) => setQuestion(e.target.value)

  const submitPredict = async () => {
    setPredictSubmitting(true)
    try {
      const data = new FormData();
      data.append('paragraph', paragraph);
      data.append('question', question);
      const response = await axios.post('https://questions-answers-server.herokuapp.com/predict', data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setPredictResult(response.data)
    } catch (error) {
      window.alert(error.message)
    }
    setPredictSubmitting(false)
  }

  return (
    <div className="App">
      <div className="float-container">
        <div className="float-child">
          <div className="row-sm-5 row-sm-offset-1">
            <h4>Enter a paragraph and a question to test BERT</h4>
            <br />
            <div className="form-group">
              <textarea onChange={paragraphChangeHandler} value={paragraph} name="paragraph" className="form-control" id="form-1" placeholder="Enter a paragraph" style={{ maxWidth: '500px', height: '350px' }} autoFocus required />
              <br />
              <input onChange={questionChangeHandler} value={question} type="text" name="question" className="form-control" id="form-1" placeholder="Enter a question" style={{ maxWidth: '300px' }} autoFocus required />
            </div>
            <button onClick={submitPredict} disabled={predictSubmitting} type="submit" id="form-1" className="btn btn-default">Predict</button>
          </div>
          <div className="row-sm-5 row-sm-offset-1">
            <h4>Question = {question}</h4>
            <h4>Answer= {predictResult?.answer}</h4>
            <h4>Score= {predictResult?.score}</h4>
          </div>
        </div>

        <div className="float-child">
          <div className="row-sm-5 row-sm-offset-1">
            <h4>Enter a Sample data with question and answer to test BERT Model</h4>
            <br />
            <div className="form-group" >
              <textarea onChange={sampleChangeHandler} value={sample} name="sample" className="form-control" id="form-1" placeholder="Enter a Sample dataset" style={{ maxWidth: '600px', height: '500px' }} autoFocus required />
            </div>
            <button onClick={submitScore} disabled={scoreSubmitting} type="submit" id="form-1" className="btn btn-default">Score</button>
            <br />
          </div>
          <div className="row-sm-5 row-sm-offset-1">
            <h4>Score = {scoreResult?.score}</h4>
          </div>
        </div>

      </div>
      <div className="row-sm-5 row-sm-offset-1">
        <p>Developed by : <a href='https://github.com/MohamedElashry1196' target="_blank" rel="noreferrer" >Mohamed Elashry</a></p>
      </div>
    </div>

  );
}

export default App;
