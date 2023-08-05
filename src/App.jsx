import { Provider } from 'react-redux';
import TaskList from './component/TaskList';
import TaskDetails from './component/TaskDetails';
import TaskForm from './component/TaskForm';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Task Manager</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
          <div>
            <TaskList />
          </div>
          <div>
            <TaskDetails />
            <TaskForm />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
