import {useEffect, useRef } from 'react';


const useInterval = (callback, delay) => {
  const saveCallback = useRef();
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args) => saveCallback.current(...args);

    if (delay !== null){
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  },[delay]);
};

export default useInterval;