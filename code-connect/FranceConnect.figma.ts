// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=11985-75836
// component=Bouton FranceConnect

import figma from 'figma';

export default figma.html`
<div class="fr-connect-group">
  <button class="fr-connect" type="button">
    <span class="fr-connect__login">S’identifier avec</span>
    <span class="fr-connect__brand">FranceConnect</span>
  </button>
  <p>
    <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - ouvre une nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
  </p>
</div>
`;
