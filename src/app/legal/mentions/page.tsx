"use client";

import SplitText from "@/components/text/SplitText";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gray-100/50 dark:bg-gray-800/20 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 max-w-4xl mt-10 relative z-10">
        <SplitText
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white"
          text="Mentions Légales"
        />

        <div className="p-8 md:p-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">1. Éditeur du site</h2>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
                <p><strong>Raison sociale :</strong> adaptiserv</p>
                <p><strong>Forme juridique :</strong> [A compléter]</p>
                <p><strong>Capital social :</strong> [A compléter]</p>
                <p><strong>Siège social :</strong> [A compléter]</p>
                <p><strong>SIRET :</strong> [A compléter]</p>
                <p><strong>RCS :</strong> [A compléter]</p>
                <p><strong>Numéro de TVA :</strong> [A compléter]</p>
                <p><strong>Directeur de la publication :</strong> [A compléter]</p>
                <p><strong>Email :</strong> contact@adaptiserv.fr</p>
                <p><strong>Téléphone :</strong> [A compléter]</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">2. Hébergement</h2>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
                <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                L'ensemble du contenu du site adaptiserv.fr (structure, textes, logos, images, vidéos, éléments graphiques, etc.) est la propriété exclusive d'adaptiserv ou de ses partenaires.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable d'adaptiserv.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">4. Données personnelles</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité des données vous concernant.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à : contact@adaptiserv.fr
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">5. Cookies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Le site adaptiserv.fr peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti lors de leur dépôt.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">6. Crédits</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Site conçu et développé par adaptiserv.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">7. Litiges</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
