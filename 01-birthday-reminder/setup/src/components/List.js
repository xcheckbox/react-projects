import React from 'react';
import Person from './Person';

const List = ({ birthdays }) => {
  return (
    <>
      {
        birthdays.map(person => <Person person={person} /> )
      }
    </>
  )
};

export default List;
