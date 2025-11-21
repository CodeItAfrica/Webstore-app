import '../styles/product-card.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>

      <div className="product-info">
        <div className="rating">
          <span className="stars">★</span>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews">({product.reviews})</span>
        </div>

        <h3 className="product-name">{product.name}</h3>

        <div className="pricing">
          <div className="price-row">
            <span className="current-price">₦ {product.price.toLocaleString()}</span>
            <span className="original-price">₦{product.originalPrice.toLocaleString()}</span>
          </div>
          <div className="discount-bar">
            <div className="discount-fill" style={{ width: `${discount}%` }}></div>
          </div>
          <span className="discount-label">{discount}%</span>
        </div>

        <div className="product-actions">
          <button className="btn-secondary">Learn More</button>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
