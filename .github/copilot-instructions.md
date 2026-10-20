# Instructions Système de Design de l'État (DSFR) pour VS Code & GitHub Copilot

Ce projet utilise le Système de Design de l'État français (DSFR) version 1.15.4.
Lorsque vous générez ou modifiez du code HTML, CSS ou JavaScript pour cette interface, vous DEVEZ respecter scrupuleusement les règles suivantes :

---

## 1. Règles impératives de développement DSFR

1. **Aucune improvisation CSS** :
   - Utilisez **exclusivement** les classes BEM officielles du DSFR (`fr-{composant}`, `fr-{composant}__{element}`, `fr-{composant}--{variante}`) et les classes utilitaires (`fr-mt-*`, `fr-grid-row`, etc.).
   - N'inventez jamais de classes CSS arbitraires et n'utilisez pas de framework CSS externe (Tailwind, Bootstrap) pour concevoir ou émuler des composants DSFR.

2. **Accessibilité numérique (RGAA 4.1 & WAI-ARIA)** :
   - Tout champ de formulaire (`<input>`, `<select>`, `<textarea>`) DOIT comporter un `<label class="fr-label" for="id">` explicitement associé via son identifiant `id`.
   - Les boutons interactifs et accordéons doivent comporter les attributs ARIA appropriés (`aria-controls`, `aria-expanded`, `data-fr-opened`).
   - Repères sémantiques indispensables : `<div class="fr-skiplinks">`, `<header role="banner" class="fr-header">`, `<main role="main" id="content">`, `<footer role="contentinfo" id="footer" class="fr-footer">`.

3. **Bloc-marque Marianne officiel** :
   - Doit respecter la typographie et la structure exacte de la Charte de l'État :
     ```html
     <p class="fr-logo">
       République<br>Française
     </p>
     ```

4. **Feuilles de style et scripts DSFR** :
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/utility/utility.min.css">
   <script type="module" src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.module.min.js"></script>
   ```

---

## 2. Catalogue des 37 composants disponibles localement

Pour chaque composant, référez-vous systématiquement aux fichiers de spécifications et aux exemples validés dans le dossier `skills/dsfr/composants/<nom>/` :

- **Navigation** : `header`, `footer`, `navigation`, `breadcrumb`, `sidemenu`, `pagination`, `skiplink`, `tab`.
- **Formulaires** : `input`, `checkbox`, `radio`, `select`, `upload`, `password`, `form`, `toggle`.
- **Feedback & Information** : `alert`, `notice`, `badge`, `tag`, `card`, `tile`, `modal`, `accordion`, `callout`, `highlight`, `quote`, `tooltip`, `summary`, `table`.
- **Identité État** : `logo`, `connect` (FranceConnect / ProConnect), `consent` (Bandeau cookies).

---

## 3. Workflow de réponse attendu

1. Proposer systématiquement des snippets HTML complets et valides.
2. Spécifier les attributs d'accessibilité requis.
3. S'appuyer sur les exemples canoniques situés dans `skills/dsfr/composants/<nom>/examples/`.
