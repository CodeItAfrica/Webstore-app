import ProductCard from "./ProductCard";
import "../styles/new-arrivals.css";


export default function NewArrivals() {
  const flashSaleProducts = [
    {
      id: 1,
      name: 'Watch Muse 1.32" AMOLED IP67',
      price: 53900,
      originalPrice: 69900,
      rating: 4.9,
      reviews: 120,
      image: '/oraimo-watch-muse-gold.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 2,
      name: 'Watch Nova V 2.01" HD Video',
      price: 35900,
      originalPrice: 71900,
      rating: 4.8,
      reviews: 4368,
      image: '/oraimo-watch-nova-black.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 3,
      name: 'Smart Shaver 2 Magnet 3D Dry',
      price: 9900,
      originalPrice: 26300,
      rating: 4.8,
      reviews: 3778,
      image: '/oraimo-smart-shaver.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 4,
      name: 'Watch Nova N 2.04" AMOLED',
      price: 33900,
      originalPrice: 69900,
      rating: 4.6,
      reviews: 156,
      image: '/oraimo-watch-nova-green.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 5,
      name: 'Watch Muse 1.32" AMOLED IP67',
      price: 53900,
      originalPrice: 69900,
      rating: 4.9,
      reviews: 120,
      image: '/oraimo-watch-muse-gold.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 6,
      name: 'Watch Nova V 2.01" HD Video',
      price: 35900,
      originalPrice: 71900,
      rating: 4.8,
      reviews: 4368,
      image: '/oraimo-watch-nova-black.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 7,
      name: 'Smart Shaver 2 Magnet 3D Dry',
      price: 9900,
      originalPrice: 26300,
      rating: 4.8,
      reviews: 3778,
      image: '/oraimo-smart-shaver.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 8,
      name: 'Watch Nova N 2.04" AMOLED',
      price: 33900,
      originalPrice: 69900,
      rating: 4.6,
      reviews: 156,
      image: '/oraimo-watch-nova-green.jpg',
      badge: 'Flash Sale'
    }
  ];


  return (
    <section className="new-arrivals">
      <div className="new-arrivals-container">
        <div className="new-arrivals-header">
          <h2>New Arrivals</h2>
        </div>

        <div className="products-grid">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
