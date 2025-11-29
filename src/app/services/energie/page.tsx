"use client";

import { BatteryChargingIcon, CheckCircleIcon, TrendingDownIcon, ShieldCheckIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingDownIcon,
    title: "Réduction des coûts",
    description: "Jusqu'à 30% d'économie sur vos factures d'énergie grâce à notre expertise du marché."
  },
  {
    icon: ShieldCheckIcon,
    title: "Service gratuit",
    description: "Aucun frais pour vous - nous sommes rémunérés directement par les fournisseurs d'énergie."
  },
  {
    icon: ClockIcon,
    title: "Gain de temps",
    description: "Nous gérons tout le processus de A à Z, vous n'avez qu'à valider notre proposition."
  }
];

const process = [
  {
    step: "01",
    title: "Audit gratuit",
    description: "Nous analysons vos factures actuelles et votre consommation énergétique."
  },
  {
    step: "02",
    title: "Comparaison",
    description: "Nous comparons les offres de tous les fournisseurs du marché."
  },
  {
    step: "03",
    title: "Négociation",
    description: "Nous négocions les meilleurs tarifs en fonction de votre profil."
  },
  {
    step: "04",
    title: "Mise en place",
    description: "Nous gérons toutes les démarches administratives de changement."
  }
];

const features = [
  "Électricité professionnelle",
  "Gaz naturel",
  "Énergie verte",
  "Contrats multi-sites",
  "Suivi des consommations",
  "Optimisation tarifaire"
];

export default function EnergiePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 dark:bg-yellow-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 text-center relative z-10">
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Courtage en Energie"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="Optimisez vos contrats d'électricité et de gaz sans effort. Notre service gratuit vous garantit les meilleurs tarifs du marché."
        />
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 h-full">
              <div className="p-4 dark:bg-yellow-900 rounded-2xl mb-6">
                <benefit.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre processus
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Simple, transparent et efficace.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-black text-gray-100 dark:text-gray-800 absolute -top-8 -left-4 z-0 transition-colors group-hover:text-yellow-50 dark:group-hover:text-yellow-900/20">
                {item.step}
              </div>
              <div className="relative z-10 pt-8 pl-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos domaines d'expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Demandez votre audit gratuit dès aujourd'hui et découvrez combien vous pourriez économiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/contact")}
              className="h-12 px-8 text-lg rounded-full"
            >
              Demander un audit gratuit
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/services")}
              className="h-12 px-8 text-lg rounded-full"
            >
              Voir tous nos services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
