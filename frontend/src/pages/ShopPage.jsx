import { Link } from 'react-router-dom';

function ShopPage({ categories, products, selectedCategory, setSelectedCategory, sortOrder, setSortOrder }) {
  return (
    <div className="container shop-layout">
      <aside className="filter-sidebar card">
        <h3>Filter By Category</h3>
        <label className="filter-option">
          <input
            type="radio"
            checked={selectedCategory === 'All'}
            onChange={() => setSelectedCategory('All')}
          />
          All
        </label>
        {categories.map((category) => (
          <label key={category} className="filter-option">
            <input
              type="radio"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            {category}
          </label>
        ))}
      </aside>

      <section className="shop-content">
        <div className="shop-toolbar card">
          <p>{products.length} items</p>
          <label>
            Sort by:
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </label>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="card product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p className="price">${product.price}</p>
              <Link to={`/product/${product.slug}`} className="btn-secondary">Open Product</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
