import React, { useState } from 'react';
import './GroceryDelivery.css';

const GroceryDelivery = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const slots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM'
  ];

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have selected the slot: ${selectedSlot}`);
  };


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grocery-delivery">
      <h1 className="title">Grocery Delivery Timing Slot</h1>
      <p className="current-date">Current Date and Time: {currentDate}</p>
      <form onSubmit={handleSubmit}>
        <label className="slot-label">Choose a delivery slot:</label>
        <select value={selectedSlot} onChange={handleSlotChange} className="slot-select">
          <option value="">Select a slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default GroceryDelivery;
