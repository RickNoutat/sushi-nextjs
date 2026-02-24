# 🍣 Sushi — Restaurant Japonais

Site web responsive d'un restaurant de sushis, construit avec **Next.js 14**, **TypeScript** et **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

---

## Aperçu

Site vitrine d'un restaurant japonais fictif situé à Paris. Il présente le menu, les plats populaires, les nouveautés et une newsletter. Le design est entièrement responsive, animé et propose un mode sombre.

---

## Fonctionnalités

- **Mode sombre / clair** — basculement avec persistance via `localStorage`
- **Animations fluides** — entrées et transitions animées avec Framer Motion
- **Navigation active** — section mise en évidence selon la position de défilement
- **Design responsive** — adapté mobile, tablette et ordinateur de bureau
- **Bouton retour en haut** — apparaît après 350 px de défilement
- **Formulaire d'abonnement** — champ de saisie pour la newsletter

---

## Technologies utilisées

| Technologie   | Version | Utilisation                   |
| ------------- | ------- | ----------------------------- |
| Next.js       | 14.2.5  | Cadriciel (routeur applicatif)|
| React         | 18      | Bibliothèque d'interface      |
| TypeScript    | 5       | Typage statique               |
| Framer Motion | 11      | Animations                    |
| CSS3          | —       | Styles personnalisés          |
| RemixIcon     | CDN     | Icônes                        |
| Google Fonts  | CDN     | Poppins, Lora, Dancing Script |

---

## Structure du projet

```text
sushi-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Mise en page racine (métadonnées, polices)
│   │   ├── page.tsx         # Page principale
│   │   └── globals.css      # Styles globaux et variables CSS
│   ├── components/
│   │   ├── Header.tsx       # Barre de navigation et bascule de thème
│   │   ├── Home.tsx         # Section héros
│   │   ├── About.tsx        # Section À propos
│   │   ├── Popular.tsx      # Plats populaires (3 cartes produit)
│   │   ├── Recently.tsx     # Section Nouveautés
│   │   ├── Newsletter.tsx   # Abonnement par e-mail
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
git clone <url-du-dépôt>
cd sushi-nextjs

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Commandes disponibles

```bash
pnpm dev      # Serveur de développement
pnpm build    # Compilation pour la production
pnpm start    # Serveur de production
pnpm lint     # Vérification du code avec ESLint
```

---

## Sections du site

| Section          | Description                                        |
| ---------------- | -------------------------------------------------- |
| **En-tête**      | Logo, navigation, bascule du thème                 |
| **Héros**        | Titre principal, bouton d'appel à l'action, image  |
| **À Propos**     | Histoire et valeurs du restaurant                  |
| **Populaires**   | Onigiri, Rouleaux de Printemps, Sushi Rolls        |
| **Nouveautés**   | Sushi Samourai — Saumon Fromage                    |
| **Newsletter**   | Formulaire d'abonnement par e-mail                 |
| **Pied de page** | Liens, adresse, horaires, réseaux sociaux          |

---

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) :

```bash
pnpm build
```

> **Remarque :** L'optimisation d'images intégrée à Next.js est désactivée (`unoptimized: true`) pour assurer la compatibilité avec les exports statiques.

---

## Crédits

- Design original : [Bedimcode](https://github.com/bedimcode)
- Migration Next.js / TypeScript : développement personnalisé
