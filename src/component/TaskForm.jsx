import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '10px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
