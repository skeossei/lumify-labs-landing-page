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
    title: "Customer Chatbots",
    description:
      "Customer-facing AI chatbots that enhance your website, improve customer service, and generate leads 24/7. Perfect for answering FAQs, product recommendations, and handling support inquiries.",
    icon: MessageSquare,
    color: "bg-sky-100",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
    features: [
      "24/7 customer support",
      "Lead generation and qualification",
      "FAQ automation",
      "Seamless handoff to employees",
    ],
  },
  {
    title: "Internal Assistants",
    description:
      "Employee-facing AI assistants that streamline internal processes, answer company questions, and provide instant access to knowledge bases. Boost productivity and reduce operational costs.",
    icon: Users,
    color: "bg-sky-200",
    textColor: "text-sky-700",
    borderColor: "border-sky-300",
    features: [
      "Knowledge base integration",
      "Employee onboarding assistance",
      "IT help desk automation",
      "HR policy inquiries",
      "Internal documentation search",
    ],
  },
  {
    title: "Workflow Automations",
    description:
      "Custom AI solutions that automate repetitive tasks, streamline complex workflows, and optimize business processes. Save time, reduce errors, and allow your team to focus on high-value work.",
    icon: Workflow,
    color: "bg-sky-300",
    textColor: "text-sky-800",
    borderColor: "border-sky-400",
    features: [
      "Document processing and extraction",
      "Approval workflow automation",
      "Data entry and validation",
      "Report generation",
      "Cross-system integration",
    ],
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI Automation Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer specialized AI solutions designed to meet your specific
            business needs, from customer-facing chatbots to internal tools and
            workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border ${service.borderColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
            >
              <CardHeader
                className={`${service.color} flex items-center justify-center min-h-[80px]`}
              >
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

              <CardContent className="pt-4 md:pt-6 flex-grow flex flex-col">
                {/* Description Section */}
                <div className="min-h-[90px] md:min-h-[120px]]">
                  <CardDescription className="text-slate-600 md:mb-6">
                    {service.description}
                  </CardDescription>
                </div>

                {/* Key Benefits Section */}
                <div>
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`mr-2 mt-1 flex h-6 w-6 min-h-6 min-w-6 items-center justify-center rounded-full ${service.color} ${service.textColor} text-sm font-bold`}
                        >
                          ✓
                        </span>
                        <span className="text-sm mt-1">{feature}</span>
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
