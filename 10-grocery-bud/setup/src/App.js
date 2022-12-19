import React, { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [data, saveData] = useLocalStorage('store', []);
  const [inputValue, setInputValue] = useState('');
  const [ alert, setAlert ] = useState({
    title: '',
    type: 'danger',
    show: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue === '') {
      setAlert({
        title: 'Please enter value',
        show: true
      });
      return;
    }

    const item = {
      id: new Date().getTime(),
      title: inputValue,
    }

    saveData([...data, item ]);
    setInputValue('');
    
    setAlert({
      title: 'Item added to the list',
      show: true,
      type: 'success'
    })
  }

  const handleInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const clearData = () => {
    saveData([]);

    setAlert({ title: 'Empty list', show: true })
  }

  const deleteItem = (id) => {
    const newData = data.filter( item => item.id !== id);
    saveData(newData);
    setAlert({ title: 'Item removed', show: true })
  }

  const editItem = (id) => {
  }

  return (
    <div className='section-center'>
      { alert.show && <Alert alertData={alert} setAlert={setAlert} /> }
      
      <div className='grocery-form'>
        <h3 className='title'>Grocery Bud</h3>

        <form className='form-control' onSubmit={ handleSubmit }>
          <input
            className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={handleInputValue}
          />
          <button type='submit' className='submit-btn'>Submit</button>
        </form>

        <List
          items={data}
          onClear={ clearData }
          onDelete={ deleteItem }
          onEdit={ editItem }
        />
 
      </div>
    </div>
  )
}

export default App
