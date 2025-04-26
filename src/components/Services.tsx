import { MessageSquare, Users, Workflow } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const services = [
  {
    title: "Customer-Facing Chatbots",
    description:
      "24/7 virtual assistants that handle appointment scheduling, answer common pest questions, and qualify leads while you focus on service delivery. Perfect for converting website visitors into paying customers.",
    icon: MessageSquare,
    color: "bg-sky-100:",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
    features: [
      "Automated appointment scheduling and rescheduling",
      "Instant pest identification assistance",
      "Service package recommendations based on customer needs",
      "Emergency service request handling",
      "Seamless handoff to your office staff when needed",
    ],
  },
  {
    title: "Internal Team Assistants",
    description:
      "AI tools that help your technicians and office staff access information instantly, streamline communication, and reduce administrative work. Boost productivity and improve service quality.",
    icon: Users,
    color: "bg-sky-200",
    textColor: "text-sky-700",
    borderColor: "border-sky-300",
    features: [
      "Treatment protocol lookup for technicians in the field",
      "Inventory management and supply ordering assistance",
      "Regulatory compliance and safety information access",
      "Customer history and property details retrieval",
      "Internal knowledge base for training and troubleshooting",
    ],
  },
  {
    title: "Workflow Automations",
    description:
      "Custom AI solutions that automate repetitive tasks like scheduling, routing, billing, and reporting. Save time, reduce errors, and allow your team to focus on delivering exceptional pest control services.",
    icon: Workflow,
    color: "bg-sky-100",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
    features: [
      "Intelligent route optimization for technicians",
      "Automated follow-up scheduling for recurring treatments",
      "Weather-based service rescheduling",
      "Automated billing and payment processing",
      "Custom reporting for business performance metrics",
    ],
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Solutions for Pest Control Companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our specialized AI tools are designed to address the unique
            challenges of pest control businesses, from customer acquisition to
            technician management and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border ${service.borderColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
            >
              <CardHeader className={`${service.color} rounded-t-lg`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${service.textColor}`}
                  >
                    <service.icon size={24} />
                  </div>
                  <CardTitle className={`text-xl ${service.textColor}`}>
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex-grow flex flex-col">
                <CardDescription className="text-slate-600 mb-6">
                  {service.description}
                </CardDescription>
                <div className="mt-auto">
                  <h4 className="font-medium mb-3">
                    Key Benefits for Pest Control:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full ${service.color} ${service.textColor} text-xs`}
                        >
                          ✓
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
