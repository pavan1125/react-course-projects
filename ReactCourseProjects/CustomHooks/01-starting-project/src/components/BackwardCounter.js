import useCustom from './UseHook';
import Card from './Card';

const BackwardCounter = () => {

  function backWard(){
    return(

      (prevCounter) => prevCounter - 1
    )
  }
   const counter=useCustom(backWard())
  
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
