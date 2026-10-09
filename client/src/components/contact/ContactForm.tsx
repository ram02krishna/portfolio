import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();

    setTimeout(() => setIsSuccess(false), 5000);
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-card/95 backdrop-blur-md rounded-[22px] z-10 border border-green-500/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mb-6 shadow-lg shadow-green-500/10 border border-green-500/20"
            >
              <CheckCircle className="h-12 w-12 text-green-500 drop-shadow-md" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-3 font-heading text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Message Sent!
            </h3>
            <p className="text-muted-foreground text-center max-w-sm leading-relaxed">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Full Name"
                      {...field}
                      className="h-14 bg-background/50 backdrop-blur-sm border-border/40 focus:border-primary/60 focus:bg-background/80 hover:border-primary/30 transition-all rounded-xl shadow-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@example.com"
                      {...field}
                      className="h-14 bg-background/50 backdrop-blur-sm border-border/40 focus:border-primary/60 focus:bg-background/80 hover:border-primary/30 transition-all rounded-xl shadow-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Job Opportunity / Recruitment Inquiry"
                    {...field}
                    className="h-14 bg-background/50 backdrop-blur-sm border-border/40 focus:border-primary/60 focus:bg-background/80 hover:border-primary/30 transition-all rounded-xl shadow-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please share the details of the job opportunity..."
                    className="min-h-[140px] bg-background/50 backdrop-blur-sm border-border/40 focus:border-primary/60 focus:bg-background/80 hover:border-primary/30 transition-all rounded-xl resize-none shadow-sm py-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full text-base shadow-xl shadow-primary/20 group hover:shadow-primary/40 mt-4 h-14"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
