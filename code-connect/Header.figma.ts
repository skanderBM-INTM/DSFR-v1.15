// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=148-52
// component=Header

import figma from 'figma';

const hasTools = figma.properties.boolean('Fonctionnel droite');
const hasTagline = figma.properties.boolean('Description');
const hasServiceName = figma.properties.boolean('Nom du site');

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
              <button data-fr-opened="false" aria-controls="modal-header-menu" title="Menu" type="button" class="fr-btn--menu fr-btn">Menu</button>
            </div>
          </div>
          ${hasServiceName ? figma.html`
          <div class="fr-header__service">
            <a href="/" title="Accueil - Nom du site">
              <p class="fr-header__service-title">Nom du site / service</p>
            </a>
            ${hasTagline ? figma.html`<p class="fr-header__service-tagline">Précisions sur l'organisation</p>` : ''}
          </div>` : ''}
        </div>
        ${hasTools ? figma.html`
        <div class="fr-header__tools">
          <div class="fr-header__tools-links">
            <ul class="fr-btns-group">
              <li><a href="#" class="fr-btn fr-icon-account-circle-line">Mon Espace Particulier</a></li>
              <li><a href="#" class="fr-btn fr-btn--tertiary-no-outline fr-icon-question-line">Aide & Contact</a></li>
            </ul>
          </div>
        </div>` : ''}
      </div>
    </div>
  </div>
  <div class="fr-header__menu fr-modal" id="modal-header-menu">
    <div class="fr-container">
      <button aria-controls="modal-header-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
      <div class="fr-header__menu-links"></div>
      <nav class="fr-nav" role="navigation" aria-label="Menu principal">
        <ul class="fr-nav__list">
          <li class="fr-nav__item"><a href="#" class="fr-nav__link" aria-current="page">Accueil</a></li>
          <li class="fr-nav__item"><a href="#" class="fr-nav__link">Démarches</a></li>
          <li class="fr-nav__item"><a href="#" class="fr-nav__link">Actualités</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
`;
