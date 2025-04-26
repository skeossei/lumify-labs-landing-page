import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

const HeadLine: FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-sky-100 text-sky-800">
            AI Solutions for Pest Control Companies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your <span className="text-sky-500">Pest Control</span>{" "}
            Business with AI
          </h1>
          <p className="text-lg text-slate-600 mx-auto max-w-2xl">
            Automate scheduling, improve customer service, and optimize
            technician routes with custom AI solutions designed specifically for
            pest control companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-200 text-sky-700 hover:bg-sky-50"
            >
              See Pest Control Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadLine;
