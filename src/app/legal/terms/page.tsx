"use client";

import SplitText from "@/components/text/SplitText";

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 relative z-10">
        <SplitText
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white"
          text="Conditions Générales d'Utilisation"
        />

        <div className="p-8 md:p-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center italic">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">1. Présentation du site</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Le site adaptiserv.fr est édité par adaptiserv, société spécialisée dans les services aux entreprises (courtage en énergie, services digitaux, impression et agents commerciaux).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                L'utilisation de ce site implique l'acceptation pleine et entière des présentes conditions générales d'utilisation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">2. Accès au site</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais supportés pour accéder au service (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                adaptiserv met tout en œuvre pour offrir un accès au site 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d'événement hors du contrôle d'adaptiserv, et sous réserve des éventuelles pannes et interventions de maintenance nécessaires.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                L'ensemble des éléments figurant sur le site (textes, graphiques, logos, icônes, images, clips audio et vidéo, logiciels) est la propriété exclusive d'adaptiserv ou de ses partenaires.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l'autorisation préalable écrite d'adaptiserv, est strictement interdite.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">4. Services proposés</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                adaptiserv propose les services suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Courtage en énergie (électricité et gaz)</li>
                <li>Services digitaux (création web, SEO, marketing digital)</li>
                <li>Sérigraphie et impressions</li>
                <li>Mise à disposition d'agents commerciaux</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Les conditions spécifiques à chaque service font l'objet de contrats séparés établis sur mesure avec chaque client.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">5. Responsabilité</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                adaptiserv s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, adaptiserv ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                adaptiserv décline toute responsabilité en cas d'interruption ou d'inaccessibilité du site, de survenance de bugs ou de tout dommage résultant d'actes frauduleux de tiers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">6. Liens hypertextes</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Le site peut contenir des liens vers d'autres sites. adaptiserv n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                La création de liens hypertextes vers le site adaptiserv.fr est soumise à l'accord préalable écrit d'adaptiserv.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">7. Protection des données personnelles</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Les informations relatives au traitement des données personnelles sont détaillées dans notre Politique de Confidentialité accessible sur ce site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">8. Droit applicable</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Les présentes conditions générales d'utilisation sont régies par le droit français. Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">9. Modification des CGU</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                adaptiserv se réserve le droit de modifier les présentes conditions générales d'utilisation à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">10. Contact</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour toute question relative aux présentes conditions générales d'utilisation, vous pouvez nous contacter à l'adresse : contact@adaptiserv.fr
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
