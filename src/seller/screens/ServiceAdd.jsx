import React from "react";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceAdd = () => {

  const handleSubmit = (event) =>{
      event.preventDefault();

      const form = event.target;
      const serviceName = form.serviceName.value;
      const description = form.description.value;
      const category = form.category.value;
      const price = form.price.value;
      const service = {serviceName,description,category,price};
      console.log(service);
      fetch("http://localhost:5000/services",{
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(service)
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="flex justify-center items-center mt-[40px]">
      <form onSubmit={handleSubmit} className="w-3/4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="serviceName" value="Service Name" />
          </div>
          <TextInput
            id="serviceName"
            type="text"
            placeholder="Clearly describe the service being offered"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Your Description" />
          </div>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <Select id="category" required>
            <option>Consulting</option>
            <option>Design</option>
            <option>Development</option>
            <option>Business</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Your price" />
          </div>
          <TextInput
            id="price"
            type="number"
            placeholder="price"
            required
            shadow
          />
        </div>
        <div className="flex justify-center items-center w-full gap-2 mt-[20px]">
        <Button className="w-full" type="submit">Create Your Service</Button>
        </div>
      </form>
    </div>
  );
};

export default ServiceAdd;
