// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=14795-206250
// component=Case à cocher

import figma from 'figma';

export default figma.html`
<div class="fr-checkbox-group">
  <input name="checkbox" id="checkbox-id" type="checkbox">
  <label class="fr-label" for="checkbox-id">
    Libellé de la case à cocher
    <span class="fr-hint-text">Texte d'aide ou précision</span>
  </label>
</div>
`;
