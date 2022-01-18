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
    {
      id: 2,
      text: ' 2This item is from context',
      rating: 5,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //edit func
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

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
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
