// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=264-2355
// component=Navigation Mobile

import figma from 'figma';

export default figma.html`
<div class="fr-header__menu fr-modal" id="modal-header-menu">
  <div class="fr-container">
    <button aria-controls="modal-header-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
    <div class="fr-header__menu-links"></div>
    <nav class="fr-nav" role="navigation" aria-label="Menu principal">
      <ul class="fr-nav__list">
        <li class="fr-nav__item">
          <a href="#" class="fr-nav__link" aria-current="page">Accueil</a>
        </li>
        <li class="fr-nav__item">
          <a href="#" class="fr-nav__link">Accès rapide</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`;
