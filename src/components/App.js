import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
// import  Item  from "./Item";                     
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // setItems((items) => items.push(newItem)) --> In React we are not allowed to mutate state.
    // React is all about immutability so we create new Array that contains all the current items and the new one.
    setItems((items) => [...items, item]);
    //newState depends on the current state, so we need to pass a callback.
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// function Logo() {
//   return <h1>🌴 Far Away 💼</h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault(); // To stop website from reloading after submitting form(Vanilla JavaScript)

//     if (!description) return; //If description is empty we cannot submit the form.

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     // console.log(newItem);

//     onAddItems(newItem);

//     //After entering an item return to intial state.
//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       {/*onSubmit will handle both onClick and Enter*/}
//       {/*onSubmit = {handleSubmit()} --> we are calling the function
//          onSubmit = {handleSubmit}   --> React will call the funtion when submitted
//          onSubmit = {(e) => handleSubmit(e)}   --> React will call the funtion when submitted(same as above line)
//       */}
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => {
//           // console.log(e.target.value);
//           setQuantity(Number(e.target.value)); //e.target.value is always a String. To convert it to int we use Number() function.
//         }}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((quantity) => (
//           <option value={quantity} key={quantity}>
//             {quantity}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item.."
//         value={description}
//         onChange={(e) => {
//           // console.log(e.target.value);
//           setDescription(e.target.value);
//         }}
//       ></input>
//       <button>Add</button>
//       {/*<button onClick={handleClick}>Add</button>
//           This will only listen to add button but not enter. So we use onSubmit here.
//       */}
//     </form>
//   );
// }

/*
Before State Management
function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
*/

// function PackagingList({ items, onDeleteItem, onToggleItem, onClearList }) {
//   const [sortBy, setSortBy] = useState("input");

//   let sortedItems;

//   if (sortBy === "input") sortedItems = items;

//   if (sortBy === "description") {
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));
//   }

//   if (sortBy === "packed") {
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));
//   }

//   return (
//     <>
//       <div className="list">
//         <ul>
//           {/* {items.map((item) => ( */}
//           {sortedItems.map((item) => (
//             <Item
//               item={item}
//               key={item.id}
//               onDeleteItem={onDeleteItem}
//               onToggleItem={onToggleItem}
//             />
//           ))}
//         </ul>
//         <div className="actions">
//           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//             <option value="input">Sort by input order</option>
//             <option value="description">Sort by description</option>
//             <option value="packed">Sort by packed status</option>
//           </select>
//           <button onClick={onClearList}>Clear List</button>
//         </div>
//       </div>
//     </>
//   );
// }

// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <footer className="stats">
//         <em>Start adding items to your packing list ✈️</em>
//       </footer>
//     );

//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);
//   // console.log(numItemsPacked.length);

//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100
//           ? "You got everthing. Ready to ✈️"
//           : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage})%`}
//       </em>
//     </footer>
//   );
// }
