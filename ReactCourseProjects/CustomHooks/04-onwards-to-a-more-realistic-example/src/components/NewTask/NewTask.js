

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHook from '../Hooks/useHook';
const NewTask = (props) => {

  const {isLoading,error,fetchTasks:addItem} =useHook()
  
 
  const enterTaskHandler = async (taskText) => {
    function itemAdd(data){
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
     }
      addItem({url:'https://react-practice-ea36d-default-rtdb.firebaseio.com/tasks.json',method: 'POST',body:{ text: taskText },headers:{
        'Content-Type': 'application/json',
      }},itemAdd)
    
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
