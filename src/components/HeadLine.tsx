import { ArrowRight, Clock } from "lucide-react"; // ⬅️ Added Clock import
import { FC } from "react";
import Calendly from "./Calendly";

const HeadLine: FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-sky-100 text-sky-800">
            AI Solutions for Pest Control Companies
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your <span className="text-sky-500">Pest Control</span>{" "}
            Business with AI
          </h1>
          <p className="text-lg text-slate-600 mx-auto max-w-2xl">
            Automate scheduling, improve customer service, and optimize
            workflows with custom AI solutions designed specifically for pest
            control companies.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center">
            <Calendly className="bg-sky-500 hover:bg-sky-600 text-white cursor-pointer px-4 py-2 rounded-md font-medium flex flex-row items-center">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Calendly>
          </div>
          {/* ⬇️ NEW CLOCK ROW */}
          <div className="flex items-center justify-center text-slate-500 text-sm gap-2">
            <Clock className="w-4 h-4" />
            <span>No-Pressure 30-min Call</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadLine;
