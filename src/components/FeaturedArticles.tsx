import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";

type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  comments: number;
  likes: number;
  slug: string;
};

const articles: Article[] = [
  {
    id: "1",
    title: "10 навыков успешного фрилансера в 2025 году",
    description: "Какие компетенции необходимо освоить, чтобы быть конкурентоспособным на рынке удалённой работы",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "просто.читаем",
    readTime: "7 мин",
    comments: 23,
    likes: 89,
    slug: "freelance-skills-2025"
  },
  {
    id: "2",
    title: "Выгорание: как распознать и что делать",
    description: "Психолог о причинах профессионального выгорания и способах восстановления ресурсов",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "просто.слушаем",
    readTime: "35 мин",
    comments: 47,
    likes: 132,
    slug: "burnout-prevention"
  },
  {
    id: "3",
    title: "Малоизвестные музеи Петербурга: гид по скрытым жемчужинам",
    description: "Пять удивительных музеев города, о которых знают не все",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "просто.открываем",
    readTime: "12 мин",
    comments: 18,
    likes: 76,
    slug: "hidden-spb-museums"
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Популярное сейчас</h2>
            <p className="text-gray-600 mt-2">Самые читаемые материалы недели</p>
          </div>
          <Link to="/popular">
            <Button variant="outline">Все популярные</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="overflow-hidden prosto-card-hover">
      <div className="relative h-48">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-black/30">
            {article.category}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-2">{article.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex text-sm text-gray-500 gap-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {article.readTime}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {article.comments}
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {article.likes}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link 
          to={`/article/${article.slug}`}
          className="text-prosto-blue hover:text-prosto-purple font-medium"
        >
          Читать полностью
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FeaturedArticles;
