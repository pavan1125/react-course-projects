import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHook from './components/Hooks/useHook';
function App() {
  const [tasks, setTasks] = useState([]);
  const {isLoading,error,fetchTasks}= useHook();
  
  const addData=React.useCallback((data)=>{
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  },[])

  useEffect(() => {
    
    fetchTasks({ url: 'https://react-practice-ea36d-default-rtdb.firebaseio.com/tasks.json' },addData);
  }, [fetchTasks,addData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
