# Drena Dance - Configuration complète du projet

## STRUCTURE TECHNIQUE

- **React Router DOM** configuré dans main.jsx (BrowserRouter) et App.jsx (Routes/Route)
- **i18n** avec react-i18next: toutes les chaînes utilisent t() dans src/i18n.js
- **Pages créées**: Histoire, MeninosDoSemba, Cours (ancres Kizomba/Semba/Afro), AfterWork, Gallerie, Agenda
- **Logo**: /images/logo_drena_3.png dans public/images/
- **Sélecteur langue**: drapeaux images (flagcdn.com) desktop + dropdown mobile

## NAVIGATION MENU

- Accueil (/)
- L'histoire Drena Dance (/histoire)
- Meninos do Semba (/meninos-do-semba)
- Les cours (/cours) avec ancres #kizomba #semba #afro
- After Work (/after-work)
- Gallerie (/gallerie)
- Agenda (/agenda)
- Instructeurs (#professeurs)
- Contact (#contact)

## RÈGLES IMPORTANTES

- **TOUJOURS utiliser t('key') pour tout texte visible**
- **TOUS les textes ajoutés sur le site DOIVENT utiliser t('key') et être définis dans src/i18n.js**
- Définir les clés dans src/i18n.js (fr/en/pt)
- Ne jamais toucher Hero/Header sans ordre explicite
- **PowerShell**: commandes git séparées (pas de &&) - ENVIRONNEMENT WINDOWS
- **GIT**: Ne jamais pousser sur git sans ordre explicite de l'utilisateur
- Mobile-first responsive design obligatoire

## ÉTAT ACTUEL

- ✅ i18n complet sur tout le site
- ✅ Navigation multi-pages fonctionnelle
- ✅ Logo responsive dans header
- ✅ Sélecteur langue desktop/mobile
- ✅ Pages créées avec ancres Cours
- ✅ Hero section avec texte traduit
- ✅ Tous les composants traduits (Courses, Instructors, Contact, Footer)

## COMMANDES GIT (PowerShell - Windows)

**IMPORTANT**: Toujours exécuter les commandes séparément, jamais avec &&

```powershell
git add -A
git commit -m "message"
git push origin main
```

**Rappel**: Environnement Windows avec PowerShell, pas de bash/Linux
