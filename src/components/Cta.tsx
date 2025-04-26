import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FC } from "react";

const Cta: FC = () => {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white relative"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Automate Your Pest Control Business?
            </h2>
            <p className="text-white/80 text-lg">
              Take the first step towards transforming your pest control
              operations. Book a free consultation call today.
            </p>
            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-slate-100"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Your Free Call
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">
              What Pest Control Companies Get:
            </h3>
            <ul className="space-y-4">
              {[
                "Personalized assessment of your pest control business needs",
                "Expert insights on AI implementation for your specific operation",
                "Custom roadmap for your business transformation",
                "Transparent pricing and timeline estimates",
                "No obligation to proceed after consultation",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
