import { Search, Languages, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Project Analysis",
    description: "We assess your requirements, timeline, and select the perfect translator with industry expertise.",
  },
  {
    icon: Languages,
    title: "Expert Translation",
    description: "Native-speaking linguists with subject matter expertise translate your content accurately.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Review",
    description: "Independent reviewers verify accuracy, consistency, and cultural appropriateness.",
  },
  {
    icon: Rocket,
    title: "Final Delivery",
    description: "Receive your translated content in your preferred format, ready for immediate use.",
  },
];

export default function QualityProcess() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Quality Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project follows our proven four-step quality assurance process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 text-8xl font-bold text-muted/20">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

