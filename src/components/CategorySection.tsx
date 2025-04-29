import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  color: string;
  action: string;
};

const categories: Category[] = [
  {
    id: "reading",
    title: "просто.читаем",
    description: "Статьи о предпринимательстве, саморазвитии и современных профессиях",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    path: "/reading",
    color: "bg-prosto-blue",
    action: "Читать"
  },
  {
    id: "listening",
    title: "просто.слушаем",
    description: "Подкасты о психологии, карьерных историях и опыте молодых профессионалов",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    path: "/listening",
    color: "bg-prosto-purple",
    action: "Слушать"
  },
  {
    id: "exploring",
    title: "просто.открываем",
    description: "Гайды по выставкам, местам и городским событиям",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    path: "/exploring",
    color: "bg-green-500",
    action: "Открыть"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Основные разделы</h2>
        <p className="text-gray-600 mb-8">Выберите интересующий вас формат контента</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/categories" className="inline-flex items-center text-prosto-blue hover:text-prosto-purple transition-colors font-medium">
            Показать все разделы
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden prosto-card-hover">
      <div className="relative h-48">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover" 
        />
        <div className={`absolute top-4 right-4 ${category.color} text-white px-3 py-1 text-sm rounded-full`}>
          Новое
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            className="border-gray-300 hover:border-prosto-blue text-gray-700 hover:text-prosto-blue"
          >
            {category.action}
          </Button>
          <Link 
            to={category.path} 
            className="text-prosto-blue hover:text-prosto-purple text-sm font-medium"
          >
            Все материалы →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
