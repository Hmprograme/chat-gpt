import { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { categories, products } from './data/storeData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('featured');
  const [cartItems, setCartItems] = useState([]);

  const sortedProducts = useMemo(() => {
    const visible = selectedCategory === 'All'
      ? [...products]
      : products.filter((product) => product.category === selectedCategory);

    switch (sortOrder) {
      case 'price-asc':
        visible.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        visible.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        visible.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return visible;
  }, [selectedCategory, sortOrder]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQty = (productId, action) => {
    setCartItems((prev) => prev
      .map((item) => {
        if (item.product.id !== productId) return item;
        const quantity = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity };
      })
      .filter((item) => item.quantity > 0));
  };

  return (
    <MainLayout cartCount={cartCount}>
      <Routes>
        <Route
          path="/"
          element={<HomePage categories={categories.slice(0, 4)} featuredProducts={products.slice(0, 4)} />}
        />
        <Route
          path="/shop"
          element={(
            <ShopPage
              categories={categories}
              products={sortedProducts}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          )}
        />
        <Route
          path="/product/:slug"
          element={<ProductDetailPage products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={(
            <CartPage
              cartItems={cartItems}
              onIncrement={(productId) => updateQty(productId, 'increment')}
              onDecrement={(productId) => updateQty(productId, 'decrement')}
              onRemove={(productId) => setCartItems((prev) => prev.filter((item) => item.product.id !== productId))}
            />
          )}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
