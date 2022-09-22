import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

useDebounce.propTypes = {
  data: PropTypes.string,
  delay: PropTypes.number
}

export default useDebounce;
