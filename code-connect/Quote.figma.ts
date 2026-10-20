// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=3539-147529
// component=Citation

import figma from 'figma';

export default figma.html`
<figure class="fr-quote">
  <blockquote>
    <p>« Texte de la citation mettant en avant une parole officielle ou un témoignage clé. »</p>
  </blockquote>
  <figcaption>
    <p class="fr-quote__author">Auteur de la citation</p>
    <ul class="fr-quote__source">
      <li><cite>Titre de l'ouvrage ou fonction officielle</cite></li>
    </ul>
  </figcaption>
</figure>
`;
