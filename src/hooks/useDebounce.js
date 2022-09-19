import { useState, useEffect } from "react";

function useDebounce(data, delay) {
  const [debounceValue, setDebounceValue] = useState(data);

  useEffect(() => {
    const handleDelay = setTimeout(() => {
      setDebounceValue(data)
    }, delay);
    return () => {clearTimeout(handleDelay)}
  }, [data]);

  return debounceValue
}

export default useDebounce;
