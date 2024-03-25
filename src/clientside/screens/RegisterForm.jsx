import * as React from "react";
import { Button, Select, Label, TextInput } from "flowbite-react";

const RegisterForm = () => {
  const handlesubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const profession = form.passion.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, phone, address, profession, email, password };
    console.log(user);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex items-center justify-center mt-[40px]">
      <form onSubmit={handlesubmit} className="flex w-full max-w-md font-signika flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" type="text" placeholder="name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Phone" />
          </div>
          <TextInput
            id="phone"
            type="number"
            placeholder="your phone number"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Your address" />
          </div>
          <TextInput
            id="address"
            type="text"
            placeholder="your address"
            required
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="passion" value="Select your passion" />
          </div>
          <Select id="passion" required>
            <option>Doctor</option>
            <option>Engineer</option>
            <option>Student</option>
            <option>Business</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="email@work.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password"
            placeholder="password"
            type="password"
            required
          />
        </div>
        <Button className="mt-[10px]" type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
