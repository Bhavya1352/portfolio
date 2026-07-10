import React, { useState } from "react";
import { Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "bhavyamishra698@gmail.com",
    href: "mailto:bhavyamishra698@gmail.com",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "bhavya-mishra-7a3b09324",
    href: "https://linkedin.com/in/bhavya-mishra-7a3b09324",
    accent: "text-accent",
    bg: "bg-accent/10",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
    accent: "text-primary",
    bg: "bg-primary/10",
  },
];

const Contact = () => {
  const headingReveal = useScrollReveal();
  const formReveal = useScrollReveal({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.projectType.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all blanks in the sentence.");
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE" || accessKey.trim() === "") {
      toast.error("Web3Forms API key is missing. Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: `Project Type/Subject: ${formData.projectType}\n\nMessage Detail: ${formData.message}`,
          from_name: "Portfolio Visitor",
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you! Your inquiry has been sent successfully.");
        setFormData({ name: "", projectType: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred while sending your message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Heading and Contact Cards */}
          <div
            ref={headingReveal.ref}
            className={`lg:col-span-5 space-y-6 sm:space-y-8 reveal-left ${
              headingReveal.isVisible ? "visible" : ""
            }`}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground">
                Let's <span className="font-serif italic font-bold text-primary">Connect</span>
              </h2>
              <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
              <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed font-normal">
                If you prefer narrative paragraphs over boring forms, use this builder. Otherwise, feel free to drop a line directly!
              </p>
            </div>

            {/* Contact Details stack */}
            <div className="space-y-3.5 sm:space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all shadow-sm hover-lift magnetic-item"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.accent}`} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-0.5 whitespace-nowrap"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Natural Language Narrative Form */}
          <div
            ref={formReveal.ref}
            className={`lg:col-span-7 reveal-right ${formReveal.isVisible ? "visible" : ""}`}
          >
            <Card className="rounded-2xl bg-card border border-border/80 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 text-left">
                  {/* Narrative Sentence */}
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground/70 mb-4 font-bold select-none">
                      (Fill in the shaded blanks to write a message)
                    </p>
                    <div className="leading-[2.2] sm:leading-[2.6] md:leading-[3] text-base sm:text-lg md:text-xl text-foreground/80 font-serif font-light">
                      Hello Bhavya, my name is{" "}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="your name"
                        required
                        disabled={isSubmitting}
                        className="bg-primary/5 hover:bg-primary/10 focus:bg-primary/10 border-b-2 border-dashed border-primary/40 focus:border-solid focus:border-primary outline-none px-2 py-0.5 rounded-md text-foreground placeholder:text-muted-foreground/50 transition-all w-full max-w-[8rem] sm:max-w-[11rem] font-serif italic text-primary"
                      />
                      , and I am interested in collaborating with you on a{" "}
                      <input
                        type="text"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="web development"
                        required
                        disabled={isSubmitting}
                        className="bg-primary/5 hover:bg-primary/10 focus:bg-primary/10 border-b-2 border-dashed border-primary/40 focus:border-solid focus:border-primary outline-none px-2 py-0.5 rounded-md text-foreground placeholder:text-muted-foreground/50 transition-all w-full max-w-[10rem] sm:max-w-[13rem] font-serif italic text-primary"
                      />{" "}
                      project. You can reach out to me at my email address{" "}
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your email address"
                        required
                        disabled={isSubmitting}
                        className="bg-primary/5 hover:bg-primary/10 focus:bg-primary/10 border-b-2 border-dashed border-primary/40 focus:border-solid focus:border-primary outline-none px-2 py-0.5 rounded-md text-foreground placeholder:text-muted-foreground/50 transition-all w-full max-w-[11rem] sm:max-w-[15rem] font-serif italic text-primary"
                      />
                      . Here is a brief detail of what I am thinking:{" "}
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="describe your project details, goals, or questions here..."
                        rows={2}
                        required
                        disabled={isSubmitting}
                        className="bg-primary/5 hover:bg-primary/10 focus:bg-primary/10 border-b-2 border-dashed border-primary/40 focus:border-solid focus:border-primary outline-none px-2 py-1 rounded-md text-foreground placeholder:text-muted-foreground/50 transition-all w-full resize-none font-serif italic text-primary mt-3 block h-auto align-bottom leading-relaxed"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm uppercase tracking-widest"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
