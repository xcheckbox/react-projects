import { useState, useEffect } from 'react'

function useTours(url) {
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
      setData(data);
    } catch (error) {
      setData(null);
    }
    setLoading(false);
  }

  const removeById = (id) => {
    const newData = data.filter( item => item.id !== id);
    setData(newData);
  }

  const refreshData = () => {
    fetchData(url);
  }

  return {
    loading,
    data,
    removeById,
    refreshData
  }
}

export default useTours;
