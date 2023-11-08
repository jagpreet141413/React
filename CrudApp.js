import React, { useState } from 'react';

function CrudApp() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

//   const handleEdit = (index) => {
//     const editedItem = prompt('Edit item:', items[index]);
//     if (editedItem !== null) {
//       const newItems = [...items];
//       newItems[index] = editedItem;
//       setItems(newItems);
//     }
//   };

  return (
    <div>
      <h1>CRUD Application</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* <button onClick={() => handleEdit(index)}>Edit</button> */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;