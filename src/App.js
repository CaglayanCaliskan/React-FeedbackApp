import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/shared/Card';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

////////

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  //delete func
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete=?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add func

  const addFeedback = (newFeedback) => {
    // npm i uuid and import it
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
