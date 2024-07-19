import React from 'react';
import { items } from './data';

const ItemList = () => {
  return (
    <ul className="list-disc pl-5">
      {items.map(item => (
        <li key={item.id} className="py-1">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
