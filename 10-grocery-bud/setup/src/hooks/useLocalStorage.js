import React, { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue = '') => {
  const localInitialValue = JSON.parse(localStorage.getItem(key));

  const [value, setValue] = useState(localInitialValue ?? initialValue);

  useEffect(() => {
    saveData(key, value);
  }, [key, value])

  function saveData(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [
    value,
    setValue
  ]
}