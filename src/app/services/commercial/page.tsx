"use client";

import { UserIcon, TargetIcon, PhoneCallIcon, HandshakeIcon, ClipboardListIcon, TrendingUpIcon, CheckCircleIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TargetIcon,
    title: "Prospection",
    description: "Identification et qualification de prospects B2B et B2C selon vos critères cibles."
  },
  {
    icon: PhoneCallIcon,
    title: "Prise de RDV",
    description: "Génération de rendez-vous qualifiés pour votre équipe commerciale."
  },
  {
    icon: HandshakeIcon,
    title: "Représentation",
    description: "Nos agents représentent votre entreprise sur le terrain avec professionnalisme."
  },
  {
    icon: ClipboardListIcon,
    title: "Négociation",
    description: "Conduite des négociations et closing des ventes en votre nom."
  },
  {
    icon: TrendingUpIcon,
    title: "Reporting",
    description: "Suivi détaillé des performances et intégration CRM pour un pilotage optimal."
  }
];

const benefits = [
  {
    title: "Flexibilité",
    description: "Adaptez votre force de vente selon vos besoins saisonniers."
  },
  {
    title: "Expertise",
    description: "Des commerciaux formés et expérimentés dans votre secteur."
  },
  {
    title: "Économies",
    description: "Pas de charges fixes, payez uniquement à la performance."
  }
];

const sectors = [
  "Services aux entreprises",
  "BTP & Immobilier",
  "Energie",
  "Télécoms",
  "Assurances",
  "Digital"
];

export default function CommercialPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-100/40 dark:bg-green-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-8">
          <UserIcon className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Agents Commerciaux"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="Externalisez votre force de vente et concentrez-vous sur votre cœur de métier. Nos agents développent votre chiffre d'affaires."
        />
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 h-full">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">{String(idx + 1).padStart(2, '0')}</span>
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

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos prestations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col p-8 h-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300">
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl w-fit mb-6">
                <service.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Secteurs d'intervention
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre approche
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Brief", desc: "Compréhension de vos produits et cibles" },
            { step: "02", title: "Stratégie", desc: "Définition du plan d'action commercial" },
            { step: "03", title: "Action", desc: "Déploiement de nos agents sur le terrain" },
            { step: "04", title: "Résultats", desc: "Reporting et optimisation continue" }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-black text-gray-100 dark:text-gray-800 absolute -top-8 -left-4 z-0 transition-colors group-hover:text-green-50 dark:group-hover:text-green-900/20">
                {item.step}
              </div>
              <div className="relative z-10 pt-8 pl-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Clients satisfaits" },
            { value: "15", label: "Agents terrain" },
            { value: "98%", label: "Taux de satisfaction" },
            { value: "24h", label: "Délai de réponse" }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à développer vos ventes ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Discutons de vos objectifs commerciaux et construisons ensemble une stratégie gagnante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/contact")}
              className="h-12 px-8 text-lg rounded-full"
            >
              Prendre rendez-vous
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
