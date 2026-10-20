// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=92-1978
// component=Barre de recherche

import figma from 'figma';

export default figma.html`
<div class="fr-search-bar" role="search">
  <label class="fr-label" for="search-input">Rechercher</label>
  <input class="fr-input" placeholder="Rechercher..." type="search" id="search-input" name="search-input">
  <button class="fr-btn" title="Rechercher" type="submit">Rechercher</button>
</div>
`;
