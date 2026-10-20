// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=139-115
// component=Fil d'Ariane

import figma from 'figma';

export default figma.html`
<nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
  <button class="fr-breadcrumb__button" aria-expanded="false" aria-controls="breadcrumb-id" type="button">Voir le fil d'Ariane</button>
  <div class="fr-collapse" id="breadcrumb-id">
    <ol class="fr-breadcrumb__list">
      <li><a class="fr-breadcrumb__link" href="/">Accueil</a></li>
      <li><a class="fr-breadcrumb__link" href="/rubrique">Rubrique</a></li>
      <li><a class="fr-breadcrumb__link" aria-current="page">Page actuelle</a></li>
    </ol>
  </div>
</nav>
`;
