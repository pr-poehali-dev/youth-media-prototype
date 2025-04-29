import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Простым языком —
              <br /> о том, что нравится
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Интернет-журнал для тех, кто хочет саморазвиваться,
              самореализовываться и узнавать новое без сложностей. Потому что
              саморазвиваться — просто.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-prosto-blue hover:bg-blue-600 text-white">
                Подписаться
              </Button>
              <Button
                variant="outline"
                className="border-prosto-purple text-prosto-purple hover:bg-prosto-purple hover:text-white"
              >
                Все рубрики
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -z-10 right-0 top-0 h-72 w-72 rounded-full bg-prosto-blue/20 blur-3xl"></div>
              <div className="absolute -z-10 left-0 bottom-0 h-72 w-72 rounded-full bg-prosto-purple/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Молодежная команда"
                className="relative rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
