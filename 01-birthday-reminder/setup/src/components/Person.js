import React from 'react'

const Person = ({ person }) => {
  const { age, id, image, name } = person;

  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{ name }</h4>
        <p>{ age }</p>
      </div>
    </article>
  )
}

export default Person;