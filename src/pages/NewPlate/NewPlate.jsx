import React, { useState } from "react";
import Select from "react-select";

const NewPlate = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const option = [
    { value: "salgados", label: "Salgados" },
    { value: "doces", label: "Doces" },
    { value: "bebidas", label: "Bebidas" },
  ];

  return (
    <Select
      options={option}
      onChange={(e) => {
        setCategory(e.target.value);
      }}
    />
  );
};

export default NewPlate;
