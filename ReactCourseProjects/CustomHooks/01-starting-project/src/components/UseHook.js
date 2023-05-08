import {useState,useEffect} from "react";
export default function useCustom(func){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(func);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [func]);
   return counter  
}