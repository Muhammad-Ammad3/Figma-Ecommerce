import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { CartContext } from "../context/CartContext";
import logo from "../../thumbnail/logo.png"

const Navbar = () => {
  const { cartItem, addItemToCart } = useContext(CartContext);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between h-24 bg-white shadow-md p-4">
        <div className="flex items-center">
          <img
            className="w-20 h-auto mr-2 ml-7"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Furniro
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-lg text-gray-600 hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/Shop"
            className="text-lg text-gray-600 hover:text-blue-500"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="text-lg text-gray-600 hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="text-lg text-gray-600 hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-10 px-4">
          {/* <button>
      <UserOutlined className="text-2xl hover:text-blue-500"  />
      </button>
      <SearchOutlined className="text-2xl hover:text-blue-500" />
      <HeartOutlined className="text-2xl hover:text-blue-500" /> */}
          <Link to="/Cart">
            <Badge count={cartItem.length}>
              <ShoppingCartOutlined className="text-2xl hover:text-blue-500" />
            </Badge>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-500"
          >
            <MenuOutlined className="text-3xl" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mt-2 bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            <Link to="/" className="text-lg text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link
              to="/Shop"
              className="text-lg text-gray-600 hover:text-blue-500"
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="text-lg text-gray-600 hover:text-blue-500"
            >
              Blog
            </Link>
            <Link
              to="/Contact"
              className="text-lg text-gray-600 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-around p-4 bg-white shadow-md">
            <UserOutlined className="text-2xl hover:text-blue-500" />
            <SearchOutlined className="text-2xl hover:text-blue-500" />
            <HeartOutlined className="text-2xl hover:text-blue-500" />
            <Link to="/Cart">
              <Badge count={cartItem.length}>
                <ShoppingCartOutlined className="text-2xl hover:text-blue-500" />
              </Badge>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
