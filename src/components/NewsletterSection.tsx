import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, введите корректный email" }),
});

const NewsletterSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // В реальном приложении здесь был бы запрос к API
    console.log(values);
    form.reset();
    // Показать сообщение об успешной подписке
    alert("Вы успешно подписались на рассылку!");
  }

  return (
    <section className="py-16 bg-gradient-to-r from-prosto-blue/10 to-prosto-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишись на рассылку</h2>
          <p className="text-lg text-gray-600 mb-8">
            Получай самые интересные материалы, анонсы новых статей и приглашения на мероприятия
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 mx-auto max-w-md">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input 
                        placeholder="Ваш email" 
                        className="w-full h-12 rounded-lg" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="h-12 px-8 bg-prosto-purple hover:bg-prosto-purple/90 text-white"
              >
                Подписаться
              </Button>
            </form>
          </Form>
          
          <p className="mt-4 text-sm text-gray-500">
            Подписываясь, вы соглашаетесь с нашей политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
