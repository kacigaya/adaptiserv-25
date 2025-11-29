"use client";

import SplitText from "@/components/text/SplitText";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/40 dark:bg-green-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 relative z-10">
        <SplitText
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white"
          text="Politique de Confidentialité"
        />

        <div className="p-8 md:p-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center italic">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Chez adaptiserv, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">2. Données collectées</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Nous pouvons collecter les types de données suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Informations d'identification (nom, prénom, adresse email)</li>
                <li>Coordonnées professionnelles (entreprise, fonction, téléphone)</li>
                <li>Données de navigation (pages visitées, durée de visite)</li>
                <li>Informations techniques (adresse IP, type de navigateur)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">3. Utilisation des données</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous fournir nos services et vous accompagner</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Nos intérêts légitimes (amélioration des services)</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">5. Conservation des données</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux délais légaux de conservation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">6. Partage des données</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Nos prestataires de services (hébergement, email)</li>
                <li>Nos partenaires commerciaux (avec votre consentement)</li>
                <li>Les autorités compétentes (obligations légales)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">7. Vos droits</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : contact@adaptiserv.fr
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">8. Cookies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">9. Sécurité</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">10. Contact</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, vous pouvez nous contacter à l'adresse : contact@adaptiserv.fr
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
