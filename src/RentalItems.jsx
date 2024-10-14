// src/RentalItems.jsx
import { useState } from 'react';

const rentalItems = [
  { id: 1, name: 'เต็นท์ขนาด 3 คน', price: 225 },
  { id: 2, name: 'เต็นท์ขนาด 2 คน', price: 150 },
  { id: 3, name: 'ถุงนอน', price: 30 },
  { id: 4, name: 'ผ้าห่ม', price: 20 },
  { id: 5, name: 'แผ่นรองนอน', price: 20 },
  { id: 6, name: 'เสื่อ', price: 10 },
  { id: 7, name: 'หมอน', price: 40 },
  { id: 8, name: 'ผ้าใบ', price: 40 },
];

export default function RentalItems({ onUpdate }) {
  const [selectedItems, setSelectedItems] = useState({});

  const handleChange = (itemId) => {
    setSelectedItems((prev) => {
      const isSelected = !!prev[itemId];
      const newSelectedItems = { ...prev };
      if (isSelected) {
        delete newSelectedItems[itemId];
        onUpdate(-rentalItems.find(item => item.id === itemId).price);
      } else {
        newSelectedItems[itemId] = true;
        onUpdate(rentalItems.find(item => item.id === itemId).price);
      }
      return newSelectedItems;
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-white mb-4">เลือกอุปกรณ์</h2>
      {rentalItems.map(item => (
        <div key={item.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`item-${item.id}`}
            checked={!!selectedItems[item.id]}
            onChange={() => handleChange(item.id)}
            className="mr-2"
          />
          <label htmlFor={`item-${item.id}`} className="text-white">
            {item.name} - {item.price} บาท
          </label>
        </div>
      ))}
    </div>
  );
}
