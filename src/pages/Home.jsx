import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ArrowRight, Star, Truck, Shield, Headphones, ChevronRight, ChevronLeft } from 'lucide-react';
import carousel5 from '../assets/images/carousel5.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';

// Define CSS styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: '0',
    padding: '0',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '4px',
    padding: '8px 12px',
    width: '300px'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    marginLeft: '8px',
    outline: 'none'
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  },
  hero: {
    position: 'relative',
    height: '500px',
    overflow: 'hidden'
  },
  carousel: {
    display: 'flex',
    height: '100%',
    transition: 'transform 0.5s ease-in-out'
  },
  carouselSlide: {
    minWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  carouselIndicators: {
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    zIndex: '2'
  },
  carouselIndicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer'
  },
  carouselControls: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: '2',
    transform: 'translateY(-50%)'
  },
  carouselButton: {
    backgroundColor: 'rgba(228, 218, 218, 0.5)',
    border: 'none',
    color: '#fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  heroContent: {
    maxWidth: '800px',
    padding: '0 20px'
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px'
  },
  heroSubtitle: {
    fontSize: '18px',
    marginBottom: '30px',
    fontWeight: 'normal'
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  categories: {
    padding: '60px 20px',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '40px'
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  categoryCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    padding: '40px 20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  },
  categoryTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '16px'
  },
  featuredProducts: {
    padding: '60px 20px',
    backgroundColor: '#f1f1f1'
  },
  productTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px'
  },
  productTab: {
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none'
  },
  productTabActive: {
    backgroundColor: '#000',
    color: '#fff'
  },
  features: {
    padding: '60px 20px',
    backgroundColor: '#fff'
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featureCard: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px'
  },
  featureIcon: {
    backgroundColor: '#000',
    color: '#fff',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  testimonials: {
    padding: '60px 20px',
    backgroundColor: '#f1f1f1'
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  testimonialCard: {
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  ratingStars: {
    display: 'flex',
    marginBottom: '15px',
    color: '#FFD700'
  },
  testimonialText: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  testimonialName: {
    fontWeight: 'bold'
  },
  brands: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  brandGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  brandLogo: {
    fontSize: '40px',
    opacity: '0.6',
    transition: 'opacity 0.3s ease'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  productImage: {
    width: '100%',
    height: '200px',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productDetails: {
    padding: '20px'
  },
  productTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  productPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  addToCartButton: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    justifyContent: 'center'
  },
  wishlistButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: '#000'
  },
  newsletter: {
    padding: '60px 20px',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center'
  },
  newsletterForm: {
    display: 'flex',
    maxWidth: '500px',
    margin: '0 auto',
    gap: '10px'
  },
  newsletterInput: {
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    flex: '1'
  },
  newsletterButton: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '40px 20px',
    textAlign: 'center'
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  footerLink: {
    color: '#333',
    textDecoration: 'none'
  },
  copyright: {
    fontSize: '14px',
    color: '#666'
  },
  productCardContainer: {
    position: 'relative'
  },
  mobileMenu: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    zIndex: '100'
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  },
  mobileMenuNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  mobileNavLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 0',
    borderBottom: '1px solid #333'
  },
  // Media queries handled through inline conditional rendering
};

export default function ShopEasy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTab, setSelectedTab] = useState('all');

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const isMobile = windowWidth < 768;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const categories = [
    { name: 'Electronics', image: '🖥️' },
    { name: 'Clothing', image: '👕' },
    { name: 'Home & Kitchen', image: '🏠' },
    { name: 'Beauty', image: '✨' }
  ];

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: '🎧', category: 'electronics', rating: 4.5, reviews: 127 },
    { id: 2, name: 'Smart Watch', price: '$129.99', image: '⌚', category: 'electronics', rating: 4.7, reviews: 89 },
    { id: 3, name: 'Premium T-Shirt', price: '$24.99', image: '👕', category: 'clothing', rating: 4.3, reviews: 56 },
    { id: 4, name: 'Bluetooth Speaker', price: '$79.99', image: '🔊', category: 'electronics', rating: 4.6, reviews: 112 },
    { id: 5, name: 'Coffee Maker', price: '$49.99', image: '☕', category: 'home', rating: 4.8, reviews: 94 },
    { id: 6, name: 'Running Shoes', price: '$89.99', image: '👟', category: 'clothing', rating: 4.4, reviews: 72 },
    { id: 7, name: 'Smart Home Hub', price: '$149.99', image: '🏠', category: 'electronics', rating: 4.2, reviews: 63 },
    { id: 8, name: 'Face Moisturizer', price: '$19.99', image: '✨', category: 'beauty', rating: 4.9, reviews: 108 }
  ];
  
  const carouselData = [
    {
       imageUrl: carousel5,
      bgColor: '#000',
      title: 'Shop with Ease',
      subtitle: 'Discover the best products at the best prices. Shop from our curated collection of premium items.',
      buttonText: 'Shop Now'
    },
    {
      imageUrl: carousel2 ,
      bgColor: '#333',
      title: 'Summer Sale',
      subtitle: 'Up to 50% off on selected items. Limited time offer.',
      buttonText: 'See Deals'
    },
    {
      imageUrl: carousel3 ,
      bgColor: '#111',
      title: 'New Arrivals',
      subtitle: 'Check out our latest products. Be the first to get your hands on our newest items.',
      buttonText: 'Explore'
    }
  ];
  
  const features = [
    { icon: <Truck size={24} />, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: <Shield size={24} />, title: 'Secure Payment', description: '100% secure checkout' },
    { icon: <Headphones size={24} />, title: '24/7 Support', description: 'Always here to help' }
  ];
  
  const testimonials = [
    { name: 'John D.', text: 'ShopEasy has the best selection of products I\'ve seen. Love the fast shipping!', rating: 5 },
    { name: 'Sarah M.', text: 'Customer service is exceptional. Will definitely shop here again!', rating: 5 },
    { name: 'Robert P.', text: 'Quality products at reasonable prices. Very satisfied with my purchases.', rating: 4 }
  ];

  return (
    <div style={styles.container}>
      

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuHeader}>
            <div style={styles.logo}>ShopEasy</div>
            <button style={styles.mobileMenuButton} onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          
          <div style={styles.searchBar}>
            <Search size={16} />
            <input style={styles.searchInput} placeholder="Search for products..." />
          </div>
          
          <nav style={styles.mobileMenuNav}>
            <a style={styles.mobileNavLink}>Home</a>
            <a style={styles.mobileNavLink}>Shop</a>
            <a style={styles.mobileNavLink}>Categories</a>
            <a style={styles.mobileNavLink}>Deals</a>
            <a style={styles.mobileNavLink}>About</a>
            <a style={styles.mobileNavLink}>Contact</a>
          </nav>
          
          <div style={{...styles.mobileMenuNav, marginTop: '40px'}}>
            <a style={styles.mobileNavLink}>My Account</a>
            <a style={styles.mobileNavLink}>Shopping Cart</a>
          </div>
        </div>
      )}

      {/* Hero Section with Carousel */}
      <section style={styles.hero}>
        <div style={{
          ...styles.carousel,
          transform: `translateX(-${currentSlide * 100}%)`
        }}>
         {carouselData.map((slide, index) => (
  <div key={index} style={{
    ...styles.carouselSlide,
    position: 'relative',
    overflow: 'hidden',
  }}>
    <img 
      src={slide.imageUrl} 
      alt={slide.title} 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Cover the entire slide area
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
    <div style={{
      ...styles.heroContent,
      position: 'relative',
      zIndex: 2,
      color: '#fff',
    }}>
      <h1 style={styles.heroTitle}>{slide.title}</h1>
      <p style={styles.heroSubtitle}>{slide.subtitle}</p>
      <button style={styles.button}>
        {slide.buttonText} <ArrowRight size={16} />
      </button>
    </div>
  </div>
))}
        </div>
        
        <div style={styles.carouselControls}>
          <button 
            style={styles.carouselButton}
            onClick={() => setCurrentSlide(prev => (prev === 0 ? 2 : prev - 1))}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            style={styles.carouselButton}
            onClick={() => setCurrentSlide(prev => (prev + 1) % 3)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div style={styles.carouselIndicators}>
          {[0, 1, 2].map(index => (
            <div 
              key={index}
              style={{
                ...styles.carouselIndicator,
                backgroundColor: currentSlide === index ? '#fff' : 'rgba(255, 255, 255, 0.5)'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section style={styles.categories}>
        <h2 style={styles.sectionTitle}>Shop by Category</h2>
        <div style={{
          ...styles.categoryGrid,
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
        }}>
          {categories.map((category, index) => (
            <div 
              key={index} 
              style={{
                ...styles.categoryCard,
                ':hover': { transform: 'translateY(-5px)' }
              }}
            >
              <div style={{fontSize: '48px'}}>{category.image}</div>
              <h3 style={styles.categoryTitle}>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={styles.featuredProducts}>
        <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Featured Products</h2>
        
        <div style={styles.productTabs}>
          <button 
            style={{
              ...styles.productTab,
              ...(selectedTab === 'all' ? styles.productTabActive : {})
            }}
            onClick={() => setSelectedTab('all')}
          >
            All Products
          </button>
          <button 
            style={{
              ...styles.productTab,
              ...(selectedTab === 'electronics' ? styles.productTabActive : {})
            }}
            onClick={() => setSelectedTab('electronics')}
          >
            Electronics
          </button>
          <button 
            style={{
              ...styles.productTab,
              ...(selectedTab === 'clothing' ? styles.productTabActive : {})
            }}
            onClick={() => setSelectedTab('clothing')}
          >
            Clothing
          </button>
          <button 
            style={{
              ...styles.productTab,
              ...(selectedTab === 'home' ? styles.productTabActive : {})
            }}
            onClick={() => setSelectedTab('home')}
          >
            Home & Kitchen
          </button>
        </div>
        
        <div style={{
          ...styles.productGrid,
          gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : windowWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
        }}>
          {products
            .filter(product => selectedTab === 'all' || product.category === selectedTab)
            .slice(0, 8)
            .map(product => (
              <div key={product.id} style={styles.productCardContainer}>
                <div style={styles.productCard}>
                  <div style={styles.productImage}>
                    <span style={{fontSize: '64px'}}>{product.image}</span>
                  </div>
                  <button style={styles.wishlistButton} aria-label="Add to wishlist">
                    <Heart size={20} />
                  </button>
                  <div style={styles.productDetails}>
                    <h3 style={styles.productTitle}>{product.name}</h3>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px'}}>
                      <div style={{display: 'flex', color: '#FFD700'}}>
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                            style={{
                              color: i < Math.floor(product.rating) ? '#FFD700' : '#ccc',
                              strokeWidth: 1.5
                            }}
                          />
                        ))}
                      </div>
                      <span style={{fontSize: '12px', color: '#666'}}>({product.reviews})</span>
                    </div>
                    <p style={styles.productPrice}>{product.price}</p>
                    <button style={styles.addToCartButton}>
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={{
          ...styles.featureGrid,
          gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>What Our Customers Say</h2>
        <div style={{
          ...styles.testimonialGrid,
          gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : windowWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? '#FFD700' : 'none'}
                    style={{
                      color: i < testimonial.rating ? '#FFD700' : '#ccc',
                      strokeWidth: 1.5
                    }}
                  />
                ))}
              </div>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <p style={styles.testimonialName}>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section style={styles.brands}>
        <h2 style={styles.sectionTitle}>Trusted by Leading Brands</h2>
        <div style={styles.brandGrid}>
          <div style={styles.brandLogo}>🌟</div>
          <div style={styles.brandLogo}>⭐</div>
          <div style={styles.brandLogo}>💫</div>
          <div style={styles.brandLogo}>✨</div>
          <div style={styles.brandLogo}>⚡</div>
        </div>
      </section>

      
      
    </div>
  );
}