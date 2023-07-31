/* eslint-disable react/prop-types */
import { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onTogglePacked, onDeleteAllItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      sortedItems = items
      break;
  }

  return (
    <div className="list">
      <ul>
        {
          sortedItems.map(item => {
            return (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onTogglePacked={onTogglePacked}
              />
            );
          })
        }
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAllItem}>Clear list</button>
      </div>
    </div>
  )
}
