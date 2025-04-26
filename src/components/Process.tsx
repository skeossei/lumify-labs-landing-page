import { Calendar, Search, Code, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const processSteps = [
  {
    id: 1,
    title: "Book a Call",
    description:
      "Schedule a consultation where we discuss your pest control business needs and identify automation opportunities specific to your operation.",
    icon: Calendar,
    color: "bg-sky-100",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
  },
  {
    id: 2,
    title: "Research",
    description:
      "We analyze your pest control workflows, scheduling systems, and customer interaction points to design the perfect AI automation solution for your specific needs.",
    icon: Search,
    color: "bg-sky-200",
    textColor: "text-sky-700",
    borderColor: "border-sky-300",
  },
  {
    id: 3,
    title: "Implement",
    description:
      "Our team develops and integrates custom AI solutions that seamlessly fit into your existing pest control business processes and software systems.",
    icon: Code,
    color: "bg-sky-300",
    textColor: "text-sky-800",
    borderColor: "border-sky-400",
  },
  {
    id: 4,
    title: "Deploy & Fine-tune",
    description:
      "We launch your solution and continuously optimize it based on performance data, seasonal pest trends, and your feedback.",
    icon: Rocket,
    color: "bg-sky-400",
    textColor: "text-sky-900",
    borderColor: "border-sky-500",
  },
];

const Process: FC = () => {
  return (
    <section id="process" className="py-20 px-4 bg-slate-50 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI Implementation Process
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We follow a proven 4-step methodology to deliver AI automation
            solutions that drive real results for pest control companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <Card
              key={step.id}
              className={`border ${step.borderColor} hover:shadow-md transition-all duration-300`}
            >
              <CardHeader
                className={`${step.color} rounded-t-lg min-h-[70px] flex items-center justify-between`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${step.textColor}`}
                >
                  <step.icon size={24} />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </CardHeader>

              <CardContent>
                <CardTitle className={`text-xl mb-2 ${step.textColor}`}>
                  {step.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
