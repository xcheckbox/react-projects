import { useState, useEffect } from 'react';
import { CocktailAdapter } from '../adapter/cocktailAdapter';

export const useFetch = (url, Adapter = CocktailAdapter) => {
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
      setData(Adapter(data));
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