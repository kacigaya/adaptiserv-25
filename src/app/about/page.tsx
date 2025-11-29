"use client";

import { TargetIcon, UsersIcon, AwardIcon, HeartIcon, RocketIcon, ShieldCheckIcon } from "lucide-react";
import SplitText from "@/components/text/SplitText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: HeartIcon,
    title: "Proximité",
    description: "Une relation de confiance basée sur l'écoute et la disponibilité pour nos clients.",
    color: "text-red-500 dark:text-red-400"
  },
  {
    icon: AwardIcon,
    title: "Excellence",
    description: "Un engagement constant vers la qualité et l'amélioration continue de nos services.",
    color: "text-yellow-500 dark:text-yellow-400"
  },
  {
    icon: ShieldCheckIcon,
    title: "Intégrité",
    description: "Transparence et honnêteté dans toutes nos interactions commerciales.",
    color: "text-blue-500 dark:text-blue-400"
  },
  {
    icon: RocketIcon,
    title: "Innovation",
    description: "Des solutions modernes et adaptées aux enjeux actuels des entreprises.",
    color: "text-purple-500 dark:text-purple-400"
  }
];

const timeline = [
  {
    year: "2020",
    title: "Création",
    description: "Naissance d'adaptiserv avec une vision : simplifier la vie des entreprises."
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Développement de notre gamme de services et croissance de l'équipe."
  },
  {
    year: "2022",
    title: "Digital",
    description: "Lancement de notre pôle services digitaux et web."
  },
  {
    year: "2023",
    title: "Reconnaissance",
    description: "Plus de 100 entreprises accompagnées avec succès."
  }
];

const stats = [
  { value: "100+", label: "Clients accompagnés" },
  { value: "4", label: "Pôles d'expertise" },
  { value: "15+", label: "Collaborateurs" },
  { value: "98%", label: "Satisfaction client" }
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/40 dark:bg-green-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 relative z-10 text-center">
        <SplitText
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          text="A propos de nous"
        />
        <SplitText
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          text="adaptiserv est une entreprise de services professionnels dédiée à l'accompagnement des entreprises dans leur croissance et leur transformation."
        />
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full w-fit">
              <TargetIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide text-sm">Notre mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Simplifier votre réussite professionnelle
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              Chez adaptiserv, nous croyons que chaque entreprise mérite d'avoir accès à des services professionnels de qualité, quelle que soit sa taille.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Notre mission est de fournir des solutions sur-mesure qui permettent à nos clients de se concentrer sur leur cœur de métier, tout en bénéficiant d'une expertise pointue dans les domaines de l'énergie, du digital, de la communication et du développement commercial.
            </p>
          </div>
          <div className="flex items-center justify-center p-8">
            <div className="relative text-center max-w-sm">
                <div className="absolute top-0 left-0 text-8xl text-gray-200 dark:text-gray-800 font-serif leading-none -translate-x-4 -translate-y-8 select-none">"</div>
                <p className="text-3xl font-serif italic text-gray-800 dark:text-gray-200 relative z-10 leading-snug">
                  Votre succès est notre priorité absolue.
                </p>
                 <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-green-500 rounded-full"></div>
                 </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos valeurs
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Les principes qui guident chacune de nos actions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className={`p-5 rounded-3xl mb-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-4">
                  <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Notre histoire
          </h2>
        </div>
        <div className="relative">
           {/* Line */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>

           <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12"></div>
                
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="w-full md:w-5/12 text-center md:text-left">
                  <div className={`p-6 bg-transparent ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-4xl font-black text-gray-200 dark:text-gray-700 block mb-2">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
           </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Une équipe dédiée
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Notre équipe réunit des professionnels expérimentés et passionnés, chacun expert dans son domaine. Ensemble, nous mettons notre savoir-faire au service de votre réussite.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[280px] bg-gray-200 dark:bg-gray-800 rounded-3xl mb-6 overflow-hidden relative">
                    {/* Placeholder for team image */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
        <div className="text-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Envie de nous rejoindre ou de collaborer ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Que vous soyez une entreprise à la recherche de solutions ou un talent souhaitant rejoindre notre équipe, nous serions ravis d'échanger avec vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push("/contact")}
                className="h-12 px-8 text-lg rounded-full"
              >
                Contactez-nous
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/services")}
                className="h-12 px-8 text-lg rounded-full"
              >
                Découvrir nos services
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
