import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  Euro,
  ShieldCheck,
  TrendingUp,
  Clock,
  Lock,
  Phone,
  Mail,
} from "lucide-react";
import heroSkyline from "@/assets/hero-skyline.jpg";
import logoBce from "@/assets/logo-bce.png.asset.json";
import logoAmf from "@/assets/logo-amf.png.asset.json";
import logoAcpr from "@/assets/logo-acpr.png.asset.json";
import partenairesLogos from "@/assets/partenaires-logos.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Livret Épargne 7,70% garanti — Rendement mensuel | BB-Banque" },
      {
        name: "description",
        content:
          "Livret d'épargne à partir de 7,70%/an. Fonds garantis, rendement mensuel versé, à partir de 1000€. Réponse sous 24h. Sans frais d'ouverture.",
      },
      { property: "og:title", content: "Livret Épargne 7,70% garanti — Rendement mensuel" },
      {
        property: "og:description",
        content:
          "Placement sécurisé, fonds garantis, rendement mensuel dès 1000€. Recevez notre offre personnalisée sous 24h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const formSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(2, "Nom et prénom requis")
    .max(100, "Trop long"),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z
    .string()
    .trim()
    .min(6, "Numéro invalide")
    .max(20, "Numéro invalide")
    .regex(/^[0-9+\s().-]+$/, "Numéro invalide"),
  montant: z.string().min(1, "Sélectionnez un montant"),
});

type FormValues = z.infer<typeof formSchema>;

const montantOptions = [
  { value: "moins-1000", label: "Moins de 1 000 €" },
  { value: "1000-5000", label: "Entre 1 000 € et 5 000 €" },
  { value: "5000-10000", label: "Entre 5 000 € et 10 000 €" },
  { value: "10000-25000", label: "Entre 10 000 € et 25 000 €" },
  { value: "25000-50000", label: "Entre 25 000 € et 50 000 €" },
  { value: "50000-100000", label: "Entre 50 000 € et 100 000 €" },
  { value: "plus-100000", label: "Plus de 100 000 €" },
];

function InvestForm({ variant = "hero" }: { variant?: "hero" | "inline" }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nom: "", email: "", telephone: "", montant: "" },
  });

  const montantValue = watch("montant");

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Nouvelle demande:", values);
    toast.success("Merci ! Un conseiller vous contactera sous 24h.");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-card p-8 text-center shadow-xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Demande envoyée</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Un conseiller dédié vous rappelle sous 24 heures avec une offre personnalisée.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Faire une nouvelle demande
        </Button>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        isHero
          ? "rounded-xl bg-card/95 p-6 shadow-2xl backdrop-blur-sm ring-1 ring-border"
          : "rounded-xl bg-card p-6 shadow-lg ring-1 ring-border"
      }
    >
      {isHero && (
        <div className="mb-5">
          <h3 className="text-base font-semibold text-foreground">
            Inscrivez-vous pour recevoir nos offres
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Taux d'intérêt garanti à partir de 7,70% — sans engagement.
          </p>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <Input
            {...register("nom")}
            placeholder="Nom et prénom"
            className="h-11"
            aria-invalid={!!errors.nom}
          />
          {errors.nom && (
            <p className="mt-1 text-xs text-destructive">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("email")}
            type="email"
            placeholder="Adresse email"
            className="h-11"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("telephone")}
            type="tel"
            placeholder="Téléphone"
            className="h-11"
            aria-invalid={!!errors.telephone}
          />
          {errors.telephone && (
            <p className="mt-1 text-xs text-destructive">{errors.telephone.message}</p>
          )}
        </div>

        <div>
          <Select
            value={montantValue}
            onValueChange={(v) =>
              setValue("montant", v, { shouldValidate: true })
            }
          >
            <SelectTrigger className="h-11 w-full">
              <SelectValue placeholder="Somme à investir" />
            </SelectTrigger>
            <SelectContent>
              {montantOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.montant && (
            <p className="mt-1 text-xs text-destructive">{errors.montant.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full text-base font-semibold"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </Button>

        <p className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3" />
          Données confidentielles — Sans engagement
        </p>
      </div>
    </form>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />

      {/* Trust bar */}
      <div className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 py-5 sm:flex-row sm:gap-14">
          <span className="text-sm font-medium tracking-wide text-foreground/80">
            Livret agréé par :
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 sm:gap-x-16">
            <img src={logoBce.url} alt="Banque Centrale Européenne" className="h-10 w-auto object-contain sm:h-12" />
            <img src={logoAmf.url} alt="Autorité des Marchés Financiers" className="h-10 w-auto object-contain sm:h-12" />
            <img src={logoAcpr.url} alt="ACPR — Banque de France" className="h-10 w-auto object-contain sm:h-12" />
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSkyline})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-primary/85"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5 lg:py-24">
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Livret à rendement dynamique
            </h1>
            <p className="mt-4 text-xl font-light text-primary-foreground/90 sm:text-2xl">
              Valorisez votre patrimoine. Mettez votre banque en concurrence.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Taux d'intérêt garanti à partir de 7,70%/an",
                "Fonds 100% garantis — capital protégé",
                "Rendement mensuel versé automatiquement",
                "Investissement dès 1 000 € — sans frais d'ouverture",
                "Réponse d'un conseiller sous 24 heures",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-primary-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary-foreground" />
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-primary-foreground/20 pt-6">
              <div>
                <p className="text-4xl font-bold text-primary-foreground">
                  7,70<span className="text-2xl">%</span>
                </p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Taux garanti /an
                </p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/25" />
              <div>
                <p className="text-4xl font-bold text-primary-foreground">1 000€</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Minimum
                </p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/25" />
              <div>
                <p className="text-4xl font-bold text-primary-foreground">24h</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Réponse conseiller
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <InvestForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Sub-hero band */}
      <section className="bg-primary/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Vous souhaitez être accompagné dans votre démarche d'investissement ?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            Estimez gratuitement votre rendement mensuel, votre fiscalité et
            recevez une simulation personnalisée par un conseiller certifié.
          </p>
        </div>
      </section>

      {/* Partenaires */}
      <section className="border-y bg-card py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Nos partenaires bancaires
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src={partenairesLogos.url}
              alt="Nos partenaires bancaires : Le Point, Banque Populaire, CIC"
              className="h-20 w-auto object-contain sm:h-24"
              width={1100}
              height={115}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Les avantages du livret
            </h2>
            <p className="mt-3 text-muted-foreground">
              Un placement pensé pour les épargnants exigeants — sécurité,
              rendement et simplicité.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Euro,
                title: "Rendement",
                desc: "Un rendement attractif à partir de 7,70%/an, versé chaque mois.",
              },
              {
                icon: TrendingUp,
                title: "Accessibilité",
                desc: "Souscription à partir de 1 000 €, sans frais d'ouverture.",
              },
              {
                icon: ShieldCheck,
                title: "Gestion",
                desc: "Aucun souci de gestion : la gestion est entièrement déléguée.",
              },
              {
                icon: Clock,
                title: "Optimisation",
                desc: "Des solutions de livrets optimisées pour un rendement optimal.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation split */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Gardez le contrôle
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Prenez les meilleures décisions pour votre épargne
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nos conseillers analysent votre profil et vous proposent le
              livret le plus adapté à vos objectifs. Simulation offerte,
              engagement zéro.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Simulation de rendement mensuel personnalisée",
                "Comparatif avec les livrets réglementés",
                "Optimisation fiscale intégrée",
                "Suivi dédié par un conseiller certifié",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <InvestForm variant="inline" />
          </div>
        </div>
      </section>

      {/* Footer / contact */}
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
              Mentions
            </p>
            <p className="mt-3 text-xs leading-relaxed text-primary-foreground/70">
              Les performances passées ne préjugent pas des performances
              futures. Investir comporte des risques. Offre soumise à
              conditions et à l'étude de votre dossier.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} BB-Banque — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
