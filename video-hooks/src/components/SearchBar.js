import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div>
      <div className='searcg-bar ui segment'>
        <form onSubmit={onSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
