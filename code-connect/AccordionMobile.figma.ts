// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=128-110
// component=Accordéon Mobile

import figma from 'figma';

export default figma.html`
<section class="fr-accordion">
  <h3 class="fr-accordion__title">
    <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-id" type="button">Intitulé de l'accordéon</button>
  </h3>
  <div class="fr-collapse" id="accordion-id">
    <p>Contenu développé de l'accordéon.</p>
  </div>
</section>
`;
