// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=505-90
// component=Onglet

import figma from 'figma';

export default figma.html`
<div class="fr-tabs">
  <ul class="fr-tabs__list" role="tablist" aria-label="Exemple d'onglets">
    <li role="presentation">
      <button id="tabpanel-1" class="fr-tabs__tab" tabindex="0" role="tab" aria-selected="true" aria-controls="tabpanel-1-panel" type="button">Premier onglet</button>
    </li>
    <li role="presentation">
      <button id="tabpanel-2" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tabpanel-2-panel" type="button">Deuxième onglet</button>
    </li>
  </ul>
  <div id="tabpanel-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tabpanel-1" tabindex="0">
    <p>Contenu du premier onglet.</p>
  </div>
  <div id="tabpanel-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-2" tabindex="0">
    <p>Contenu du deuxième onglet.</p>
  </div>
</div>
`;
