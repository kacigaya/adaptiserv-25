"use client";

import { BatteryChargingIcon, UserIcon, GlobeIcon, PrinterIcon, ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "energie",
    title: "Courtage en Energie",
    icon: BatteryChargingIcon,
    color: "yellow",
    shortDescription: "Optimisation gratuite de vos contrats d'électricité et de gaz.",
    description: "Nous analysons vos contrats énergétiques actuels et vous proposons les meilleures offres du marché. Notre service est entièrement gratuit - nous sommes rémunérés par les fournisseurs.",
    features: [
      "Audit gratuit de vos contrats actuels",
      "Comparaison des offres de tous les fournisseurs",
      "Négociation des meilleurs tarifs",
      "Accompagnement administratif",
      "Suivi et optimisation continue"
    ]
  },
  {
    id: "digital",
    title: "Services Digitaux",
    icon: GlobeIcon,
    color: "blue",
    shortDescription: "Laissez-nous gérer votre présence digitale et concrétiser vos rêves.",
    description: "De la création de sites web au marketing digital, nous vous accompagnons dans votre transformation numérique avec des solutions sur-mesure adaptées à vos besoins.",
    features: [
      "Création de sites web et applications",
      "Référencement SEO et SEA",
      "Gestion des réseaux sociaux",
      "Email marketing et automation",
      "Analyse et reporting"
    ]
  },
  {
    id: "impression",
    title: "Sérigraphie & Impressions",
    icon: PrinterIcon,
    color: "purple",
    shortDescription: "Faites-vous remarquer sur le terrain et éclipsez vos concurrents.",
    description: "Des supports de communication professionnels pour valoriser votre image de marque. De la carte de visite au véhicule floqué, nous réalisons tous vos projets.",
    features: [
      "Cartes de visite et papeterie",
      "Flyers, brochures et catalogues",
      "Signalétique et enseignes",
      "Flocage véhicules",
      "Textile personnalisé"
    ]
  },
  {
    id: "commercial",
    title: "Agents Commerciaux",
    icon: UserIcon,
    color: "green",
    shortDescription: "Plus de soucis : nos agents s'occupent de tout !",
    description: "Externalisez votre force de vente avec nos agents commerciaux expérimentés. Nous développons votre chiffre d'affaires tout en vous permettant de vous concentrer sur votre cœur de métier.",
    features: [
      "Prospection B2B et B2C",
      "Prise de rendez-vous qualifiés",
      "Représentation commerciale",
      "Négociation et closing",
      "Reporting et CRM"
    ]
  }
];

export default function ServicesPage() {
  const router = useRouter();

  const getColorClass = (color: string) => {
    switch (color) {
      case "yellow": return "text-yellow-500 dark:text-yellow-400";
      case "blue": return "text-blue-500 dark:text-blue-400";
      case "purple": return "text-purple-500 dark:text-purple-400";
      case "green": return "text-green-500 dark:text-green-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 text-center relative z-10">
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Nos Services"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="Des solutions professionnelles adaptées à chaque étape de votre développement. Découvrez comment nous pouvons vous aider."
        />
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 cursor-pointer group" onClick={() => router.push(`/services/${service.id}`)}>
                 <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className={`p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 ${getColorClass(service.color)}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        {service.title}
                        <ArrowRightIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                    </p>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2 px-4">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                    <span className={`w-8 h-1 rounded-full ${service.color === 'yellow' ? 'bg-yellow-400' : service.color === 'blue' ? 'bg-blue-400' : service.color === 'purple' ? 'bg-purple-400' : 'bg-green-400'}`}></span>
                    Ce que nous proposons
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                        <CheckCircleIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.color === 'yellow' ? 'text-yellow-500' : service.color === 'blue' ? 'text-blue-500' : service.color === 'purple' ? 'text-purple-500' : 'text-green-500'}`} />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="link" 
                    className={`mt-6 px-0 text-lg font-semibold ${service.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-green-600 dark:text-green-400'}`}
                    onClick={() => router.push(`/services/${service.id}`)}
                  >
                    En savoir plus <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="bg-gray-900 dark:bg-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-6">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-gray-300 dark:text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer les solutions les plus adaptées à votre entreprise.
            </p>
            <Button
              onClick={() => router.push("/contact")}
              className="h-14 px-10 text-lg rounded-full bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-white/20"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
