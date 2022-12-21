import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);


  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setData([]);
    }
    setLoading(false);
  }

  return [
    data,
    loading,
  ]
}