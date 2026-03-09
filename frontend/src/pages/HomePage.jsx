import { Link } from 'react-router-dom';

function HomePage({ categories, featuredProducts }) {
  return (
    <div className="container stack-lg">
      <section className="hero-banner">
        <p className="eyebrow">New season drop</p>
        <h1>Gear up your setup with premium everyday tech.</h1>
        <p>Discover high-performing devices designed for work, gaming, and life on the move.</p>
        <Link to="/shop" className="btn-primary">Browse Collection</Link>
      </section>

      <section>
        <h2>Featured Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category} className="card category-card">
              <h3>{category}</h3>
              <p>Explore {category.toLowerCase()} favorites.</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article key={product.id} className="card product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p className="price">${product.price}</p>
              <Link to={`/product/${product.slug}`} className="btn-secondary">View Details</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
