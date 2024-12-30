import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Phone,
  Search,
  ChevronDown,
  Menu,
  User,
} from "lucide-react";

const Header = () => {
  const [searchCategory, setSearchCategory] = useState("All Categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState("admin");
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <Link to="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <Link
              to="/account/create"
              className="text-gray-600 hover:text-gray-900"
            >
              Create an Account
            </Link>
          </div>
          <Link
            to="/warranty"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Extended Warranty
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                NeoVista Emporium
              </h1>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-grow max-w-2xl">
              <div className="relative flex w-full">
                <div className="relative">
                  <select
                    className="h-full rounded-l-lg border-r border-gray-300 bg-gray-50 px-4 py-2.5 text-sm outline-none appearance-none pr-8"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                  >
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Audio</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-grow border-y px-4 py-2 outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                />
                <button className="bg-primary-600 text-white px-6 rounded-r-lg hover:bg-primary-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact & Icons */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center">
                <Phone className="w-5 h-5 text-primary-600 mr-2" />
                <div className="text-sm">
                  <div className="text-gray-500">CALL US NOW</div>
                  <div className="font-medium">9851060000</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <User className="w-6 h-6" />
                </Link>
                <Link
                  to="/wishlist"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Heart className="w-6 h-6" />
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-gray-900 relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
                <button
                  className="md:hidden text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`border-b ${isMenuOpen ? "block" : "hidden md:block"}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row">
            <li className="py-2 md:py-4 md:mr-6">
              <Link
                to="/products"
                className={`${
                  isActive("/products") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 transition-colors`}
              >
                All Products
              </Link>
            </li>
            <li className="py-2 md:py-4 md:mr-6">
              <Link
                to="/sale"
                className={`${
                  isActive("/sale") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 transition-colors`}
              >
                Sale
              </Link>
            </li>
            <li className="py-2 md:py-4 md:mr-6">
              <Link
                to="/locations"
                className={`${
                  isActive("/locations") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 transition-colors`}
              >
                Locations
              </Link>
            </li>
            <li className="py-2 md:py-4 md:mr-6">
              <Link
                to="/warranty"
                className={`${
                  isActive("/warranty") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 transition-colors`}
              >
                Warranty
              </Link>
            </li>
            <li className="py-2 md:py-4 md:mr-6">
              <Link
                to="/contact"
                className={`${
                  isActive("/contact") ? "text-primary-600" : "text-gray-700"
                } hover:text-primary-600 transition-colors`}
              >
                Contact
              </Link>
            </li>
            {userRole === "admin" && (
              <li className="py-2 md:py-4 md:mr-6">
                <Link
                  to="/admin"
                  className={`${
                    isActive("/admin") ? "text-primary-600" : "text-gray-700"
                  } hover:text-primary-600 transition-colors`}
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
