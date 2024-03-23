import React, { useState } from "react";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) =>{
        fetch("http://localhost:5000/user")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
            data.filter((item) => console.log(item.name == value));
            // console.log(result);
          })
  };

  const handleChange = (value) =>{
    setInput(value);
    fetchData(value);
  };


  return (
    <div>
      <input
        placeholder="type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
