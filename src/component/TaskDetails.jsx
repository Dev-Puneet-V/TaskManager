import { useSelector } from 'react-redux';

const TaskDetails = () => {
  const selectedTask = useSelector((state) => state.task.selectedTask);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Task Details</h2>
      {selectedTask ? (
        <div style={{ padding: '10px', backgroundColor: '#f7f7f7', borderRadius: '5px' }}>
          <h3 style={{ marginBottom: '10px' }}>{selectedTask.title}</h3>
          <p>{selectedTask.description}</p>
        </div>
      ) : (
        <p>No task selected</p>
      )}
    </div>
  );
};

export default TaskDetails;
