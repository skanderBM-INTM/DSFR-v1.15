// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=536-45814
// component=Interrupteur

import figma from 'figma';

export default figma.html`
<div class="fr-toggle">
  <input type="checkbox" class="fr-toggle__input" id="toggle-id" aria-describedby="toggle-hint">
  <label class="fr-toggle__label" for="toggle-id" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">
    Libellé de l'interrupteur
  </label>
  <p class="fr-hint-text" id="toggle-hint">Texte d'aide pour préciser l'effet du changement d'état.</p>
</div>
`;
