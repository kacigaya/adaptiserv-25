"use client";

import { BatteryChargingIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import { GlobeIcon } from "lucide-react";
import { PrinterIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 max-w-5xl flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/50 px-3 py-1 text-sm text-gray-900 backdrop-blur-xl mb-6 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-100">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Solutions professionnelles sur-mesure
        </div>
        
        <SplitText
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="Propulsez votre entreprise vers de nouveaux sommets"
        />
        
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed"
          text="adaptiserv accompagne les professionnels avec des services d'excellence : optimisation d'énergie, stratégies digitales, impression & design, et force de vente externalisée."
        />

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button 
            onClick={() => router.push("/services")}
            className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Découvrir nos services
          </Button>
          <Button 
            variant="outline"
            onClick={() => router.push("/contact")}
            className="h-12 px-8 text-lg rounded-full border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos domaines d'expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Des solutions complètes pour répondre à tous les besoins de votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="flex flex-col h-full p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group"
            onClick={() => router.push("/services/energie")}
          >
            <div className="mb-6 p-4 dark:bg-yellow-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <BatteryChargingIcon className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Energie
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Optimisation gratuite de vos contrats d'électricité et de gaz pour réduire vos charges fixes.
            </p>
            <div className="flex items-center text-yellow-500 dark:text-yellow-400 font-medium text-sm mt-auto">
              En savoir plus <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            className="flex flex-col h-full p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group"
            onClick={() => router.push("/services/digital")}
          >
            <div className="mb-6 p-4 dark:bg-blue-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <GlobeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Digital
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Création de sites web, applications et stratégies marketing pour booster votre visibilité en ligne.
            </p>
            <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium text-sm mt-auto">
              En savoir plus <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            className="flex flex-col h-full p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group"
            onClick={() => router.push("/services/impression")}
          >
            <div className="mb-6 p-4 dark:bg-purple-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <PrinterIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Impression
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Sérigraphie, flocage et supports de communication pour marquer les esprits sur le terrain.
            </p>
            <div className="flex items-center text-purple-500 dark:text-purple-400 font-medium text-sm mt-auto">
              En savoir plus <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            className="flex flex-col h-full p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group"
            onClick={() => router.push("/services/commercial")}
          >
            <div className="mb-6 p-4 dark:bg-green-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <UserIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Commercial
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Agents commerciaux experts pour dynamiser vos ventes et conquérir de nouveaux marchés.
            </p>
            <div className="flex items-center text-green-500 dark:text-green-400 font-medium text-sm mt-auto">
              En savoir plus <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 dark:bg-gray-800 rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 dark:bg-gray-800 rounded-full -ml-32 -mb-32 opacity-50" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Votre partenaire de confiance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              adaptiserv est bien plus qu'un prestataire de services. Nous sommes un partenaire stratégique engagé dans votre réussite. Notre approche sur-mesure et notre expertise multi-disciplinaire font de nous l'allié idéal pour votre croissance.
            </p>
            <Button 
              onClick={() => router.push("/about")}
              variant="secondary"
              className="h-12 px-8 text-lg rounded-full hover:scale-105 transition-transform duration-200"
            >
              En savoir plus sur nous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
