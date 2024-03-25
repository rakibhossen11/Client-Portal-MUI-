import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Customers = () => {
  // const customers = useLoaderData();
  const [customers,setCustomers] = useState([]);
  const [search,setSearch] = useState([]);
  // console.log(search);

  useEffect(() =>{
    fetch(`http://localhost:5000/user/${search}`)
    .then(res => res.json())
    .then(data => setCustomers(data))
  },[]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.name.value;
    setSearch(email);
  };


  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" name="name" placeholder="search here" />
          <input type="submit" value="search" />
        </form>
      </div>
      <div>
        {customers.map((customer) => (
          <div key={customer._id}>
            <p>{customer.email}</p>
          </div>
        ))}
        {/* {
          customers ? (customers.map((customer) => (
            <div key={customer._id}>
              <p>{customer.email}</p>
            </div>
          ))) : (search.map((customer) => (
            <div key={customer._id}>
              <p>{customer.email}</p>
            </div>
          )))
        } */}
      </div>
    </div>
  );
};

export default Customers;
