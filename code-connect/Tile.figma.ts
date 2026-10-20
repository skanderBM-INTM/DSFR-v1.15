// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=19187-356872
// component=Tuile

import figma from 'figma';

export default figma.html`
<div class="fr-tile fr-enlarge-link">
  <div class="fr-tile__body">
    <div class="fr-tile__content">
      <h3 class="fr-tile__title">
        <a href="#">Intitulé de la démarche ou du service</a>
      </h3>
      <p class="fr-tile__desc">Description courte de l'action ou du service accessible.</p>
    </div>
  </div>
  <div class="fr-tile__header">
    <div class="fr-tile__pictogram">
      <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
        <circle cx="40" cy="40" r="30" fill="#000091" opacity="0.2"/>
      </svg>
    </div>
  </div>
</div>
`;
