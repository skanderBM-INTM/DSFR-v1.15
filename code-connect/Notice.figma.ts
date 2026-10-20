// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=11706-73752
// component=Bandeau d'information importante

import figma from 'figma';

export default figma.html`
<div class="fr-notice fr-notice--info">
  <div class="fr-container">
    <div class="fr-notice__body">
      <p class="fr-notice__title">
        Message d'information importante ou alerte transversale.
      </p>
      <button class="fr-btn--close fr-btn" title="Masquer le message" type="button">Masquer le message</button>
    </div>
  </div>
</div>
`;
