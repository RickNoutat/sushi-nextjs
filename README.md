# 🍣 Sushi — Restaurant Japonais

Site web responsive d'un restaurant de sushis, construit avec **Next.js 14**, **TypeScript** et **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

---

## Aperçu

Site vitrine d'un restaurant japonais fictif situé à Paris. Il présente le menu, les plats populaires, les nouveautés et une newsletter. Le design est responsive, animé et dispose d'un mode sombre.

---

## Fonctionnalités

- **Mode sombre / clair** — basculement avec persistance via `localStorage`
- **Animations fluides** — entrées et transitions avec Framer Motion
- **Navigation active** — section mise en évidence selon le scroll
- **Design responsive** — adapté mobile, tablette et desktop
- **Bouton retour en haut** — apparaît après 350px de défilement
- **Formulaire newsletter** — champ d'abonnement par e-mail

---

## Stack technique

| Technologie   | Version | Usage                         |
| ------------- | ------- | ----------------------------- |
| Next.js       | 14.2.5  | Framework (App Router)        |
| React         | 18      | Bibliothèque UI               |
| TypeScript    | 5       | Typage statique               |
| Framer Motion | 11      | Animations                    |
| CSS3          | —       | Styles personnalisés          |
| RemixIcon     | CDN     | Icônes                        |
| Google Fonts  | CDN     | Poppins, Lora, Dancing Script |

---

## Structure du projet

```
sushi-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout racine (métadonnées, fonts)
│   │   ├── page.tsx         # Page principale
│   │   └── globals.css      # Styles globaux + variables CSS
│   ├── components/
│   │   ├── Header.tsx       # Barre de navigation + toggle thème
│   │   ├── Home.tsx         # Section hero
│   │   ├── About.tsx        # Section À propos
│   │   ├── Popular.tsx      # Plats populaires (3 cartes produit)
│   │   ├── Recently.tsx     # Nouveautés
│   │   ├── Newsletter.tsx   # Abonnement e-mail
│   │   ├── Footer.tsx       # Pied de page
│   │   └── ScrollUp.tsx     # Bouton retour en haut
│   └── types/
│       └── global.d.ts      # Déclarations de types CSS
├── public/
│   └── assets/img/          # Images et icônes
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Installation

**Prérequis :** Node.js 20+ et pnpm

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd sushi-nextjs

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Scripts disponibles

```bash
pnpm dev      # Serveur de développement
pnpm build    # Build de production
pnpm start    # Serveur de production
pnpm lint     # Vérification ESLint
```

---

## Sections du site

| Section        | Description                                    |
| -------------- | ---------------------------------------------- |
| **Header**     | Logo, navigation, toggle dark mode             |
| **Hero**       | Titre principal, appel à l'action, image sushi |
| **À Propos**   | Histoire et valeurs du restaurant              |
| **Populaire**  | Onigiri, Rouleaux de Printemps, Sushi Rolls    |
| **Nouveautés** | Sushi Samourai — Saumon Fromage                |
| **Newsletter** | Formulaire d'abonnement                        |
| **Footer**     | Liens, adresse, horaires, réseaux sociaux      |

---

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) :

```bash
pnpm build
```

> **Note :** L'optimisation d'images Next.js est désactivée (`unoptimized: true`) pour la compatibilité avec les exports statiques.
