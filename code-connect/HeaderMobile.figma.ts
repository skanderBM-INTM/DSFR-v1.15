// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=153-159413
// component=Header Mobile

import figma from 'figma';

export default figma.html`
<header role="banner" class="fr-header">
  <div class="fr-header__body">
    <div class="fr-container">
      <div class="fr-header__body-row">
        <div class="fr-header__brand fr-enlarge-link">
          <div class="fr-header__brand-top">
            <div class="fr-header__logo">
              <a href="/" title="Accueil - Nom du site - République Française">
                <p class="fr-logo">
                  République<br>Française
                </p>
              </a>
            </div>
            <div class="fr-header__navbar">
              <button data-fr-opened="false" aria-controls="modal-header-menu" title="Ouvrir le menu" type="button" class="fr-btn--menu fr-btn">Menu</button>
            </div>
          </div>
          <div class="fr-header__service">
            <a href="/" title="Accueil - Nom du site">
              <p class="fr-header__service-title">Nom du site / service</p>
            </a>
            <p class="fr-header__service-tagline">Précisions sur l'organisation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</header>
`;
