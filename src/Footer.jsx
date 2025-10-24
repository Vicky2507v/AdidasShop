import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./index.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>Adidas</h3>
          <p>
            Premium sportswear crafted with innovation and passion.
            Performance meets comfort in every stride.
          </p>
          <div className="social-icons">
            <FaFacebookSquare />
            <FaInstagram />
            <FaSquareXTwitter />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Support</h4>
            <ul>
              <li>Products</li>
              <li>Help & Support</li>
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4>Branches</h4>
            <ul>
              <li>India</li>
              <li>USA</li>
              <li>Japan</li>
              <li>Canada</li>
              <li>Russia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <h4>Payment Methods</h4>
        <div className="payment-logos">
          <img src="src/assets/Images/paypal.png" />
          <img src="src/assets/Images/visa.png" />
          <img src="src/assets/Images/mastercard.png" />
          <img src="src/assets/Images/american-express.png" />
        </div>
      </div>

      <p className="copyright">
        © 2025 AdidasShop. All Rights Reserved.
      </p>
    </footer>
  );
};
