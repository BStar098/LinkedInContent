"use client";
import {  useState } from "react";
export default function Home() {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = ({ target: { value, name } }: ThandleChange) => {
    setFormValues((previousValues) => {
      const newObj = { ...previousValues };
      newObj[name] = value;
      return newObj;
    });
  };

  return (
    <main className="flex items-center justify-center ">
      <div className="flex flex-col">

        <input name="name" value={formValues.name} onChange={handleChange} />
        <input name="surname"value={formValues.surname} onChange={handleChange}/>
        <input name="email" value={formValues.email} onChange={handleChange} />
        <input  name="password" value={formValues.password} onChange={handleChange}/>
        <input name="phoneNumber" value={formValues.phoneNumber} onChange={handleChange} />

      </div>
    </main>
  );
}
