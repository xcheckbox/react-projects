import { useState } from 'react';

export const useFetch = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.Response === "True") {
        setData(data.Search || data);
        setError(null);
      } else {
        setError(data.Error)
      }
    } catch (error) {
      setData([]);
    }
    setLoading(false);
  }

  return [
    data,
    loading,
    error,
    fetchData
  ]
}