---
name: dsfr
description: Documentation officielle et catalogue exhaustif des composants du Système de Design de l'État (DSFR) v1.15. Spécifications HTML officielles, classes CSS BEM, conformité d'accessibilité RGAA 4.1, bloc-marque Marianne et exemples de code fonctionnels pour concevoir et développer des interfaces conformes du gouvernement français.
version: 1.15.4
tags: [design system, DSFR, accessibilité, RGAA, gouvernement français, BEM, Marianne, code connect]
---

# Système de Design de l'État (DSFR) v1.15

Le Design System Français (DSFR) est le système de conception et de développement officiel de référence de l'État français. Il fournit des composants réutilisables, des spécifications d'accessibilité (RGAA 4.1) et des règles graphiques pour créer des interfaces numériques républicaines cohérentes, accessibles et performantes.

---

## 1. Principes et règles de développement impératives

1. **Zéro improvisation CSS** :
   - Toujours utiliser les classes BEM officielles (`fr-{composant}`, `fr-{composant}__{element}`, `fr-{composant}--{variante}`).
   - Ne jamais frotter ou créer de classes CSS arbitraires (Tailwind ou custom) pour émuler un composant existant dans le DSFR.
2. **Accessibilité numérique (RGAA 4.1 & WAI-ARIA)** :
   - Tous les champs de saisie (`<input>`, `<select>`, `<textarea>`) doivent avoir un `<label class="fr-label">` lié via `for="id"`.
   - Tout composant interactif dynamique (modale, menu, accordéon) requiert ses attributs ARIA (`aria-controls`, `aria-expanded`, `data-fr-opened`).
   - Sémantique stricte des repères de page : `<div class="fr-skiplinks">`, `<header role="banner">`, `<main role="main" id="content">`, `<footer role="contentinfo" id="footer">`.
3. **Bloc-marque Marianne officiel (Charte de l'État)** :
   - Le bloc-marque doit rigoureusement comporter :
     ```html
     <p class="fr-logo">
       République<br>Française
     </p>
     ```
4. **Imports des feuilles de style et scripts officiels** :
   ```html
   <!-- CSS Core & Composants -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.min.css">
   <!-- Utilitaires (espacements fr-m*, grilles fr-grid-row, etc.) -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/utility/utility.min.css">
   <!-- JavaScript modulaire DSFR -->
   <script type="module" src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.module.min.js"></script>
   ```

---

## 2. Structure documentaire des composants

Chaque composant dans `composants/<nom>/` est structuré selon 5 fichiers clés :

1. **`index.md` - Vue d'ensemble** : Définition, cas d'usage, quand l'utiliser / ne pas l'utiliser, règles éditoriales.
2. **`code.md` - Documentation technique** : Structure HTML canonique, classes CSS obligatoires/optionnelles, dépendances JS, API `window.dsfr`.
3. **`accessibilite.md` - Spécifications RGAA 4.1** : Rôles ARIA, navigation au clavier (`Tab`, `Espace`, `Flèches`), critères RGAA applicables, compatibilité lecteurs d'écran (VoiceOver, NVDA, JAWS).
4. **`design.md` - Spécifications de design** : Anatomie du composant, variantes de taille/style, états visuels (défaut, hover, focus, disabled, erreur, succès).
5. **`examples/` - Snippets complets** : Pages HTML complètes et autonomes (`example-1.html`, `example-2.html`...) prêtes à être copiées ou consultées.

---

## 3. Méthode pour répondre aux demandes utilisateur

- **Pour une question d'implémentation** :
  1. Consulter `composants/<nom>/code.md` pour le balisage HTML officiel.
  2. Vérifier `composants/<nom>/examples/example-1.html` pour un exemple complet validé.
  3. Fournir le code complet avec les imports CSS/JS du DSFR sans omettre les labels ou hints.
- **Pour une question d'accessibilité** :
  1. Consulter `composants/<nom>/accessibilite.md`.
  2. Vérifier les rôles ARIA (`aria-controls`, `aria-describedby`, `aria-expanded`).
  3. Rappeler les interactions clavier attendues.
- **Pour une question ergonomique ou de variantes** :
  1. Consulter `composants/<nom>/design.md` pour les variantes autorisées.
  2. Ne jamais recommander de styles personnalisés qui violeraient la charte graphique de l'État.

---

## 4. Catalogue des 37 composants synchronisés

| Composant | Description | Fichiers officiels | Exemples prêts à l'emploi |
| :--- | :--- | :--- | :--- |
| **Accordéon** (`accordion`) | Masquer ou révéler du contenu textuel | [`code.md`](composants/accordion/code.md) • [`accessibilite.md`](composants/accordion/accessibilite.md) | [5 exemple(s)](composants/accordion/examples/) |
| **Alerte** (`alert`) | Relayer une information importante (info, success, warning, error) | [`code.md`](composants/alert/code.md) • [`accessibilite.md`](composants/alert/accessibilite.md) | [4 exemple(s)](composants/alert/examples/) |
| **Badge** (`badge`) | Affichage d'un statut court ou indicateur | [`code.md`](composants/badge/code.md) • [`accessibilite.md`](composants/badge/accessibilite.md) | [6 exemple(s)](composants/badge/examples/) |
| **Fil d'Ariane** (`breadcrumb`) | Navigation secondaire hiérarchique | [`code.md`](composants/breadcrumb/code.md) • [`accessibilite.md`](composants/breadcrumb/accessibilite.md) | [4 exemple(s)](composants/breadcrumb/examples/) |
| **Bouton** (`button`) | Déclenchement d'une action dans l'interface | [`code.md`](composants/button/code.md) • [`accessibilite.md`](composants/button/accessibilite.md) | [8 exemple(s)](composants/button/examples/) |
| **Mise en avant** (`callout`) | Mettre en valeur une information secondaire ou un simulateur | [`code.md`](composants/callout/code.md) • [`accessibilite.md`](composants/callout/accessibilite.md) | [3 exemple(s)](composants/callout/examples/) |
| **Carte** (`card`) | Bloc cliquable éditorial avec image et lien étendu | [`code.md`](composants/card/code.md) • [`accessibilite.md`](composants/card/accessibilite.md) | [10 exemple(s)](composants/card/examples/) |
| **Case à cocher** (`checkbox`) | Sélection multiple dans une liste ou attestation | [`code.md`](composants/checkbox/code.md) • [`accessibilite.md`](composants/checkbox/accessibilite.md) | [10 exemple(s)](composants/checkbox/examples/) |
| **Boutons FranceConnect / ProConnect** (`connect`) | Authentification officielle de l'État | [`code.md`](composants/connect/code.md) • [`accessibilite.md`](composants/connect/accessibilite.md) | [5 exemple(s)](composants/connect/examples/) |
| **Gestionnaire de consentement** (`consent`) | Bandeau cookies et respect du RGPD | [`code.md`](composants/consent/code.md) • [`accessibilite.md`](composants/consent/accessibilite.md) | [6 exemple(s)](composants/consent/examples/) |
| **Pied de page** (`footer`) | Informations légales, navigation basse et licence etalab | [`code.md`](composants/footer/code.md) • [`accessibilite.md`](composants/footer/accessibilite.md) | [3 exemple(s)](composants/footer/examples/) |
| **Formulaire** (`form`) | Structure et groupes de formulaire conformes | [`code.md`](composants/form/code.md) • [`accessibilite.md`](composants/form/accessibilite.md) | [6 exemple(s)](composants/form/examples/) |
| **En-tête** (`header`) | Identification institutionnelle, navigation et outils | [`code.md`](composants/header/code.md) • [`accessibilite.md`](composants/header/accessibilite.md) | [13 exemple(s)](composants/header/examples/) |
| **Mise en exergue** (`highlight`) | Mise en évidence typographique d'une citation ou phrase clé | [`code.md`](composants/highlight/code.md) • [`accessibilite.md`](composants/highlight/accessibilite.md) | [4 exemple(s)](composants/highlight/examples/) |
| **Champ de saisie** (`input`) | Saisie textuelle, numérique, email avec label et hint | [`code.md`](composants/input/code.md) • [`accessibilite.md`](composants/input/accessibilite.md) | [8 exemple(s)](composants/input/examples/) |
| **Lien** (`link`) | Liens d'action ou de navigation avec indication de fenêtre externe | [`code.md`](composants/link/code.md) • [`accessibilite.md`](composants/link/accessibilite.md) | [13 exemple(s)](composants/link/examples/) |
| **Bloc marque** (`logo`) | Bloc Marianne officiel de la République Française | [`code.md`](composants/logo/code.md) • [`accessibilite.md`](composants/logo/accessibilite.md) | [6 exemple(s)](composants/logo/examples/) |
| **Modale** (`modal`) | Boîte de dialogue accessible avec piège de focus | [`code.md`](composants/modal/code.md) • [`accessibilite.md`](composants/modal/accessibilite.md) | [10 exemple(s)](composants/modal/examples/) |
| **Navigation principale** (`navigation`) | Menu de navigation horizontale ou en tiroir mobile | [`code.md`](composants/navigation/code.md) • [`accessibilite.md`](composants/navigation/accessibilite.md) | [7 exemple(s)](composants/navigation/examples/) |
| **Bandeau d'information importante** (`notice`) | Alerte transversale haute visibilité | [`code.md`](composants/notice/code.md) • [`accessibilite.md`](composants/notice/accessibilite.md) | [13 exemple(s)](composants/notice/examples/) |
| **Pagination** (`pagination`) | Navigation entre pages de résultats | [`code.md`](composants/pagination/code.md) • [`accessibilite.md`](composants/pagination/accessibilite.md) | [2 exemple(s)](composants/pagination/examples/) |
| **Mot de passe** (`password`) | Saisie sécurisée avec bouton d'affichage/masquage | [`code.md`](composants/password/code.md) • [`accessibilite.md`](composants/password/accessibilite.md) | [6 exemple(s)](composants/password/examples/) |
| **Citation** (`quote`) | Bloc de citation d'auteur avec source | [`code.md`](composants/quote/code.md) • [`accessibilite.md`](composants/quote/accessibilite.md) | [4 exemple(s)](composants/quote/examples/) |
| **Bouton radio** (`radio`) | Choix unique parmi plusieurs options | [`code.md`](composants/radio/code.md) • [`accessibilite.md`](composants/radio/accessibilite.md) | [7 exemple(s)](composants/radio/examples/) |
| **Barre de recherche** (`search`) | Barre de recherche accessible avec bouton loupe | [`code.md`](composants/search/code.md) • [`accessibilite.md`](composants/search/accessibilite.md) | [4 exemple(s)](composants/search/examples/) |
| **Liste déroulante** (`select`) | Menu déroulant standard accessible | [`code.md`](composants/select/code.md) • [`accessibilite.md`](composants/select/accessibilite.md) | [6 exemple(s)](composants/select/examples/) |
| **Menu latéral** (`sidemenu`) | Navigation secondaire verticale | [`code.md`](composants/sidemenu/code.md) • [`accessibilite.md`](composants/sidemenu/accessibilite.md) | [8 exemple(s)](composants/sidemenu/examples/) |
| **Liens d'évitement** (`skiplink`) | Accès rapide clavier vers le contenu, menu et footer | [`code.md`](composants/skiplink/code.md) • [`accessibilite.md`](composants/skiplink/accessibilite.md) | [2 exemple(s)](composants/skiplink/examples/) |
| **Indicateur d'étapes** (`stepper`) | Suivi de progression dans un formulaire multi-étapes | [`code.md`](composants/stepper/code.md) • [`accessibilite.md`](composants/stepper/accessibilite.md) | [2 exemple(s)](composants/stepper/examples/) |
| **Sommaire** (`summary`) | Table des matières intra-page avec ancres | [`code.md`](composants/summary/code.md) • [`accessibilite.md`](composants/summary/accessibilite.md) | [2 exemple(s)](composants/summary/examples/) |
| **Onglet** (`tab`) | Conteneurs à onglets avec gestion ARIA native | [`code.md`](composants/tab/code.md) • [`accessibilite.md`](composants/tab/accessibilite.md) | [6 exemple(s)](composants/tab/examples/) |
| **Tableau** (`table`) | Tableau de données complexe avec tri et caption | [`code.md`](composants/table/code.md) • [`accessibilite.md`](composants/table/accessibilite.md) | [15 exemple(s)](composants/table/examples/) |
| **Tag** (`tag`) | Étiquettes de catégorisation ou de filtrage | [`code.md`](composants/tag/code.md) • [`accessibilite.md`](composants/tag/accessibilite.md) | [16 exemple(s)](composants/tag/examples/) |
| **Tuile** (`tile`) | Bloc interactif direct vers un contenu ou service | [`code.md`](composants/tile/code.md) • [`accessibilite.md`](composants/tile/accessibilite.md) | [10 exemple(s)](composants/tile/examples/) |
| **Interrupteur** (`toggle`) | Bascule binaire (activer/désactiver) | [`code.md`](composants/toggle/code.md) • [`accessibilite.md`](composants/toggle/accessibilite.md) | [13 exemple(s)](composants/toggle/examples/) |
| **Infobulle** (`tooltip`) | Aide contextuelle discrète au survol/focus | [`code.md`](composants/tooltip/code.md) • [`accessibilite.md`](composants/tooltip/accessibilite.md) | [5 exemple(s)](composants/tooltip/examples/) |
| **Ajout de fichier** (`upload`) | Téléversement accessible de documents | [`code.md`](composants/upload/code.md) • [`accessibilite.md`](composants/upload/accessibilite.md) | [5 exemple(s)](composants/upload/examples/) |

---

## 5. Références officielles

- **Site officiel du DSFR** : [https://www.systeme-de-design.gouv.fr/](https://www.systeme-de-design.gouv.fr/)
- **Dépôt officiel GitHub** : [https://github.com/GouvernementFR/dsfr](https://github.com/GouvernementFR/dsfr)
- **Référentiel RGAA 4.1** : [https://accessibilite.numerique.gouv.fr/](https://accessibilite.numerique.gouv.fr/)
- **Licence** : Licence Ouverte 2.0 (Etalab)
