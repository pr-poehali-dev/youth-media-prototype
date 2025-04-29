import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и информация */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-sans font-bold text-prosto-dark">
                просто<span className="text-prosto-blue">.</span>медиа
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Интернет-журнал для тех, кто хочет саморазвиваться и узнавать новое без сложностей.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-prosto-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-prosto-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-prosto-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-prosto-blue transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Разделы */}
          <div>
            <h4 className="font-bold text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/reading" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.читаем
                </Link>
              </li>
              <li>
                <Link to="/listening" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.слушаем
                </Link>
              </li>
              <li>
                <Link to="/exploring" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.открываем
                </Link>
              </li>
              <li>
                <Link to="/expressing" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.раскрываемся
                </Link>
              </li>
              <li>
                <Link to="/bonus" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.бонус
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  просто.болтаем
                </Link>
              </li>
            </ul>
          </div>

          {/* О проекте */}
          <div>
            <h4 className="font-bold text-lg mb-4">О проекте</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  Партнерам
                </Link>
              </li>
              <li>
                <Link to="/advertising" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  Реклама
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Санкт-Петербург, ул. Примерная, д. 123
              </li>
              <li>
                <a href="tel:+78123456789" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  +7 (812) 345-67-89
                </a>
              </li>
              <li>
                <a href="mailto:info@prostomedia.ru" className="text-gray-600 hover:text-prosto-blue transition-colors">
                  info@prostomedia.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} просто.медиа — Молодежный интернет-журнал СПб ГБУ «ПРОСТО»
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-prosto-blue transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-prosto-blue transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
