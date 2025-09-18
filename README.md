Internationalisation (i18n)
---------------------------

Règle KISS pour tous les textes (actuels et futurs):

- Toujours afficher les textes via `t('cle')` (hook `useTranslation`) et jamais en dur.
- Ajouter la clé dans `src/i18n.js` pour `fr`, `en`, `pt`.
- Ne pas utiliser de ternaires basés sur `i18n.language`; passer par des clés.
- Dès qu’un nouveau texte est ajouté, créer sa clé dans `src/i18n.js`.

Exemple:

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h2>{t('my.feature.title')}</h2>;
}
```

# Drena Dance Kizomba - Site Web React

Un site web moderne et responsive pour Drena Dance, club de danse Kizomba, inspiré des couleurs du drapeau angolais.

## 🎨 Design

- **Couleurs** : Inspirées du drapeau angolais (rouge, noir, jaune)
- **Style** : Moderne, fluide et responsive
- **Animations** : Framer Motion pour des transitions fluides
- **Typographie** : Poppins pour une apparence moderne

## 🚀 Installation et Lancement

1. **Installer les dépendances** :

```bash
npm install
```

2. **Lancer le serveur de développement** :

```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
   Le site sera accessible à l'adresse `http://localhost:5173`

## 📱 Fonctionnalités

- **Header** : Navigation responsive avec menu hamburger
- **Hero** : Section d'accueil avec statistiques animées
- **Cours** : Grille de cours avec cartes interactives
- **Professeurs** : Présentation de l'équipe avec réseaux sociaux
- **Contact** : Formulaire d'inscription et informations
- **Footer** : Liens et informations complètes

## 🛠️ Technologies Utilisées

- **React 18** : Framework JavaScript
- **Vite** : Outil de build rapide
- **Framer Motion** : Animations fluides
- **React Icons** : Icônes modernes
- **CSS3** : Styles personnalisés avec variables CSS

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :

- **Desktop** : 1200px et plus
- **Tablette** : 768px - 1024px
- **Mobile** : 320px - 767px

## 🎯 Sections du Site

1. **Accueil** : Présentation du club et de la Kizomba
2. **Cours** : Différents niveaux de cours proposés
3. **Professeurs** : Équipe d'enseignants expérimentés
4. **Contact** : Formulaire d'inscription et coordonnées

## 🎨 Couleurs

- **Rouge principal** : #C8102E
- **Rouge secondaire** : #DC143C
- **Or** : #FFD700
- **Noir** : #000000
- **Gris clair** : #F8F9FA

## 📦 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit la version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🌟 Caractéristiques Spéciales

- Animations fluides avec Framer Motion
- Design inspiré de la culture angolaise
- Images optimisées depuis Unsplash
- Formulaire de contact fonctionnel
- Navigation smooth scroll
- Effets de hover interactifs
