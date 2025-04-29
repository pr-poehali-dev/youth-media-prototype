import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Headphones, Map } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  type: "article" | "podcast" | "guide";
}

const ArticleCard = ({ title, excerpt, image, category, readTime, type }: ArticleCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "article":
        return <BookOpen className="h-4 w-4 mr-1" />;
      case "podcast":
        return <Headphones className="h-4 w-4 mr-1" />;
      case "guide":
        return <Map className="h-4 w-4 mr-1" />;
      default:
        return <BookOpen className="h-4 w-4 mr-1" />;
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "article":
        return "Читать";
      case "podcast":
        return "Слушать";
      case "guide":
        return "Смотреть";
      default:
        return "Открыть";
    }
  };

  return (
    <Card className="overflow-hidden card-hover border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded-full">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 line-clamp-2">
          {excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <span className="text-sm text-gray-500 flex items-center">
          {getIcon()} {readTime}
        </span>
        <Button variant="ghost" className="text-prosto-blue p-0 h-auto hover:bg-transparent hover:text-prosto-purple">
          {getButtonText()} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const featuredArticles = [
  {
    title: "Как найти свой путь в IT-сфере без опыта работы",
    excerpt: "Пошаговое руководство для новичков, которые хотят построить карьеру в IT",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Карьера",
    readTime: "7 мин",
    type: "article" as const
  },
  {
    title: "5 практик осознанности для снятия стресса",
    excerpt: "Простые техники медитации, которые можно практиковать даже в офисе",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Саморазвитие",
    readTime: "5 мин",
    type: "article" as const
  },
  {
    title: "История успеха: от курьера до технического директора",
    excerpt: "Интервью с Александром, который прошел путь от доставки еды до руководящей должности",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Истории",
    readTime: "12 мин",
    type: "article" as const
  }
];

const featuredPodcasts = [
  {
    title: "Эпизод 42: Выгорание и как с ним бороться",
    excerpt: "Психолог Марина Соколова рассказывает о профессиональном выгорании и методах его преодоления",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Психология",
    readTime: "32 мин",
    type: "podcast" as const
  },
  {
    title: "Эпизод 41: Финансовая грамотность для новичков",
    excerpt: "Основы личных финансов, инвестиций и планирования бюджета для молодых специалистов",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Финансы",
    readTime: "45 мин",
    type: "podcast" as const
  },
  {
    title: "Эпизод 40: Как начать свой бизнес в 20 лет",
    excerpt: "История основателя стартапа, который начал свой бизнес, будучи студентом",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Предпринимательство",
    readTime: "38 мин",
    type: "podcast" as const
  }
];

const featuredGuides = [
  {
    title: "Топ-10 выставок Санкт-Петербурга этой весной",
    excerpt: "Обзор самых интересных культурных событий города на ближайшие месяцы",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Культура",
    readTime: "8 мин",
    type: "guide" as const
  },
  {
    title: "Нескучные места для работы: коворкинги Петербурга",
    excerpt: "Где можно комфортно поработать, провести встречу или найти единомышленников",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Места",
    readTime: "6 мин",
    type: "guide" as const
  },
  {
    title: "Как провести выходные: городские события на уикенд",
    excerpt: "Подборка интересных мероприятий и активностей для отдыха в городе",
    image: "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "События",
    readTime: "4 мин",
    type: "guide" as const
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Свежее на просто.медиа</h2>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="articles" className="text-sm md:text-base">просто.читаем</TabsTrigger>
            <TabsTrigger value="podcasts" className="text-sm md:text-base">просто.слушаем</TabsTrigger>
            <TabsTrigger value="guides" className="text-sm md:text-base">просто.открываем</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-prosto-blue text-prosto-blue hover:bg-prosto-blue/10">
                Все статьи <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="podcasts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPodcasts.map((podcast, index) => (
                <ArticleCard key={index} {...podcast} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-prosto-purple text-prosto-purple hover:bg-prosto-purple/10">
                Все подкасты <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide, index) => (
                <ArticleCard key={index} {...guide} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-prosto-teal text-prosto-teal hover:bg-teal-100/30">
                Все гайды <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedArticles;
