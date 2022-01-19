import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>Abouth This Project</h1>
        <p>This s a React app to leave feedback</p>
        <p>Version : 2.0.0</p>
        <p>
          <Link to='/React-FeedbackApp'>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
