import React, {useState} from "react";

function Search({ transactions }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    const searchText = e.target.value;
    setSearchInput(searchText);
    filterTransactions(searchText);
  };

  const filterTransactions = (searchText) => {
    const filtered = ()=>
      transactions.description.toLowerCase().includes(searchText.toLowerCase())
    //setFilteredTransactions(filtered);
  };
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
