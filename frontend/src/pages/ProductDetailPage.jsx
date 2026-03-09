import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage({ products, onAddToCart }) {
  const { slug } = useParams();
  const product = useMemo(() => products.find((item) => item.slug === slug), [products, slug]);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container product-detail">
      <section>
        <img className="detail-main-image" src={product.images[activeImage]} alt={product.name} />
        <div className="thumb-row">
          {product.images.map((image, index) => (
            <button
              key={image}
              className={`thumb ${activeImage === index ? 'selected' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={image} alt={`${product.name} preview ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="detail-info card">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.shortDescription}</p>
        <p className="price">${product.price}</p>
        <p className={product.stock > 0 ? 'stock in' : 'stock out'}>
          {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
        </p>

        <div>
          <h3>Specifications</h3>
          <ul>
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="btn-primary"
          disabled={product.stock === 0}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default ProductDetailPage;
