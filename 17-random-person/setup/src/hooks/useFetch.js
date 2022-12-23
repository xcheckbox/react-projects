import { useState, useEffect } from 'react';
import { PersonAdapter } from '../adapter/person-adapter';

export const useFetch = (url) => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);


  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(PersonAdapter(data));
    } catch (error) {
      setData(null);
    }
    setLoading(false);
  }

  return [
    data,
    loading,
    fetchData
  ]
}