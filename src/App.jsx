import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function AddItem(item) {
    setItems(prevItem => [...prevItem, item]);
  }

  function deleteItem(id) {
    const confirm = window.confirm("Yakin mau hapus barang ini?");

    if (!confirm) return;

    setItems(prevItem => {
      return prevItem.filter(item => {
        return item.id !== id;
      })
    })
  }

  function deleteAllItem() {
    const confirm = window.confirm("Yakin mau hapus semua barang?");

    if (!confirm) return;

    setItems([]);
  }

  function togglePacked(id) {
    setItems(prevItem => {
      return prevItem.map(item => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    })
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={AddItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onTogglePacked={togglePacked}
        onDeleteAllItem={deleteAllItem}
      />
      <Stats items={items} />
    </div>
  )
}