import React, { useState } from 'react'
import List from './components/List'
import Alert from './components/Alert'
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [data, saveData] = useLocalStorage('store', []);
  const [inputValue, setInputValue] = useState('');
  const [edit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
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

    if(edit) {
      const updatedList = data.map( item => {
        return (item.id === selectedItem.id)
          ? {...item, title: inputValue }
          : item
        
        })
        saveData(updatedList);
        setSelectedItem({})
        setEdit(false);

    } else {
      const item = {
        id: new Date().getTime(),
        title: inputValue,
      }
      saveData([...data, item ]);
    }

    setInputValue('');
    
    setAlert({
      title: (!edit) ? 'Item added to the list' : 'Value changed',
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
    const itemToEdit = data.filter( item => item.id === id);
    setEdit(true);
    setInputValue(itemToEdit[0].title);
    setSelectedItem(...itemToEdit)
  }

  return (
    <div className='section-center'>
      { alert.show && <Alert alertData={alert} setAlert={setAlert} /> }
      
      <div className='grocery-form'>
        <h3 className='title'>Grocery Bud</h3>

        <form className='form-control' onSubmit={handleSubmit}>
          <input
            className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={handleInputValue}
          />
          <button type='submit' className='submit-btn'>
            { !edit ? 'Submit' : 'Edit' } 
          </button>
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
