import React, { useState } from 'react';
import './Buy.css';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Purchase completed successfully!');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">💳 Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="fullName"
          placeholder="👤 Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="💳 Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          maxLength={19}
          required
        />
        <div className="flex-row">
          <input
            type="text"
            name="expiry"
            placeholder="📅 MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="🔐 CVV"
            value={formData.cvv}
            onChange={handleChange}
            maxLength={4}
            required
          />
        </div>

        <button type="submit" className="purchase-button">
          ✅ Complete Purchase
        </button>
      </form>
    </div>
  );
}
