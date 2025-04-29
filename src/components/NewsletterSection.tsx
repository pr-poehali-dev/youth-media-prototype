import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика подписки
    console.log("Subscribed with:", email);
    setEmail("");
    // Можно добавить уведомление о успешной подписке
  };
  
  return (
    <section className="py-12 prosto-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Получайте лучшие материалы на почту</h2>
          <p className="text-lg mb-8 opacity-90">
            Никакого спама, только отборные статьи и новости один раз в неделю.
            Саморазвиваться — просто!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border-white/30 placeholder:text-white/50 text-white"
            />
            <Button type="submit" className="bg-white text-prosto-purple hover:bg-white/90 font-medium">
              Подписаться
            </Button>
          </form>
          
          <p className="mt-4 text-sm opacity-75">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
