import useCustom from './UseHook';
import Card from './Card';

const ForwardCounter = () => {

  function forWard(){
    return(

      (prevCounter) => prevCounter + 1
    )
  }
 const counter=useCustom(forWard())

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
