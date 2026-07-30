import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | BB-Banque" },
      {
        name: "description",
        content:
          "Mentions légales du site BB-Banque : éditeur du site, hébergement, propriété intellectuelle et données personnelles.",
      },
      { property: "og:title", content: "Mentions légales | BB-Banque" },
      {
        property: "og:description",
        content:
          "Mentions légales du site BB-Banque : éditeur du site, hébergement, propriété intellectuelle et données personnelles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-lg font-bold text-foreground">
            BB-Banque
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Cette page est gérée par BB-Banque pour répondre aux exigences
            légales applicables au site.{" "}
            <span className="font-medium text-foreground">
              Elle est fournie à titre indicatif — certaines données doivent
              être complétées avant publication définitive.
            </span>
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              1. Éditeur du site
            </h2>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Raison sociale :
                </span>{" "}
                BB-Banque
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Forme juridique :
                </span>{" "}
                Société à compléter (ex. SAS au capital social de XXX €)
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Siège social :
                </span>{" "}
                Adresse postale du siège à compléter
              </li>
              <li>
                <span className="font-medium text-foreground">SIRET :</span>{" "}
                000 000 000 00000 — à compléter
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Numéro de TVA intracommunautaire :
                </span>{" "}
                FRXX 000 000 000 — à compléter
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Directeur de la publication :
                </span>{" "}
                BB-Banque
              </li>
              <li>
                <span className="font-medium text-foreground">Contact :</span>{" "}
                <a
                  href="mailto:livret-a@bb-banque.com"
                  className="text-primary hover:underline"
                >
                  livret-a@bb-banque.com
                </a>
                {" · "}
                <a
                  href="tel:0756886488"
                  className="text-primary hover:underline"
                >
                  07 56 88 64 88
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              2. Hébergement
            </h2>
            <p className="mt-3 text-muted-foreground">
              Le site est hébergé par la plateforme Lovable. Pour toute question
              relative à l'hébergement, vous pouvez consulter le site{" "}
              <a
                href="https://lovable.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                lovable.dev
              </a>
              . L'éditeur reste seul responsable des contenus mis en ligne.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              3. Propriété intellectuelle
            </h2>
            <p className="mt-3 text-muted-foreground">
              L'ensemble des éléments constituant le site (textes, graphismes,
              logos, icônes, images, photographies, vidéos, sons, logiciels,
              mise en page, etc.) est la propriété exclusive de BB-Banque ou
              fait l'objet d'une autorisation d'utilisation. Toute reproduction,
              représentation, modification, publication, adaptation ou
              exploitation, totale ou partielle, des éléments du site, par quelque
              procédé que ce soit, sans l'autorisation préalable et écrite de
              BB-Banque, est interdite.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              4. Données personnelles et cookies
            </h2>
            <p className="mt-3 text-muted-foreground">
              Les informations collectées via les formulaires de contact sont
              destinées à BB-Banque et à ses conseillers pour répondre aux
              demandes et proposer des offres personnalisées. Conformément à la
              réglementation en vigueur, vous disposez d'un droit d'accès, de
              rectification, d'effacement, de limitation du traitement et de
              portabilité des données vous concernant, ainsi que du droit de
              définir des directives relatives au sort de vos données après votre
              décès.
            </p>
            <p className="mt-3 text-muted-foreground">
              Pour exercer vos droits ou pour toute question relative à vos
              données personnelles, vous pouvez contacter BB-Banque par email
              à{" "}
              <a
                href="mailto:livret-a@bb-banque.com"
                className="text-primary hover:underline"
              >
                livret-a@bb-banque.com
              </a>
              .
            </p>
            <p className="mt-3 text-muted-foreground">
              Le site peut utiliser des cookies techniques nécessaires au bon
              fonctionnement du service. Vous pouvez configurer votre navigateur
              pour refuser leur installation, sachant que certains services
              pourraient alors ne plus fonctionner correctement.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              5. Liens hypertextes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Le site peut contenir des liens vers d'autres sites. BB-Banque ne
              dispose d'aucun moyen de contrôle du contenu de ces sites et ne
              saurait être tenu responsable de leur contenu, de leur politique
              de confidentialité ou de leurs pratiques.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              6. Responsabilité
            </h2>
            <p className="mt-3 text-muted-foreground">
              BB-Banque met en œuvre les moyens nécessaires pour assurer
              l'exactitude des informations diffusées sur le site. Toutefois,
              les informations sont fournies à titre indicatif et ne sauraient
              engager la responsabilité de BB-Banque. Les performances passées
              ne présagent pas des performances futures. Investir comporte des
              risques, y compris de perte en capital.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              7. Droit applicable
            </h2>
            <p className="mt-3 text-muted-foreground">
              Les présentes mentions légales sont régies par le droit français.
              En cas de différend et à défaut d'accord amiable, les tribunaux
              français seront compétents.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">BB-Banque</p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Solutions d'épargne à rendement dynamique, agréées par les
              autorités financières européennes.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider">
              Nous contacter
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <a
                href="tel:0756886488"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="h-4 w-4" /> 07 56 88 64 88
              </a>
              <a
                href="mailto:livret-a@bb-banque.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" /> livret-a@bb-banque.com
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider">
              Liens
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <Link to="/" className="block hover:underline">
                Accueil
              </Link>
              <Link to="/mentions-legales" className="block hover:underline">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} BB-Banque — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
