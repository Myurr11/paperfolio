import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { SparkleIcon } from "@/components/SparkleIcon";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-paper-yellow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-paper-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-paper-blue/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-paper-yellow rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-paper-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-paper-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something <span className="text-paper-blue font-semibold">extraordinary</span> together
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="relative group">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-paper-yellow via-paper-pink to-paper-blue rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative bg-background/95 backdrop-blur-md border-4 border-foreground rounded-[3rem] p-8 md:p-12 shadow-[8px_8px_0px_hsl(var(--foreground))] hover:shadow-[16px_16px_0px_hsl(var(--foreground))] transition-all duration-500 hover:scale-105">
            
            {/* Floating Sparkles */}
            <div className="absolute -top-3 -right-3 text-paper-yellow animate-float">
              <SparkleIcon className="w-12 h-12" />
            </div>
            <div className="absolute -bottom-3 -left-3 text-paper-pink animate-float" style={{ animationDelay: '1.5s' }}>
              <SparkleIcon className="w-10 h-10" />
            </div>
            <div className="absolute top-4 -right-6 text-paper-blue animate-float" style={{ animationDelay: '2.5s' }}>
              <SparkleIcon className="w-8 h-8" />
            </div>
            
            <div className="text-center space-y-8 relative z-10">
              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {/* Email */}
                <div className="group/contact bg-white border-2 border-foreground rounded-2xl p-6 hover:bg-paper-yellow hover:scale-105 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all duration-300 cursor-pointer">
                  <div className="bg-paper-yellow border-2 border-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover/contact:bg-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground group-hover/contact:text-foreground">joshimayur1110@gmail.com</p>
                </div>

                {/* Phone */}
                <div className="group/contact bg-white border-2 border-foreground rounded-2xl p-6 hover:bg-paper-pink hover:scale-105 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all duration-300 cursor-pointer">
                  <div className="bg-paper-pink border-2 border-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover/contact:bg-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground group-hover/contact:text-foreground">+91 7420918545</p>
                </div>

                {/* Location */}
                <div className="group/contact bg-white border-2 border-foreground rounded-2xl p-6 hover:bg-paper-blue hover:scale-105 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all duration-300 cursor-pointer">
                  <div className="bg-paper-blue border-2 border-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover/contact:bg-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground group-hover/contact:text-foreground">Mumbai, India</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-8 border-t border-foreground/20">
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Have a project in mind? Let's discuss how we can turn your vision into reality with cutting-edge technology and creative solutions.
                </p>
               </div> 
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-foreground rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-foreground rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};