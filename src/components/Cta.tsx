import { Calendar } from "lucide-react";
import { FC } from "react";
import Calendly from "./Calendly";

const Cta: FC = () => {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white relative"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Ready to Automate Your Business with AI?
            </h2>
            <p className="text-white/80 text-lg text-center md:text-left">
              Take the first step towards transforming your business operations.
              Book a free consultation call today.
            </p>
            <Calendly className="bg-white text-sky-600 hover:bg-slate-100 cursor-pointer px-4 py-2 rounded-md font-medium flex flex-row items-center justify-center">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Your Free Call
            </Calendly>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">
              What You&apos;ll Get:
            </h3>
            <ul className="space-y-4">
              {[
                "Personalized assessment of your automation needs",
                "Expert insights on AI implementation strategies",
                "Custom roadmap for your business transformation",
                "Transparent pricing and timeline estimates",
                "No obligation to proceed after consultation",
                "100% satisfaction guarantee or your money back. No questions asked",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1 flex h-6 w-6 min-h-6 min-w-6 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-white/90 mt-0.5">{item}</span>
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
