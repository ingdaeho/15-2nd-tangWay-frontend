import React from "react";

const PassengerForm = ({ data, onChange }) => {
  const handleChange = (e, target) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    onChange(newData);
  };

  return (
    <div>
      <input type="text" name="name" value={data.name} placeholder="name" onChange={handleChange} />
      <input type="email" name="email" value={data.email} placeholder="email" onChange={handleChange} />
      <input type="text" name="phone" value={data.phone} placeholder="phone" onChange={handleChange} />
      <input type="text" name="gender" value={data.gender} placeholder="gender" onChange={handleChange} />
      <input type="text" name="nation" value={data.nation} placeholder="nation" onChange={handleChange} />
    </div>
  );
};

export default PassengerForm;
