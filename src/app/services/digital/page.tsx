"use client";

import SpotlightCard from "@/components/card/SpotlightCard";
import { GlobeIcon, CodeIcon, SearchIcon, ShareIcon, MailIcon, BarChartIcon, CheckCircleIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CodeIcon,
    title: "Création Web",
    description: "Sites vitrine, e-commerce, applications web sur-mesure avec les dernières technologies."
  },
  {
    icon: SearchIcon,
    title: "Référencement SEO/SEA",
    description: "Optimisation pour les moteurs de recherche et campagnes publicitaires Google Ads."
  },
  {
    icon: ShareIcon,
    title: "Réseaux Sociaux",
    description: "Gestion de vos comptes, création de contenu et stratégies d'engagement."
  },
  {
    icon: MailIcon,
    title: "Email Marketing",
    description: "Campagnes email, newsletters et automation pour fidéliser vos clients."
  },
  {
    icon: BarChartIcon,
    title: "Analytics",
    description: "Suivi des performances, tableaux de bord et recommandations stratégiques."
  }
];

const technologies = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "WordPress",
  "Shopify",
  "Google Analytics",
  "Meta Business",
  "Mailchimp"
];

const portfolio = [
  {
    title: "Sites Vitrine",
    description: "Présentation professionnelle de votre activité"
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne performantes"
  },
  {
    title: "Applications",
    description: "Solutions métier sur-mesure"
  }
];

export default function DigitalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 text-center relative z-10">
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Services Digitaux"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="Développez votre présence en ligne avec nos solutions digitales sur-mesure. Du site web au marketing digital."
        />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col p-8 h-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300">
              <div className="p-4 dark:bg-blue-900 rounded-2xl w-fit mb-6">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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

      {/* Portfolio Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos réalisations
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Des projets concrets pour des résultats tangibles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-800 shadow-sm">
                <span className="text-gray-400 dark:text-gray-600 text-6xl font-black opacity-20">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies maîtrisées
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre méthodologie
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Découverte", desc: "Analyse de vos besoins et objectifs" },
            { step: "02", title: "Conception", desc: "Design et architecture de la solution" },
            { step: "03", title: "Développement", desc: "Réalisation et tests approfondis" },
            { step: "04", title: "Lancement", desc: "Mise en ligne et accompagnement" }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
               <div className="text-8xl font-black text-gray-100 dark:text-gray-800 absolute -top-8 -left-4 z-0 transition-colors group-hover:text-blue-50 dark:group-hover:text-blue-900/20">
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
            Prêt à booster votre présence digitale ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Discutons de votre projet et trouvons ensemble les solutions adaptées à vos ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/contact")}
              className="h-12 px-8 text-lg rounded-full"
            >
              Démarrer un projet
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
