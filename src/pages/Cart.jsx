import { useState, useEffect } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

// Cart Page Component
export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '⌚' },
    { id: 3, name: 'Premium T-Shirt', price: 24.99, quantity: 2, image: '👕' },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div style={styles.cartContainer}>
      <h1 style={styles.pageTitle}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p style={styles.emptyCartMessage}>Your cart is empty. Start shopping now!</p>
      ) : (
        <div style={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.cartItemImage}>{item.image}</div>
              <div style={styles.cartItemDetails}>
                <h3 style={styles.cartItemName}>{item.name}</h3>
                <p style={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
                <div style={styles.quantityControls}>
                  <button style={styles.quantityButton} onClick={() => handleDecreaseQuantity(item.id)}>
                    <Minus size={16} />
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button style={styles.quantityButton} onClick={() => handleIncreaseQuantity(item.id)}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button style={styles.removeItemButton} onClick={() => handleRemoveItem(item.id)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={styles.cartSummary}>
          <div style={styles.totalPrice}>
            <span style={styles.totalPriceText}>Total:</span>
            <span style={styles.totalPriceAmount}>${calculateTotal()}</span>
          </div>
          <button style={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

// Inline Styles for Cart Page
const styles = {
  cartContainer: {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  emptyCartMessage: {
    fontSize: '18px',
    textAlign: 'center',
    color: '#888',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    justifyContent: 'space-between',
  },
  cartItemImage: {
    fontSize: '48px',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: '20px',
  },
  cartItemName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cartItemPrice: {
    fontSize: '16px',
    color: '#333',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  quantityButton: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  quantity: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  removeItemButton: {
    background: 'none',
    border: 'none',
    color: '#f44336',
    cursor: 'pointer',
    fontSize: '20px',
  },
  cartSummary: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginTop: '40px',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  totalPriceText: {
    color: '#333',
  },
  totalPriceAmount: {
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
