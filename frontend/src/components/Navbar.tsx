import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';    // Hamburger Icon
import { FaShoppingCart } from 'react-icons/fa'; // Cart Icon
import { AiOutlineUser } from 'react-icons/ai'; // Profile Icon
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Hamburger Menu for mobile */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl lg:hidden focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>

        {/* Logo in the center */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <img src="../assets/shine-logo.png" alt="shine" />
          </Link>
        </div>

        {/* Icons on the right */}
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <a className="text-2xl">
              <FaShoppingCart />
            </a>
          </Link>
          <Link href="/profile">
            <a className="text-2xl">
              <AiOutlineUser />
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/">
                <a className="text-gray-700">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="text-gray-700">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-gray-700">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-gray-700">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu (hidden on small screens) */}
      <div className="hidden lg:flex justify-center space-x-8 mt-2">
        <Link href="/">
          <a className="text-gray-700 hover:text-gray-900">Home</a>
        </Link>
        <Link href="/products">
          <a className="text-gray-700 hover:text-gray-900">Products</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-700 hover:text-gray-900">About</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 hover:text-gray-900">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
