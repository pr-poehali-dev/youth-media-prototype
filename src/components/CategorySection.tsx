import { ArrowRight, BookOpen, Headphones, Map, LucideIcon, Gift, MessageSquare } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  link: string;
  gradient: string;
};

const CategoryCard = ({ title, description, icon, color, link, gradient }: CategoryCardProps) => {
  return (
    <Link to={link} className="block">
      <div 
        className={`p-6 rounded-2xl card-hover h-full ${gradient} border border-gray-100`}
      >
        <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-4 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">просто.{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-prosto-blue font-medium">
          Перейти <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

const categories = [
  {
    title: "читаем",
    description: "Статьи о предпринимательстве, саморазвитии и современных профессиях",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    color: "bg-prosto-blue",
    link: "/reading",
    gradient: "bg-gradient-to-br from-white to-blue-50"
  },
  {
    title: "слушаем",
    description: "Подкасты о психологии, карьерных историях и опыте молодых профессионалов",
    icon: <Headphones className="h-6 w-6 text-white" />,
    color: "bg-prosto-purple",
    link: "/listening",
    gradient: "bg-gradient-to-br from-white to-purple-50"
  },
  {
    title: "открываем",
    description: "Гайды по выставкам, интересным местам и городским событиям",
    icon: <Map className="h-6 w-6 text-white" />,
    color: "bg-prosto-teal",
    link: "/exploring",
    gradient: "bg-gradient-to-br from-white to-teal-50"
  },
  {
    title: "раскрываемся",
    description: "Тесты, опросы и викторины для самопознания и развития",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    color: "bg-pink-500",
    link: "/expressing",
    gradient: "bg-gradient-to-br from-white to-pink-50"
  },
  {
    title: "бонус",
    description: "Обои для рабочего стола, шаблоны и printable-календари",
    icon: <Gift className="h-6 w-6 text-white" />,
    color: "bg-amber-500",
    link: "/bonus",
    gradient: "bg-gradient-to-br from-white to-amber-50"
  },
  {
    title: "болтаем",
    description: "Форум для обсуждения и общения с единомышленниками",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    color: "bg-emerald-500",
    link: "/chat",
    gradient: "bg-gradient-to-br from-white to-emerald-50"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Наши рубрики</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
