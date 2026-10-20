// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=16255-202687
// component=Mot de passe

import figma from 'figma';

export default figma.html`
<div class="fr-password" id="password-group">
  <label class="fr-label" for="password-input">Mot de passe</label>
  <div class="fr-input-wrap">
    <input class="fr-password__input fr-input" type="password" id="password-input" name="password-input">
  </div>
  <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
    <input aria-label="Afficher le mot de passe" id="password-show" type="checkbox" aria-controls="password-input">
    <label class="fr-password__checkbox fr-label" for="password-show">Afficher le mot de passe</label>
  </div>
</div>
`;
