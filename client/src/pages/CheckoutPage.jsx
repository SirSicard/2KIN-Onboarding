import { useState } from "react";
import PaymentForm from "../components/PaymentForm";
import UserDetails from "../components/UserDetails";
import OrderOverview from "../components/OrderOverview";
import "../styles/checkoutPage.css";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    paymentMethod: "credit-card", // Default payment method
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    paypalEmail: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 – 5G smartphone 128GB",
      image: "https://placehold.co/60",
      price: 15000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Samsung Galaxy A34 5G smartphone 6/128GB",
      image: "https://placehold.co/60",
      price: 3000,
      quantity: 1,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>
      <div className="flex-container">
        <div className="flex-column">
          <PaymentForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <UserDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="flex-column">
          <OrderOverview cartItems={cartItems} />
        </div>
      </div>
      <button className="checkout-btn">Pay 34500</button>
    </section>
  );
}

export default CheckoutPage;
