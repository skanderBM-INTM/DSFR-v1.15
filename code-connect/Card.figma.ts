// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=21809-202061
// component=Carte

import figma from 'figma';

export default figma.html`
<div class="fr-card fr-enlarge-link">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a href="#">Intitulé de la carte</a>
      </h3>
      <p class="fr-card__desc">Description concise du contenu éditorial ou de la démarche associée.</p>
      <div class="fr-card__start">
        <p class="fr-card__detail">Détail ou catégorie</p>
      </div>
    </div>
  </div>
  <div class="fr-card__header">
    <div class="fr-card__img">
      <img class="fr-responsive-img" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' fill='%23ececfe'></svg>" alt="">
    </div>
  </div>
</div>
`;
