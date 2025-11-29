"use client";

import { PrinterIcon, CreditCardIcon, BookOpenIcon, MapPinIcon, CarIcon, ShirtIcon, CheckCircleIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CreditCardIcon,
    title: "Cartes de visite",
    description: "Impressions haute qualité sur différents supports et finitions pour une première impression mémorable."
  },
  {
    icon: BookOpenIcon,
    title: "Flyers & Brochures",
    description: "Supports de communication imprimés pour vos événements, campagnes et présentations."
  },
  {
    icon: MapPinIcon,
    title: "Signalétique",
    description: "Enseignes, panneaux, banderoles et tout type de signalétique intérieure et extérieure."
  },
  {
    icon: CarIcon,
    title: "Flocage véhicules",
    description: "Transformez vos véhicules en supports publicitaires mobiles avec un covering professionnel."
  },
  {
    icon: ShirtIcon,
    title: "Textile personnalisé",
    description: "T-shirts, polos, casquettes et vêtements de travail personnalisés à vos couleurs."
  }
];

const products = [
  "Cartes de visite",
  "Flyers A5/A6",
  "Brochures",
  "Catalogues",
  "Affiches",
  "Roll-up",
  "Banderoles",
  "Enseignes",
  "Stickers",
  "Flocage auto",
  "T-shirts",
  "Goodies"
];

const qualities = [
  {
    title: "Qualité premium",
    description: "Matériaux de première qualité et finitions soignées pour un rendu professionnel."
  },
  {
    title: "Délais rapides",
    description: "Production express disponible pour vos projets urgents."
  },
  {
    title: "Prix compétitifs",
    description: "Tarifs dégressifs selon les quantités, demandez un devis personnalisé."
  }
];

export default function ImpressionPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 text-center relative z-10">
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Sérigraphie & Impressions"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="Des supports de communication professionnels pour valoriser votre image. Qualité, créativité et rapidité sont nos maîtres-mots."
        />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col p-8 h-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300">
              <div className="p-4 dark:bg-purple-900 rounded-2xl w-fit mb-6">
                <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos produits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualities Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi nous choisir
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((quality, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {quality.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comment ça marche
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Votre projet", desc: "Décrivez-nous votre besoin et vos attentes" },
            { step: "02", title: "Devis gratuit", desc: "Nous vous envoyons un devis détaillé" },
            { step: "03", title: "Validation BAT", desc: "Validation du Bon À Tirer avant production" },
            { step: "04", title: "Livraison", desc: "Production et livraison dans les délais" }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-black text-gray-100 dark:text-gray-800 absolute -top-8 -left-4 z-0 transition-colors group-hover:text-purple-50 dark:group-hover:text-purple-900/20">
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

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Un projet d'impression ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Demandez votre devis gratuit et recevez une proposition personnalisée sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/contact")}
              className="h-12 px-8 text-lg rounded-full"
            >
              Demander un devis
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
