// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=311-24508
// component=Bouton radio

import figma from 'figma';

export default figma.html`
<div class="fr-radio-group">
  <input type="radio" id="radio-id" name="radio-name">
  <label class="fr-label" for="radio-id">
    Option radio
    <span class="fr-hint-text">Texte d'aide explicatif</span>
  </label>
</div>
`;
