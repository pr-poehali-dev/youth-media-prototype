import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-mono font-bold text-prosto-dark">
              просто<span className="text-prosto-blue">.</span>медиа
            </span>
          </Link>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile onClick={toggleMenu} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const items = [
    { name: "читаем", path: "/reading" },
    { name: "слушаем", path: "/listening" },
    { name: "открываем", path: "/exploring" },
    { name: "раскрываемся", path: "/expressing" },
    { name: "бонус", path: "/bonus" },
    { name: "болтаем", path: "/chat" },
  ];

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-gray-600 hover:text-prosto-purple transition-colors ${
            mobile ? "block py-2 border-b border-gray-100" : ""
          }`}
          onClick={onClick}
        >
          просто.{item.name}
        </Link>
      ))}
    </>
  );
};

export default MainHeader;
