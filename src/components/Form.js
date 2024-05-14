import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // To stop website from reloading after submitting form(Vanilla JavaScript)

    if (!description) return; //If description is empty we cannot submit the form.

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    //After entering an item return to intial state.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {/*onSubmit will handle both onClick and Enter*/}
      {/*onSubmit = {handleSubmit()} --> we are calling the function 
           onSubmit = {handleSubmit}   --> React will call the funtion when submitted   
           onSubmit = {(e) => handleSubmit(e)}   --> React will call the funtion when submitted(same as above line)  
        */}
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value);
          setQuantity(Number(e.target.value)); //e.target.value is always a String. To convert it to int we use Number() function.
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((quantity) => (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
      {/*<button onClick={handleClick}>Add</button>
            This will only listen to add button but not enter. So we use onSubmit here.
        */}
    </form>
  );
}
