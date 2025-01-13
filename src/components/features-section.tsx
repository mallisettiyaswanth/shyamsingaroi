import { Award, Gift, UserPlus, Truck } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function FeaturesSection() {
  const features: FeatureCard[] = [
    {
      title: "Guaranteed Quality",
      description: "Premium Quality Guaranteed on Every Product",
      icon: Award,
      color: "bg-blue-900/90",
    },
    {
      title: "Festive Offers",
      description: "Special Discounts on Festive Collections",
      icon: Gift,
      color: "bg-sky-700/90",
    },
    {
      title: "Member Discounts",
      description: "Sign Up and Enjoy Exclusive Member-Only Discounts",
      icon: UserPlus,
      color: "bg-emerald-600/90",
    },
    {
      title: "Free Shipping",
      description: "Free Shipping on All Orders Above ₹2,000",
      icon: Truck,
      color: "bg-gray-800/90",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl ${feature.color} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex flex-col h-full space-y-4">
                <feature.icon className="w-10 h-10 text-white/90" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white lg:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
