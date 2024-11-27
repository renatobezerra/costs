import Message from '../../components/layout/Message/Message';
import { useLocation } from 'react-router-dom';

function ProjectList() {

  const location = useLocation();
  let message = location?.state?.message ?? 'nha';

  return (
    <div>
      <h1>Projects</h1>
      {
        message && <Message type='success' message={message}/>
      }
    </div>
  );
}

export default ProjectList;
