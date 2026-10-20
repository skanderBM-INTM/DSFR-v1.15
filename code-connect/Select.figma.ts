// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=284-15646
// component=Liste déroulante

import figma from 'figma';

export default figma.html`
<div class="fr-select-group">
  <label class="fr-label" for="select-id">
    Libellé de la liste déroulante
    <span class="fr-hint-text">Texte d'aide</span>
  </label>
  <select class="fr-select" id="select-id" name="select-name">
    <option value="" selected disabled hidden>Sélectionnez une option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
`;
