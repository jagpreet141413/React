import React, { useState } from 'react';

const SearchFilter = () => {
  const [data, setData] = useState([
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddUser = () => {
    if (newUser.trim() !== '') {
      setData([...data, newUser]);
      setNewUser('');
    }
  };
  const handleDelete = (index) => {
    const newItems = [...data];
    newItems.splice(index, 1);
    setData(newItems);
  };
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => handleDelete(index)}>Delete</button>
          
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add user..."
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
        
      </div>
    </div>
  );
};

export default SearchFilter;
