import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
function Feedbackitem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='orange' />
      </button>
      <div className='text-display'>{item.text}</div>
      <p style={{ opacity: '0.3' }}>{Date()}</p>
    </Card>
  );
}

export default Feedbackitem;
