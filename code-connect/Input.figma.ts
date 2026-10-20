// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=14819-199027
// component=Input

import figma from 'figma';

const value = figma.properties.string('Texte saisi') || '';

export default figma.html`
<div class="fr-input-group">
  <label class="fr-label" for="input-id">
    Libellé du champ
    <span class="fr-hint-text">Texte d'aide</span>
  </label>
  <input class="fr-input" type="text" id="input-id" name="input-name" value="${value}">
</div>
`;
