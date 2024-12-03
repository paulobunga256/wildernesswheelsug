import Hero from '../components/home/Hero';
import FeaturedVehicles from '../components/home/FeaturedVehicles';
import CustomerReviews from '../components/home/CustomerReviews';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BlogPosts from '../components/home/BlogPosts';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <CustomerReviews />
      <BlogPosts />
    </main>
  );
};

export default Home;