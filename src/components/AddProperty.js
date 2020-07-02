import React, { useState } from "react";
import "../styles/add-property.css";

export default function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form
        data-testid="form-id"
        className="form-add-property"
        onSubmit={handleAddProperty}
      >
        <label htmlFor="title">
          Title
          <input
            className="input-fields"
            type="text"
            placeholder="Add a title..."
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            data-testid="select-city-id"
            className="input-fields"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            data-testid="select-type-id"
            className="input-fields"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terraced">End of Terraced</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <select
            data-testid="select-bedroom-id"
            className="input-fields"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <select
            data-testid="select-bathrooms-id"
            className="input-fields"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </label>
        <label htmlFor="price">
          Price (£)
          <input
            className="input-fields"
            placeholder="Add a price..."
            type="number"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="input-fields"
            placeholder="Add an email..."
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
