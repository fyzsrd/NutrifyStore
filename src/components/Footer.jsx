import { Link } from "react-router-dom";
import logo from '../assets/logo/nutrify-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-15 w-15 items-center justify-center rounded-xl text-white font-bold">
              
              <img src={logo} alt="N" className="h-15 w-15" />
            </div>
            
            <span className="text-lg font-semibold text-white">Nutrify</span>
          </Link>
          <p className="text-sm text-gray-400">
            Your trusted source for supplements, vitamins, and nutrition essentials.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/c/supplements" className="hover:text-amber-400">Supplements</Link></li>
            <li><Link to="/c/vitamins" className="hover:text-amber-400">Vitamins</Link></li>
            <li><Link to="/c/protein" className="hover:text-amber-400">Protein</Link></li>
            <li><Link to="/c/deals" className="hover:text-amber-400">Deals</Link></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Info</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-amber-400">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-amber-400">Shipping & Returns</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get special offers, nutrition tips & more.
          </p>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nutraline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
