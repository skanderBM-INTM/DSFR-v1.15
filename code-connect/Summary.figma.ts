// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=583-49481
// component=Sommaire

import figma from 'figma';

export default figma.html`
<nav class="fr-summary" role="navigation" aria-labelledby="summary-title">
  <h2 class="fr-summary__title" id="summary-title">Sommaire</h2>
  <ol class="fr-summary__list">
    <li><a class="fr-summary__link" href="#section-1">1. Première section</a></li>
    <li><a class="fr-summary__link" href="#section-2">2. Deuxième section</a></li>
    <li><a class="fr-summary__link" href="#section-3">3. Troisième section</a></li>
  </ol>
</nav>
`;
