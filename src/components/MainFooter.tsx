import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-mono font-bold text-white">
                просто<span className="text-prosto-blue">.</span>медиа
              </span>
            </Link>
            <p className="mb-4 text-gray-400">
              Интернет-журнал для молодежи Санкт-Петербурга. Саморазвиваться просто!
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Разделы</h3>
            <ul className="space-y-3">
              <FooterLink href="/reading">просто.читаем</FooterLink>
              <FooterLink href="/listening">просто.слушаем</FooterLink>
              <FooterLink href="/exploring">просто.открываем</FooterLink>
              <FooterLink href="/expressing">просто.раскрываемся</FooterLink>
              <FooterLink href="/bonus">просто.бонус</FooterLink>
              <FooterLink href="/chat">просто.болтаем</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Информация</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">О проекте</FooterLink>
              <FooterLink href="/team">Команда</FooterLink>
              <FooterLink href="/contacts">Контакты</FooterLink>
              <FooterLink href="/advertising">Реклама</FooterLink>
              <FooterLink href="/vacancies">Вакансии</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Контакты</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Санкт-Петербург, наб. канала Грибоедова, 105</p>
              <p>
                <a href="tel:+78001234567" className="hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </p>
              <p>
                <a href="mailto:info@prosto.media" className="hover:text-white transition-colors">
                  info@prosto.media
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} СПб ГБУ «ПРОСТО». Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href} 
      className="bg-gray-800 p-2 rounded-full hover:bg-prosto-blue transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={href} className="hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default MainFooter;
