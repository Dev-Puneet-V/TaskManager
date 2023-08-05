import { useDispatch, useSelector } from 'react-redux';
import { selectTask } from '../utils/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleSelectTask = (task) => {
    dispatch(selectTask(task));
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ cursor: 'pointer', marginBottom: '5px', padding: '10px', backgroundColor: '#f7f7f7', borderRadius: '5px' }}
            onClick={() => handleSelectTask(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default TaskList;
