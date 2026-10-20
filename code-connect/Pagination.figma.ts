// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=577-482
// component=Pagination

import figma from 'figma';

export default figma.html`
<nav role="navigation" class="fr-pagination" aria-label="Pagination">
  <ul class="fr-pagination__list">
    <li>
      <a class="fr-pagination__link fr-pagination__link--first" aria-disabled="true" role="link">Première page</a>
    </li>
    <li>
      <a class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label" aria-disabled="true" role="link">Page précédente</a>
    </li>
    <li>
      <a href="#" class="fr-pagination__link" aria-current="page" title="Page 1">1</a>
    </li>
    <li>
      <a href="#" class="fr-pagination__link" title="Page 2">2</a>
    </li>
    <li>
      <a href="#" class="fr-pagination__link" title="Page 3">3</a>
    </li>
    <li>
      <a class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label" href="#">Page suivante</a>
    </li>
    <li>
      <a class="fr-pagination__link fr-pagination__link--last" href="#">Dernière page</a>
    </li>
  </ul>
</nav>
`;
