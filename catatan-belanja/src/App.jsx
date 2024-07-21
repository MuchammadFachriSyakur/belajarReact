import { useState } from "react";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);
  return (
    <div className="app">
      <Header />
      <AddForm />
      <GrowseryList />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

function AddForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      return;
    }

    const newItem = { name, quantity, checked: false, id: Date.now() };

    console.log(newItem);

    setName("");
    setQuantity(1);
  }

  const quantityForm = [...Array(10)].map((x, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityForm}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Tambah</button>
    </form>
  );
}

function GrowseryList() {
  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((items) => (
            <Item items={items} key={items.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Item({ items }) {
  return (
    <li key={items.id}>
      <input type="checkbox" />
      <span
        style={items.checked === true ? { textDecoration: "line-through" } : {}}
      >
        {items.quantity} {items.name}
      </span>
      <button>&times;</button>
    </li>
  );
}

function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}
