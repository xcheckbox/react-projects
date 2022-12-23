import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
import { useFetch } from './hooks/useFetch'

const API_URL = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [ person, loading, getData ] = useFetch(API_URL);
  const [ label, setLabel ] = useState('name');
  const [ info, setInfo ] = useState('random');
  
  useEffect(() => {
    if(person) setInfo(person.name)
    // eslint-disable-next-line
  }, [loading])

  const handleOver = (e) => {
    if(e.target.classList.contains('icon')){
      const info = e.target.dataset.icon;
      setLabel(info)
      setInfo(person[info])
    }
  }

  const profileIcons = {
    name: <FaUser />,
    email: <FaEnvelopeOpen />,
    age: <FaCalendarTimes />,
    street: <FaMap />,
    phone: <FaPhone />,
    password: <FaLock />
  }

  return (
    <div>
    <div className='block bcg-black'></div>
    <div className='block'>

      <div className='container'>
        <img src={person?.image || defaultImage} alt={person?.name} />
        
        <p className='user-title'>My { label } is</p>
        <p className='user-value'>{ info }</p>
        
        <div className='values-list'>
          {
            Object.keys(profileIcons).map( (icon, idx) => {
              return (
                <button
                  className='icon'
                  onMouseOver={ handleOver }
                  key={idx}
                  data-icon={icon}
                >
                  { profileIcons[icon] }
                </button>
            )})
          }
        </div>

        <button
          type='button'
          className='btn'
          onClick={ () => getData(API_URL) }
        >
          { loading ? 'Loading...' : 'Random user'}
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
