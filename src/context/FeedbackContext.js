import { v4 as uuid } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ]);

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
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
