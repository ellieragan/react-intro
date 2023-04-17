import React, { useState } from 'react';

function SearchBar(props) {
  const [searchterm, setSearchTerm] = useState('');
  // add this above your return
  const onInputChange = (event) => {
    props.onSearchChange(event.target.value);
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} placeholder="search" />
    </div>
  );
}
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
