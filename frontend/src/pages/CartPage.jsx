import { Link } from 'react-router-dom';

function CartPage({ cartItems, onIncrement, onDecrement, onRemove }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="container stack-md">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="card">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-primary">Go to Shop</Link>
        </div>
      ) : (
        <>
          <div className="stack-sm">
            {cartItems.map((item) => (
              <article key={item.product.id} className="cart-item card">
                <img src={item.product.images[0]} alt={item.product.name} />
                <div>
                  <h3>{item.product.name}</h3>
                  <p>${item.product.price}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => onDecrement(item.product.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncrement(item.product.id)}>+</button>
                </div>
                <button className="btn-link" onClick={() => onRemove(item.product.id)}>Remove</button>
              </article>
            ))}
          </div>
          <article className="card cart-summary">
            <h3>Subtotal</h3>
            <p className="price">${subtotal.toFixed(2)}</p>
            <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
          </article>
        </>
      )}
    </div>
  );
}

export default CartPage;
