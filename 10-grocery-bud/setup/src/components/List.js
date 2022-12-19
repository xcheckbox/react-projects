import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, onClear, onDelete, onEdit }) => {

return (
  <div className='grocery-container'>
    {
      items.map(({title, id}) => (
        <div className='grocery-item' key={id}>
          <p className='title'>{title}</p>
          <div>
            <button
              type='button'
              className='edit-btn'
              onClick={() => onEdit(id) }
            >
              <FaEdit />
            </button>
            <button
              type='button'
              className='delete-btn'
              onClick={() => onDelete(id) }
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))
    }

    {
      items.length ? (
        <button
          type='button'
          className='clear-btn'
          onClick={() => onClear() }
        >
          Clear items
        </button>
      ) : null
    }
  </div>
  )
}

export default List;
