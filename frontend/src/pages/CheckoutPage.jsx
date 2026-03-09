function CheckoutPage() {
  return (
    <div className="container checkout-form-wrap">
      <h1>Checkout</h1>
      <form className="card checkout-form" onSubmit={(event) => event.preventDefault()}>
        <h3>Shipping Details</h3>
        <div className="form-grid">
          <label>
            Full Name
            <input required type="text" />
          </label>
          <label>
            Email
            <input required type="email" />
          </label>
          <label>
            Address
            <input required type="text" />
          </label>
          <label>
            City
            <input required type="text" />
          </label>
          <label>
            Country
            <input required type="text" />
          </label>
          <label>
            Postal Code
            <input required type="text" />
          </label>
        </div>

        <h3>Payment (Mock)</h3>
        <div className="form-grid">
          <label>
            Card Number
            <input required type="text" />
          </label>
          <label>
            Expiry Date
            <input required type="text" placeholder="MM/YY" />
          </label>
          <label>
            CVC
            <input required type="text" />
          </label>
          <label>
            Name on Card
            <input required type="text" />
          </label>
        </div>

        <button className="btn-primary" type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
