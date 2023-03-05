import Navbar from "../components/Navbar";
import Product from "../components/Product";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
        alt=""
      />

      <div className="home__row">
        {/* -------- Product - id, title, price, rating, image ----------- */}
        <Product
          id="1"
          title='LG 32BP95E-B 32" OLED Monitor with Hood, 3840 X 2160, 16:9 OLED, HDMI, Display Port'
          price={5137}
          rating={5}
          image="https://m.media-amazon.com/images/I/61i9QBMhA3L._AC_SX679_.jpg"
        />
        <Product
          id="2"
          title='Apple 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 30‑core GPU: 14.2-inch Liquid Retina XDR Display, 32GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver
          '
          price={3089.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61CHqS31PiL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        {/* -------- Product - id, title, price, rating, image ----------- */}
        <Product
          id="3"
          title='Apple 2021 10.2-inch iPad (Wi-Fi, 256GB) - Silver'
          price={395.01}
          rating={4}
          image="https://m.media-amazon.com/images/I/61PnHlc0HCL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
        />
        <Product
          id="4"
          title="Amazon Essentials Men's Slim-Fit Short-Sleeve Pocket Oxford Shirt"
          price={12.90}
          rating={5}
          image="https://m.media-amazon.com/images/I/71abnYEKqML._AC_UX569_.jpg"
        />
        <Product
          id="5"
          title='Iron Gym Pull-Up Bar - Total Upper Body Workout Bar for Doorway, Adjustable Width Locking, No Screws Portable Door Frame Horizontal Chin-up Bar, Fitness Exercise'
          price={25.80}
          rating={4}
          image="https://m.media-amazon.com/images/I/61B0M2L+wrL._AC_SY300_SX300_.jpg"
        />
      </div>

      <div className="home__row">
        {/* -------- Product - id, title, price, rating, image ----------- */}
        <Product
          id="6"
          title='Totnz Memory Electric Height Adjustable Sit Stand Up Desk, Computer Workstation L Shape, 55 x 34 Inch, Black'
          price={313.06}
          rating={5}
          image="https://m.media-amazon.com/images/I/61cmQKoENzL._AC_SX522_.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
